import React from 'react';
import Profile from './Account';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    account: state.account,
  };
};

const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;