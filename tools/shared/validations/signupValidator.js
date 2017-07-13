import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function commonValidations(data) {
  let errors = {};
  const minUserNameLength = 5;
  const minPasswordLength = 5;

  if (data.username.length < minUserNameLength) {
    errors.username = `${minUserNameLength} 文字以上の入力が必須です。`;
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Emailとして正しくありません。';
  }
  if (!data.email) {
    errors.email = '入力が必須です。';
  }

  if (data.password == data.username) {
    errors.password = 'UserNameと同じにすることはできません。';
  } if (data.password.length < minPasswordLength) {
      errors.password = `${minPasswordLength} 文字以上の入力が必須です。`;
  }

  if (data.password !== data.passwordConfirmation) {
    errors.passwordConfirmation = 'Passwords must match';
  }

  if (!data.passwordConfirmation) {
    errors.passwordConfirmation = '入力が必須です。';
  }

  if (!data.timezone) {
    errors.timezone = '入力が必須です。';
  }

  return {
    errors,
    isValid: isEmpty(errors) //errors null true
  };
}


//   if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
//     if(form.pwd1.value.length < 6) {
//       alert("Error: Password must contain at least six characters!");
//       form.pwd1.focus();
//       return false;
//     }
//     if(form.pwd1.value == form.username.value) {
//       alert("Error: Password must be different from Username!");
//       form.pwd1.focus();
//       return false;
//     }
//     re = /[0-9]/;
//     if(!re.test(form.pwd1.value)) {
//       alert("Error: password must contain at least one number (0-9)!");
//       form.pwd1.focus();
//       return false;
//     }
//     re = /[a-z]/;
//     if(!re.test(form.pwd1.value)) {
//       alert("Error: password must contain at least one lowercase letter (a-z)!");
//       form.pwd1.focus();
//       return false;
//     }
//     re = /[A-Z]/;
//     if(!re.test(form.pwd1.value)) {
//       alert("Error: password must contain at least one uppercase letter (A-Z)!");
//       form.pwd1.focus();
//       return false;
//     }
//   } else {
//     alert("Error: Please check that you've entered and confirmed your password!");
//     form.pwd1.focus();
//     return false;
//   }
//
//   alert("You entered a valid password: " + form.pwd1.value);
//   return true;
// }
