import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';
import './styles.scss';

import {GiThreeLeaves} from 'react-icons/gi';
import  Button  from '../forms/Button';



const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state)
});

const Header = props => {
  const dispatch = useDispatch();
  const { currentUser, totalNumCartItems } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/" className='navbar-logo'>
          <GiThreeLeaves className='navbar-icon'/>
            Urban Garden
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/ourstory">
                Why Us?
              </Link>
            </li>
            <li>
              <Link to="/search">
                Shop
              </Link>
            </li>
          </ul>
        </nav>

        <div className="callToActions">

          <ul>

            <li>
              <Link to="/cart">
                Your Cart ({totalNumCartItems})
              </Link>
            </li>

            {currentUser && [
              <li key={1}>
                <Link to="/dashboard">
                  My Account
                </Link>
              </li>,
              <li key={2}>
                <span onClick={() => signOut()}>
                  LogOut
                </span>
              </li>
            ]}

            {!currentUser && [
              <li key={1}>
                <Link to="/registration">
                  REGISTER
                </Link>
              </li>,
              <li key={2}>
                <Link to="/login">
                  LOGIN
                </Link>
              </li>
            ]}

          </ul>





        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null
};

export default Header;
