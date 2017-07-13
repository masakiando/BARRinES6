import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import WebglForm from './WebglForm';
import {bindActionCreators} from 'redux';
import * as webglActions from '../../actions/webglActions';
import toastr from 'toastr';

class ManageWebglPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      webgl: Object.assign({}, this.props.webgl),
      errors: {}
    };
    this.updateWebglState = this.updateWebglState.bind(this);
    this.saveWebgl = this.saveWebgl.bind(this);
  }

  updateWebglState(event) {
    let webgl = this.state.webgl;
    const field = event.target.name;
    webgl[field] = event.target.value;
    return this.setState({ webgl: webgl });
  }

  saveWebgl(event) {
    event.preventDefault();
    debugger;
    this.props.actions.saveWebgl(this.state.webgl)
    .then(() => this.redirect());
  }

  redirect() {
    toastr.success('Webgl saved');
    // this.context.router.push('/webgles');
  }

  render() {
    return (
      <WebglForm
        webgl={this.state.webgl}
        errors={this.state.errors}
        onChange={this.updateWebglState}
        onSave={this.saveWebgl}
      />
    );
  } // render end
} // class end

ManageWebglPage.propTypes = {
  webgl: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

// ManageWebglPage.contextTypes = {
//   router: PropTypes.object
// };

function getWebglById(webgles, id) {
  const webgl = webgles.filter(webgl => webgl.id == id);
  if(webgl) return webgl[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const webglId = ownProps.params.id;
  let webgl = {
    id: '',
    title: '',
    category: '',
    description: ''
  };

  if( webglId && state.webgles.length > 0 ) {
    webgl = getWebglById(state.webgles, webglId);
  }

  return {
    webgl: webgl
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(webglActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageWebglPage);
