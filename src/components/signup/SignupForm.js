import React, {PropTypes} from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import classnames from 'classnames';
import commonValidations from '../../../tools/shared/validations/signupValidator';
import TextFieldGroup from '../common/TextFieldGroup';
import toastr from 'toastr';
// import {browserHistory} from 'react-router';

class SignupForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: {},
      isLoading: false,
      inValid: { username: false, email: false }
    };
    //function bind
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  //cliant Side validate
  SignupFormIsValid() {
    let formIsValid = true;
    const { errors, isValid } = commonValidations(this.state);

    if (!isValid) {
      this.setState({ errors: errors });
      formIsValid = true;
    }
    return formIsValid;
  }

  // onBlur 一意生validations
  checkUserExists(event) {
    debugger;
    const field = event.target.name;
    const val = event.target.value;
    if (val !== '') {
      this.props.isUserExists(val).then(res => {
        let errors = this.state.errors;
        let inValid = this.state.inValid;
        let newinValid;

        if (res.data.user) {
          errors[field] = 'There is user with such ' + field;
          newinValid = true;
        } else {
          errors[field] = '';
          newinValid = false;
        }
        inValid[field] = newinValid;
        this.setState({inValid: inValid});
        this.setState({ errors });
      });
    }
  }

  onSubmit(event) {
    debugger;
    event.preventDefault();

    if(!this.SignupFormIsValid()) { //falseなら処理終了
      return;
    }
    debugger;
    //Server Side userSignupRequest start
    this.setState({ errors: {}, isLoading: true });
    this.props.userSignupRequest(this.state)
      .then(
        () => this.redirect())
        .catch( error => { this.setState({
          errors: error.response.data,
          isLoading: false
        });
      }
    );
  }
  redirect() {
    toastr.success('Signup saved');
    this.props.addFlashMessage({
      type: 'success',
      text: 'You signed up seccessfully. Welcome!'
    });
    this.context.router.push('/');
  }

  render() {
    const { errors } = this.state;
    const options = map(timezones, (val, key) =>
      <option key={val} val={val}>{key}</option>
    );
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>
        <TextFieldGroup
          error={errors.username}
          label="Username"
          onChange={this.onChange}
          checkUserExists={this.checkUserExists}
          value={this.state.username}
          name="username"
        />

      <TextFieldGroup
          error={errors.email}
          label="Email"
          onChange={this.onChange}
          checkUserExists={this.checkUserExists}
          value={this.state.email}
          name="email"
        />

      <TextFieldGroup
          error={errors.password}
          label="Password"
          onChange={this.onChange}
          value={this.state.password}
          name="password"
          type="password"
        />

      <TextFieldGroup
          error={errors.passwordConfirmation}
          label="Password Confirmation"
          onChange={this.onChange}
          value={this.state.passwordConfirmation}
          name="passwordConfirmation"
          type="password"
        />

        <div className={classnames("form-group", { 'has-error': errors.timezone })}>
          <label className="control-label">Timezone</label>
          <select
          value={this.state.timezone}
          onChange={this.onChange}
          name="timezone"
          className="form-control"
          >
            <option value="" disabled>Choose Your timezones</option>
            {options}
          </select>
          {errors.timezone && <div className="alert alert-danger">{errors.timezone}</div>}
          </div>

          <div className="form-group">
            <button disabled={
                      this.state.isLoading ||
                      this.state.inValid.username ||
                      this.state.inValid.email}
                    className="btn btn-primary btn-lg">
              Sign up
            </button>
          </div>
      </form>
    );
  }
}
//this.props list
SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
SignupForm.contextTypes = {
  router: PropTypes.object
};

export default SignupForm;
