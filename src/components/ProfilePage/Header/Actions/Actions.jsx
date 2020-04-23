import React from 'react';
import classes from './Actions.module.scss';

const Actions = () => (
  <ul className={classes.wrapper}>
    <li>
      <a className={classes.item} href="http://">
        <svg
          className={classes.icon}
          width="20px"
          viewBox="0 0 20 20"
          preserveAspectRatio="xMinYMin meet"
        >
          <path d="M15.904,6c0.148,0.117,0.347,0.386,0.406,0.557l0.001,0.017l0.676,11.421c-0.005,0.003-0.01,0.005-0.013,0.006H3.029c-0.004-0.001-0.01-0.003-0.016-0.006L3.689,6.573L3.69,6.556C3.749,6.386,3.947,6.117,4.095,6H15.904 M16.075,4H3.924C2.806,4,1.692,5.563,1.692,6.455L1,18.154C1,19.048,1.906,20,3.024,20h13.95C18.093,20,19,19.048,19,18.154L18.308,6.455C18.308,5.563,17.193,4,16.075,4L16.075,4z"></path>
          <path d="M8,8V3.893C8,2.849,8.849,2,9.893,2H10h0.054C11.098,2,12,2.849,12,3.893V8h2V3.893C14,1.743,12.257,0,10.107,0H9.893C7.743,0,6,1.743,6,3.893V8H8z"></path>
        </svg>
      </a>
    </li>
    <li>
      <a className={classes.item} href="http://">
        <svg
          className={classes.icon}
          width="20px"
          viewBox="0 0 20 20"
          preserveAspectRatio="xMinYMin meet"
        >
          <path
            d="M10,0C4.477,0,0,4.478,0,10c0,5.523,4.477,10,10,10c5.522,0,10-4.477,10-10C20,4.478,15.522,0,10,0z M10,18c-4.418,0-8-3.582-8-8c0-4.418,3.582-8,8-8s8,3.582,8,8
        C18,14.418,14.418,18,10,18z M10,13c-1.305,0-2.403-0.838-2.816-2H5.101c0.464,2.282,2.48,4,4.899,4s4.436-1.718,4.899-4h-2.083C12.403,12.162,11.305,13,10,13z M7,7H5v2h2V7z M13,9h2V7h-2V9z"
          ></path>
        </svg>
      </a>
    </li>
    <li>
      <a className={classes.item} href="http://">
        <svg
          className={classes.icon}
          width="20px"
          viewBox="0 0 20 20"
          preserveAspectRatio="xMinYMin meet"
        >
          <path d="M12,2c1.103,0,2,0.897,2,2v5c0,1.103-0.897,2-2,2H8H7.754l-0.239,0.06L2,12.438V9V4c0-1.103,0.897-2,2-2H12M12,0H4C1.791,0,0,1.791,0,4v5v6l8-2h4c2.209,0,4-1.791,4-4V4C16,1.791,14.209,0,12,0L12,0z"></path>
          <path d="M12,5.012C12,5.558,11.558,6,11.013,6H4.987C4.442,6,4,5.558,4,5.012V4.988C4,4.442,4.442,4,4.987,4h6.025C11.558,4,12,4.442,12,4.988V5.012z"></path>
          <path d="M10,8.047C10,8.574,9.573,9,9.047,9H4.953C4.427,9,4,8.574,4,8.047V7.953C4,7.426,4.427,7,4.953,7h4.094C9.573,7,10,7.426,10,7.953V8.047z"></path>
          <path d="M17,5.142v2.136C17.595,7.625,18,8.263,18,9v5v3.438l-5.516-1.379L12.246,16H12H8c-0.737,0-1.375-0.405-1.722-1H4.142C4.588,16.722,6.139,18,8,18h4l8,2v-6V9C20,7.139,18.722,5.588,17,5.142z"></path>
        </svg>
      </a>
    </li>
    <li>
      <a className={classes.item} href="http://">
        <svg
          className={classes.icon}
          width="20px"
          viewBox="0 0 20 20"
          preserveAspectRatio="xMinYMin meet"
        >
          <path d="M18.583,14.127c-0.023-0.018-2.241-1.758-2.241-7.52C16.342,2.964,13.497,0,10.004,0C6.511,0,3.668,2.964,3.668,6.607c0,5.762-2.22,7.502-2.228,7.508c-0.365,0.254-0.525,0.725-0.397,1.158c0.129,0.434,0.517,0.73,0.957,0.73h16.007c0.433,0,0.81-0.293,0.943-0.719C19.086,14.861,18.932,14.389,18.583,14.127zM4.086,13.939C4.873,12.527,5.67,10.21,5.67,6.607c0-2.505,1.945-4.542,4.334-4.542c2.391,0,4.335,2.038,4.335,4.542c0,3.603,0.796,5.92,1.583,7.333H4.086z M12.418,17.146c-0.57-0.283-1.293-0.115-1.619,0.381c-0.126,0.191-0.327,0.326-0.567,0.383c-0.234,0.051-0.478,0.023-0.688-0.084c-0.138-0.07-0.255-0.174-0.336-0.297c-0.325-0.496-1.05-0.668-1.618-0.385c-0.568,0.283-0.766,0.914-0.44,1.408c0.286,0.438,0.7,0.803,1.194,1.055C8.854,19.867,9.421,20,9.997,20c0.281,0,0.564-0.031,0.843-0.096c0.856-0.197,1.573-0.676,2.016-1.348C13.182,18.061,12.984,17.432,12.418,17.146z"></path>
        </svg>
      </a>
    </li>
  </ul>
);

export default Actions;
