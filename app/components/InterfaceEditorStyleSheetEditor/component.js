import React, {
  Component,
  Image,
  PropTypes,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { Picker } from '../../vendor/pro-inputs/src';
import { componentStyleSheetMapPropType } from '../../constants/propTypes';
import InterfaceEditorStyleEditorInput from '../InterfaceEditorStyleEditorInput';
import styles from './styles';

// (Button image assets)
import addButtonImage from '../../assets/img/addButton.png';
import deleteButtonImage from '../../assets/img/deleteButton.png';
import duplicateButtonImage from '../../assets/img/duplicateButton.png';

export default class InterfaceEditorStyleSheetEditor extends Component {
  static propTypes = {
    onChangeStyleValue: PropTypes.func.isRequired,
    onPressAddStyle: PropTypes.func.isRequired,
    onPressDeleteStyle: PropTypes.func.isRequired,
    onPressDuplicateStyle: PropTypes.func.isRequired,
    selectedStyleName: PropTypes.string.isRequired,
    setSelectedStyleName: PropTypes.func.isRequired,
    styleSheetMap: componentStyleSheetMapPropType.isRequired,
  };

  renderStyleEditorInputScrollView() {
    const { onChangeStyleValue } = this.props;

    return (
      <ScrollView
        contentContainerStyle={styles.inputScrollViewContentContainer}
        style={styles.inputScrollView}
      >
        <InterfaceEditorStyleEditorInput onChangeValue={onChangeStyleValue}/>
      </ScrollView>
    );
  }

  renderSelectedStyleOptions() {
    const {
      selectedStyleName,
      setSelectedStyleName,
      styleSheetMap,
    } = this.props;

    const styleNamesPickerItems = styleSheetMap.keySeq().map(styleName => ({
      label: styleName,
      value: styleName,
    })).toJS();

    return (
      <View style={styles.selectedStyleNameOptions}>
        <View style={styles.selectedStyleNameOptionsRow}>
          <View style={styles.selectedStyleNameOptionsColumn}>
            <Picker
              name="Selected Style Name"
              items={styleNamesPickerItems}
              onChangeSelectedValue={(newValue) => setSelectedStyleName(newValue)}
              selectedValue={selectedStyleName}
            />
          </View>
        </View>
      </View>
    );
  }

  renderStylesActionsSection() {
    const {
      onPressAddStyle,
      onPressDeleteStyle,
      onPressDuplicateStyle,
      selectedStyleName,
    } = this.props;

    return (
      <View style={styles.stylesActionsSection}>
        <TouchableOpacity onPress={() => onPressAddStyle('TODO: Get style name')} style={styles.stylesActionButton}>
          <Image source={addButtonImage} style={[styles.stylesActionButtonImage, styles.stylesAddActionButtonImage]}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressDuplicateStyle(selectedStyleName)} style={styles.stylesActionButton}>
          <Image source={duplicateButtonImage} style={styles.stylesActionButtonImage}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressDeleteStyle(selectedStyleName)} style={styles.stylesActionButton}>
          <Image source={deleteButtonImage} style={styles.stylesActionButtonImage}/>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderStyleEditorInputScrollView()}
        {this.renderSelectedStyleOptions()}
        {this.renderStylesActionsSection()}
      </View>
    );
  }
}
