/* eslint-disable no-undef */
require('shelljs/global');

// - Ensure script dependencies are available -
if (!which('curl')) {
  echo('Sorry, this script requires curl');
  exit(1);
}

if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}

// - (Configuration) -
const apphubAppId = process.env.APPHUB_APP_ID;
const apphubAppSecret = process.env.APPHUB_APP_SECRET;
const apphubBuildTarget = 'debug';
const apphubBuildLocation = './build.zip';
const apphubBuildName = 'v' + require('../package.json').version;
const latestCommitMessageQueryExecResult = exec('git log -1 --pretty=%B');
const latestCommitMessageResult = latestCommitMessageQueryExecResult.code === 0
                              ? latestCommitMessageQueryExecResult.stdout
                              : '';
const apphubBuildDescription = latestCommitMessageResult.replace(/(?:\r\n|\r|\n|")/g, '');

// - Create Apphub build -
if (exec('./node_modules/.bin/apphub build -o build.zip --plist-file ./ios/fractalui/Info.plist').code !== 0) {
  echo('Error: Apphub build failed');
  exit(1);
}

// - Ensure Apphub build yielded `build.zip` -
if (exec('ls ' + apphubBuildLocation).code !== 0) {
  echo('Error: Apphub build did not yield `build.zip`');
  exit(1);
}

// - Upload Apphub build & release for all users -
const curlCall = 'curl -X PUT '
+ '-H "X-AppHub-Application-ID: ' + apphubAppId + '" '
+ '-H "X-AppHub-Application-Secret: ' + apphubAppSecret + '" '
+ '-H "Content-Type: application/zip" '
+ '-H \'X-AppHub-Build-Metadata: { '
  + '"target": "' + apphubBuildTarget + '", '
  + '"name": "' + apphubBuildName + '", '
  + '"description": "' + apphubBuildDescription + '"'
+ '}\' '
+ '-L https://api.apphub.io/v1/upload '
+ '--upload-file ' + apphubBuildLocation;
echo('curlCall', curlCall);
const releaseSuccessful = exec(curlCall).code === 0;

if (releaseSuccessful) {
  echo('Apphub build released for ' + apphubBuildTarget + ' users');
}

// - Remove build artifact -
exec('rm build.zip');
