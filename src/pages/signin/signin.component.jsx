import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase';


import './signin.styles.css';

const SignInPage = ({ currentUser }) => (
    <div className="signin">
        <img src="https://www.net-aware.org.uk/siteassets/images-and-icons/application-icons/app-icons-discord.png" alt="logo" />
        <button onClick={signInWithGoogle}>Login with Google</button>

    </div>
)

export default SignInPage;