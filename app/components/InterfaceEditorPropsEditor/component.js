import React, { Component, Image, PropTypes, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { OrderedMap } from 'immutable';
import { elementPathPropType } from '../../constants/propTypes';
import propValueByProp from '../../utils/propValueByProp';
import propValueInputTypeByProp from '../../utils/propValueInputTypeByProp';
import CollapsibleListSection from '../CollapsibleListSection';
import styles from './styles';

// (Button image assets)
import addButtonImage from '../../assets/img/addButton.png';
import deleteButtonImage from '../../assets/img/deleteButton.png';
import duplicateButtonImage from '../../assets/img/duplicateButton.png';

export default class InterfaceEditorPropsEditor extends Component {
  static propTypes = {
    onPressAddProp: PropTypes.func.isRequired,
    onPressDeleteProp: PropTypes.func.isRequired,
    onPressDuplicateProp: PropTypes.func.isRequired,
    onPressProp: PropTypes.func.isRequired,
    props: PropTypes.objectOf(PropTypes.any),
    propTypes: PropTypes.objectOf(PropTypes.any),
    selectedElementPath: elementPathPropType,
    selectedProp: PropTypes.string,
  };

  renderPropsList() {
    const { props } = this.props;
    const propsMap = new OrderedMap(props).delete('children');

    if (!props) {
      return null;
    }

    return (
      <ScrollView style={styles.propsList}>
        {propsMap.map((prop, propName) => this.renderPropListProp(prop, propName)).toArray()}
      </ScrollView>
    );
  }

  renderPropListProp(prop, propName) {
    const {
      onPressProp,
      selectedPropName,
    } = this.props;
    const isSelectedProp = propName === selectedPropName;
    const propHeaderSectionStyle = isSelectedProp
      ? styles.selectedPropHeaderSection
      : null;
    const propTitleLabelStyle = isSelectedProp
      ? styles.selectedPropTitleLabel
      : null;
    const propValue = propValueByProp(prop);
    const propValueInputType = propValueInputTypeByProp(prop);
    console.log('renderPropListProp... propName:', propName, 'propValueInputType:', propValueInputType);

    return (
      <CollapsibleListSection
        key={propName}
        headerSectionStyle={propHeaderSectionStyle}
        onPress={() => onPressProp(propName)}
        title={propName}
        titleLabelStyle={propTitleLabelStyle}
      >
        <Text>{propValue}</Text>
      </CollapsibleListSection>
    );
  }

  renderSelectedPropOptions() {
    const { selectedPropName } = this.props;

    // If no prop is selected, don't render any options UI for it
    if (!selectedPropName) {
      return null;
    }

    return (
      <View style={styles.selectedPropOptions}>
        <View style={styles.selectedPropOptionsRow}>
          <TouchableOpacity
            onPress={() => console.log('Change input type for prop:', selectedPropName)}
            style={styles.selectedPropOptionsColumn}
          >
            <Text style={styles.selectedPropOptionLabel}>
              Input Type
            </Text>
            <Text style={styles.selectedPropOptionValueLabel}>
              Literal
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderPropsActionsSection() {
    const {
      onPressAddProp,
      onPressDeleteProp,
      onPressDuplicateProp,
      selectedElementPath,
      selectedPropName,
    } = this.props;

    return (
      <View style={styles.propsActionsSection}>
        <TouchableOpacity onPress={() => onPressAddProp(selectedElementPath, 'TODO: Get prop name')} style={styles.propsActionButton}>
          <Image source={addButtonImage} style={[styles.propsActionButtonImage, styles.propsAddActionButtonImage]}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressDuplicateProp(selectedElementPath, selectedPropName)} style={styles.propsActionButton}>
          <Image source={duplicateButtonImage} style={styles.propsActionButtonImage}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressDeleteProp(selectedElementPath, selectedPropName)} style={styles.propsActionButton}>
          <Image source={deleteButtonImage} style={styles.propsActionButtonImage}/>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderPropsList()}
        {this.renderSelectedPropOptions()}
        {this.renderPropsActionsSection()}
      </View>
    );
  }
}
