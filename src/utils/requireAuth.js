import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { addFlashMessage } from '../actions/flashMessagesActions';

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      debugger;
      if (!this.props.isAuthenticated) { //logout状態でWorkshopsPageにアクセスした時
        this.props.addFlashMessage({
          type: 'error',
          text: 'You need to login to access this page'
        });
        this.context.router.push('/login');
      }
    }
    // login状態からlogoutした時の処理
    // mapStateToPropsでisAuthenticatedを監視
    // 更新あればnextPropsとし'/'へ返す
    // logoutイベントで'/'へ返す方法も有り。
    componentWillUpdate(nextProps) {
      debugger;
      if (!nextProps.isAuthenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    addFlashMessage: PropTypes.func.isRequired
  };
  //.push('/');がobjectか検証 routerをpullする
  Authenticate.contextTypes = {
    router: PropTypes.object.isRequired
  };

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.authentication.isAuthenticated
    };
  }

  return connect(mapStateToProps, { addFlashMessage })(Authenticate);
}
