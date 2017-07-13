// import React, { PropTypes } from 'react';
// import {connect} from 'react-redux';
// import WebglList from './WebglList';
// import * as webgjActions from '../../actions/webgjActions';
// import bindActionCreators from 'redux';
//
// class WebglPage extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//     this.deleteWebgl = this.deleteWebgl.bind(this);
//   }
//
//   deleteWebgl(event) {
//     event.preventDefault();
//     const webgl = event.target.id;
//     debugger;
//     this.props.actions.deleteWebgl(webglId);
//   }
//
//
//   render() {
//     const { webgl } = this.props;
//
//     return (
//       <div>hellop</div>
//     );
//   }
// } // pae end
//
//
//
// WebglPage.propTypes = {
//   webgl: PropTypes.object.isRequired,
//   actions: PropTypes.object.isRequired
// }
//
// function mapStateToProps(state, ownProps) {
//   return {
//     webgl: state.webgl
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators8(webgjActions, dispatch)
//   };
// }
//
// export default Component(
//   mapStateToProps,
//   mapDispatchToProps
// )(WebglPage);
