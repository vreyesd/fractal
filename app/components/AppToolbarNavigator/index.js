import React, { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import InterfaceEditor from '../../InterfaceEditor';
import styles from './styles';

// (Button image assets)
import logoButtonImage from '../../assets/img/logoButton.png';
import interfaceEditorButtonImage from '../../assets/img/interfaceEditorButton.png';
import reducerButtonImage from '../../assets/img/reducerButton.png';
import schemaButtonImage from '../../assets/img/schemaButton.png';
import metricsButtonImage from '../../assets/img/metricsButton.png';


// -- MODEL
export function init(scene = InterfaceEditor) {
  return scene;
}


// -- UPDATE
export function update(state) {
  return state;
}


// -- VIEW
export function view({ state }) {
  return (
    <View style={styles.container}>
      {renderToolbar()}
      {renderScene(state)}
    </View>
  );
}

function renderToolbar() {
  return (
    <View style={styles.toolbar}>
      <View style={styles.toolbarLogoButtonSection}>
        <Image style={styles.toolbarLogoButtonImage} source={logoButtonImage}/>
      </View>
      <ScrollView style={styles.toolbarItemsSection}>
        <TouchableOpacity style={[styles.toolbarButton, styles.toolbarButtonSelected]}>
          <Image style={[styles.toolbarButtonImage, styles.toolbarButtonImageSelected]} source={interfaceEditorButtonImage}/>
        </TouchableOpacity>
        <View style={[styles.toolbarButton, styles.toolbarButtonDisabled]}>
          <Image style={[styles.toolbarButtonImage, styles.toolbarReducerButtonImage]} source={reducerButtonImage}/>
        </View>
        <View style={[styles.toolbarButton, styles.toolbarButtonDisabled]}>
          <Image style={styles.toolbarButtonImage} source={schemaButtonImage}/>
        </View>
        <View style={[styles.toolbarButton, styles.toolbarButtonDisabled]}>
          <Image style={styles.toolbarButtonImage} source={metricsButtonImage}/>
        </View>
      </ScrollView>
    </View>
  );
}

function renderScene({ scene }) {
  return (
    <View style={styles.scene}>
      {scene}
    </View>
  );
}
