import { PropTypes } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { portraitOrientation, landscapeOrientation } from './canvasOrientations';

export const canvasDevicePropType = ImmutablePropTypes.mapOf({
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
});

export const canvasOrientationPropType = PropTypes.oneOf([
  portraitOrientation,
  landscapeOrientation,
]);

export const elementPathPropType = ImmutablePropTypes.listOf(
  PropTypes.number,
);

export const elementPropType = PropTypes.shape({
  displayName: PropTypes.string,
  type: PropTypes.func.isRequired,
  props: PropTypes.object,
});

export const treePathPropType = ImmutablePropTypes.listOf(
  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
);
