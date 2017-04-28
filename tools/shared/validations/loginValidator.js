import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function commonValidations(data) {
  let errors = {};

  if (!data.identifier) {
    errors.identifier = '入力が必須です。';
  }

  if (!data.password) {
    errors.password = '入力が必須です。';
  }
  return {
    errors,
    isValid: isEmpty(errors)
    //errors objectがあったらfalseを返す
    //errorsがない errors object空ならtrueを返す
  };
}
