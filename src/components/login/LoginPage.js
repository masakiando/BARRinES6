import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginForm from './LoginForm';
import * as authActions from '../../actions/authActions';
import commonValidations from '../../../tools/shared/validations/loginValidator';

export class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      identifier: '',
      password: '',
      errors: {},
      loading: false
    };
    this.updaTetargetState = this.updaTetargetState.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  updaTetargetState(event) {
    this.setState({
       [event.target.name]: event.target.value
     });
  }

  isValid() { //nullか検証 TextFieldGroupにerror表示
      const { errors, isValid } = commonValidations(this.state);

      if(!isValid) {
        this.setState({ errors });
      }

      return isValid;
      //commonValidationsでerrorsがあったらfalse,なければtrue
  }

  onLogin(event) {
    event.preventDefault();
    debugger;
    if (this.isValid()) { //isValid true なら処理実行
      this.setState({ //1回目のcommonValidationsでerrorあったら{}に値あるため空にする
        errors: {},
        loading: true
      });
      //isLoading: trueで button disabled trueにする
      this.props.actions.login(this.state)
      .then(
        (res) => this.context.router.push('/'), //成功 処理 １
        (err) => this.setState({                //失敗 処理 １
            //errors.formにerror表示            res.status(401)
          errors: err.response.data.errors,   //処理 １-1 form: 'ユーザーが存在しない' か form: 'パスワードが正しくない'
          loading: false                    //処理 1-2
        })
      );
    }
    debugger;
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm
            onChange={this.updaTetargetState}
            onLogin={this.onLogin}
            identifier={this.state.identifier}
            password={this.state.password}
            errors={this.state.errors}
            loading={this.state.loading}
          />
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  actions: PropTypes.object.isRequired
};

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(LoginPage);
