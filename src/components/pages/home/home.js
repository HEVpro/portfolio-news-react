import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import './home.css'

import {
    selectSignedIn,
    setSignedIn,
    setUserData,
  } from "../../../features/users";

const Homepage = () => {

    const dispatch = useDispatch();

    const login = (response) => {
        console.log(response)
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
    }
    const isSignedIn = useSelector(selectSignedIn)

    return (
        <div className="homepage">
            {!isSignedIn &&
            <div className="main">
                <h1>World's news! 🌏</h1>
                <h3>Welcome to my News seeker!</h3>
                <p>
                    In this place you can see a news seeker created in React!
                    Hope you like!
                </p>
                <GoogleLogin 
                    clientId='803595687824-pe957cvqu7oag7r1c1h0qk8fn5vqpv4u.apps.googleusercontent.com'
                    render={(renderProps) => (
                        <button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            className="login-button"
                        >
                           Log in with <FontAwesomeIcon icon={faGoogle} />
                        </button>
                        )}
                        onSuccess={login} 
                        onFailure={login}
                        isSignedIn={true}
                        cookiePolicy={'single_host_origin'}
                />
            </div> }
           
        </div>
    );
};
export default Homepage;