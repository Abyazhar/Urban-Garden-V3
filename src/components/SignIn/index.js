import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { emailSignInStart, googleSignInStart } from '../../redux/User/user.actions';

import './styles.scss';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const SignIn = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser } = useSelector(mapState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  

  useEffect(() => {
    if (currentUser) {
      reset();
      history.push('/');  
    }

  }, [currentUser]);

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    dispatch(emailSignInStart( email, password ));
    e.preventDefault();
  }

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  }
 
  

  const configAuthWrapper = {
    headline: 'Login'
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
        <form className='Form' onSubmit={handleSubmit}>

          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={e => setEmail(e.target.value)}
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={e => setPassword(e.target.value)}
          />

            <Button type="submit" buttonStyle='FormButton'>
             Login
            </Button>

          <div className="socialSignin">
           
            <div className="row">
              <Button onClick={handleGoogleSignIn} buttonStyle='FormButton'>
                Sign in with Google
              </Button>
            </div>
          </div>

          <div className="links">
            <Link to="/recovery">
              Reset Password
              </Link>
          </div>

        </form>
      
    </AuthWrapper>
  );
}

export default SignIn;
