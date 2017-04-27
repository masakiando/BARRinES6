import React, {PropTypes} from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import commonValidations from '../../../tools/shared/validations/loginValidator';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';

export class LoginForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  isValid() {
    const { errors, isValid } = commonValidations(this.state);

    if(!isValid) {
      this.setState({ errors });
    }

    return isValid;
    //commonValidationsでerrorsがあったらfalse,なければtrue
   }

   onSubmit(e) {
     e.preventDefault();
     debugger;
     if (this.isValid()) { //not emptyなら処理実行
       this.setState({
         errors: {},
         isLoading: true
       });
       //isLoading: trueで button disabled trueにする
       this.props.login(this.state)
       .then(
         (res) => this.context.router.push('/'), //成功 処理 １
         (err) => this.setState(                 //失敗 処理 １
           {
             errors: err.response.data.errors,   //処理 １-1
             isLoading: false                    //処理 1-2
           }
         )
       );
     }
      debugger;
   }
      // errors: err.response.data.errors,

  onChange(event) {
    this.setState({
       [event.target.name]: event.target.value
     });
  }

  render() {
    const {
       identifier,
       errors,
       password,
       isLoading
    } = this.state;
    debugger;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>
        { errors.form &&
          <div className="alert alert-danger">
            {errors.form}
          </div>
        }

        <TextFieldGroup
          name="identifier"
          label="Username / Email"
          value={identifier}
          error={errors.identifier}
          onChange={this.onChange}
        />

        <TextFieldGroup
          name="password"
          label="Password"
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type="password"
        />

        <div className="form-group">
        <button disabled={this.state.isLoading}
                className="btn btn-primary btn-lg">
          Login
        </button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
};

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(null, { login })(LoginForm);
