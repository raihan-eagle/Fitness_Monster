import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Login = () => {
        const {signInUsingGoogle} = useAuth();
    return (
        
        <div>
            <h1>Please Login here</h1>
            <button className='btn btn-info' onClick={signInUsingGoogle} >Google sign in</button>
            <br />
            <br />
            <form onSubmit="">
                <input type="email" name="" id="" placeholder="Your email here" />
                <br />
                <input type="password" name="" id="" placeholder="password" />
                <br />
                <br />
                <input type="submit" value='Submit' />
                <br />
                <br />
            </form>
            <br />
            <Link to='/register'> Not Registered? Create Account !</Link>
            
        </div>
    );
};

export default Login;