import React from 'react';
import classes from './Users.module.scss';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  let pagesCount = Math.ceil(
    props.friends.totalUsersCount / props.friends.pageSize
  );
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.pages}>
        {pages.map((page) => {
          if (page <= 20) {
            return (
              <span
                className={
                  props.friends.currentPage === page
                    ? classes.selectedPage
                    : classes.pageNumber
                }
                onClick={(event) => {
                  props.onPageChanged(page);
                }}
              >
                {page}
              </span>
            );
          }
        })}
      </div>
      <ul className={classes.list}>
        {props.friends.users.map((el) => {
          return (
            <li className={classes.item}>
              <NavLink to={'/profile/' + el.id}>
                <img
                  src={
                    el.photos.small != null
                      ? el.photos.small
                      : props.friends.defaultAvatar
                  }
                  alt=""
                />
                <div>{el.name}</div>
              </NavLink>
              <div>
                {el.followed ? (
                  <button
                    onClick={(userId) => {
                      props.deleteFriend(el.id);
                    }}
                  >
                    Delete Friend -
                  </button>
                ) : (
                  <button
                    onClick={(userId) => {
                      props.addFriend(el.id);
                    }}
                  >
                    Add Friend +
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
