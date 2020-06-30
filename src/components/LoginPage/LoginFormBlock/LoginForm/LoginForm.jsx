import React from 'react';
import classes from './LoginForm.module.scss';
import { reduxForm, Field } from 'redux-form';
import {
  maxLengthCreator,
  required,
} from '../../../../utils/validators/validators';
import { Input } from '../../../common/FormsControls/Form';

const maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => (
  <form onSubmit={props.handleSubmit} className={classes.form}>
    <Field
      component={Input}
      name={'login'}
      type={'text'}
      placeholder={'Username or Email'}
      validate={[required, maxLength20]}
    />
    <Field
      component={Input}
      name={'password'}
      type={'password'}
      placeholder={'Password'}
      validate={[required, maxLength20]}
    />
    <label>
      <Field component={'input'} name={'rememberMe'} type="checkbox" />
      Remember Me
    </label>
    <p className={classes.forgot}>
      <a>Forgot Password?</a>
    </p>
    <button className={classes.button}>Login to your Account!</button>
    <p>Login with your Social Account</p>
    <ul className={classes.socialList}>
      <li>
        <a>Facebook</a>
      </li>
      <li>
        <a>Twitter</a>
      </li>
      <li>
        <a>Google</a>
      </li>
      <li>
        <a>Youtube</a>
      </li>
    </ul>
  </form>
);

export default reduxForm({
  form: 'login',
})(LoginForm);