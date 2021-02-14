import { Avatar } from '@material-ui/core';
import React, {useState} from 'react';
import { GoogleLogout } from 'react-google-login';
import {useDispatch, useSelector } from "react-redux";
import {selectSignedIn, selectUserData, setInput, setSignedIn, setUserData} from '../../features/users';
import './navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {

    const [search, setSearch] = useState('');
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData);

    const handleSubmit = (e) => {

        e.preventDefault();
        dispatch(setInput(search))

    }

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(setSignedIn(false))
        dispatch(setUserData(null));
    }

    return (
        <div className="navbar">
               
            {isSignedIn && (
            <div className="content-navbar">
                <h2>News of the world! 📄 </h2>  
                <div className="searchBar">
                    <input className="search" 
                            placeholder="Write something to search!"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                    />
                    <button type="submit" onClick={handleSubmit}><FontAwesomeIcon icon={faSearch} /></button>
                </div> 
            </div> 
            )}
            {isSignedIn ? 
                <div className="userNavbar">
                    <Avatar className="avatar" src={userData?.imageUrl} alt={userData?.name}/>
                    <h3>{userData?.givenName}</h3>
                    <GoogleLogout 
                        clientId='803595687824-pe957cvqu7oag7r1c1h0qk8fn5vqpv4u.apps.googleusercontent.com'
                        render={(renderProps) => (
                            <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className="logout-button"
                            >
                              Logout 🤔 ?
                            </button>
                            )}
                            onLogoutSuccess={logout}
                  
                    />
                </div>  : <h3 className="notSignedIn">Please Log in! 🙌 </h3> }
         
        </div>
    )

}

export default Navbar;