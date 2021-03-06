import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './LoginIntro.module.scss';
import Logo from '../../../assets/LoginPage/Logo.png';

const LoginIntro = () => (
  <div className={classes.intro}>
    <img src={Logo} alt="" />
    <p className={classes.welcome}>WELCOME TO</p>
    <h1 className={classes.header}>VIKINGER</h1>
    <p className={classes.text}>
      The next generation social network & community! Connect with your friends
      and play with our quests and badges gamification system!
    </p>
    <p className={classes.loginButton}>
      <NavLink to="/login" className={classes.link}>Login</NavLink>
    </p>
    <p className={classes.registerButton}>
      <NavLink to="/register" className={classes.link}>Register</NavLink>
    </p>
  </div>
);

export default LoginIntro;
