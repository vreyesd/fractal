import { connect } from 'react-redux/native';
import Tree from './component';

const mapStateToProps = (state) => ({
  showingTree: state.showingTree,
  peekBehindTree: state.peekBehindTree,
  tree: state.tree,
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(Tree);
export { Tree };