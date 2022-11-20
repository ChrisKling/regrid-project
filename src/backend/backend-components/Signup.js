import React, {useRef, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Box, Button, ButtonGroup, Grid } from "@mui/material";
import FormControl from '@mui/material/FormControl';

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigator = useNavigate();

    async function handleSubmit(e)
    {
        console.log('form submitted')
        e.preventDefault();
        if (passwordRef.current.value === passwordConfirmRef.current.value)
        {
            try{
                setError('');
                setLoading(true);
                await signup(emailRef.current.value, passwordRef.current.value);
                navigator("/profile");
                
            }
            catch(err){
                setError('Account creation failed!');
                console.log(err);
            } 
        }
        else
        {
            setError('Passwords do not match!');
        }
        setLoading(false);
    }
  return (
    <>
    
    <Box  sx={{ background: "#d4df9e" }}>
        {error && <p>ERROR: {error} </p>}
        <Box>
            <Link to='/'> Back To Home </Link>
        </Box>
        <br/>
        <h2>Sign Up</h2>
        <br/>
        <form onSubmit={handleSubmit}>
            <label >Email address</label>
            <br/>
            <input type='text' ref={emailRef} required/>
            <br/><br/>
            <label>Password</label>
            <br/>
            <input type='password' ref={passwordRef} />
            <br/><br/>
            <label >Confirm Password</label>
            <br/>
            <input type='password' ref={passwordConfirmRef} />
            <br/><br/>
            <ButtonGroup variant="contained"aria-label="outlined primary button group">
                <Button disabled={loading} className='w-100' type='submit'>Signup!</Button>
            </ButtonGroup>
        </form>
        <div>
            <br/><br/><br/>
            Already a member? <Link to='/login'> Log In </Link>
        </div>
    </Box>
    
    </>
  )
}
