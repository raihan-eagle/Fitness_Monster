import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Register = () => {
    const {signInUsingGoogle} = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState ('');
    const [isLogin, setIsLogin] = useState (false);

    const auth = getAuth()


    const toggleLogin = e =>{
        setIsLogin(e.target.checked)
    }
    const handleEmail = e =>{
        setEmail(e.target.value)
    }
    const handlePass = e =>{
        setPassword(e.target.value)
    }
    const handleRegistration = e =>{
        e.preventDefault();
        console.log(email, password);
        if(password.length <6 ){
            setError('Password Must be 6 charracters long')
            return;
        }
      
        isLogin? processLogin(email,password): createNewUser(email, password);
    }

    const processLogin = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            setError(error.message);
        })
    }


    const createNewUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setError('');
            
        })
        .catch(error =>{
            setError(error.message)
        })

    }

    return (
        <div>
            <h2>Please {isLogin ? 'Login': 'Register' }</h2>
            <form onSubmit={handleRegistration}>
                <input onBlur={handleEmail} type="email " name="" id="" placeholder="Your email here" required />
                <br />
                <input onBlur={handlePass} type="password" name="" id="" placeholder="Your password" required />
                <br />
                <input type="submit" value='Submit' />
                <br />
            </form>

            <input onChange={toggleLogin} className ="form-check-input" type="checkbox" id="gridCheck1"/>

            <Link to='/login'> Already have an Account</Link> 

            <div>
                <h6 className='text-danger'>{error}</h6>
            </div>

            <h1>Other options</h1>
            <button className='btn btn-info' onClick={signInUsingGoogle} >Google sign in</button>
            <br />
            <br />
            
        </div>
    );
};

export default Register;