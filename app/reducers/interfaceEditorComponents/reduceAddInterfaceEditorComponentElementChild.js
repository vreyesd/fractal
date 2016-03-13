import elementChildrenTreePathByElementPath from '../../utils/elementChildrenTreePathByElementPath';

export default function reduceAddInterfaceEditorComponentElementChild(state, { elementPath, child }) {
  const elementChildrenTreePath = elementChildrenTreePathByElementPath(elementPath);
  const oldElementChildren = state.getIn(elementChildrenTreePath);
  const newElementChildren = oldElementChildren.push(child);

  return state.setIn(elementChildrenTreePath, newElementChildren);
}