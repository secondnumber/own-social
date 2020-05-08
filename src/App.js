import React from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import ProfilePage from './components/ProfilePage/ProfilePage';

const App = (props) => (
  <div>
    <ProfilePage
      state={props.state}
      dispatch={props.dispatch}
    />
  </div>
);

export default App;
