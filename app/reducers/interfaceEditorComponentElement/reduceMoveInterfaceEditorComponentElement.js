import treePathByElementPath from '../../utils/treePathByElementPath';
import elementPropValueTreePathByElementPathAndPropName from '../../utils/elementPropValueTreePathByElementPathAndPropName';

export default function reduceMoveInterfaceEditorComponentElement(state, { elementPath, desiredParentElementPath }) {
  const elementTreePath = treePathByElementPath(elementPath);
  const element = state.getIn(elementTreePath);

  const desiredParentElementChildrenTreePath = elementPropValueTreePathByElementPathAndPropName(desiredParentElementPath, 'children');
  const oldDesiredParentElementChildren = state.getIn(desiredParentElementChildrenTreePath);
  const newDesiredParentElementChildren = oldDesiredParentElementChildren.push(element);
  const treeWithElementAtNewLocation = state.setIn(desiredParentElementChildrenTreePath, newDesiredParentElementChildren);

  // If element path contains desired parent element path (meaning the user is
  // attempting to move the element into its own descendant), don't commit the change
  const desiredParentElementIsDescendantOfElement = elementPath.equals(desiredParentElementPath.take(elementPath.size));
  if (desiredParentElementIsDescendantOfElement) {
    return state;
  }

  // Return tree with element at new location, with value at old element path deleted
  return treeWithElementAtNewLocation.deleteIn(elementTreePath);
}
