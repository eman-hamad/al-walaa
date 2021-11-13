import React, { Fragment, useEffect, useState } from 'react';
import Logo from '../../components/Logo/Logo';
import '../../convertion/App.css';
import {  Button, Grid, Container } from '@material-ui/core';
import userStyles from './Styles'; 
import Input from '../../components/Input/Input';
import * as actions from '../../store/index';
import { connect } from  'react-redux';
import { BiUserCircle } from 'react-icons/bi'
import { FiLock } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlinePhone } from 'react-icons/ai'
import axios from 'axios';

const initialState = {username: '', email: '', password: '', confirmPassword: '', phone: '', userType: 'vendor'}

navigator.geolocation.getCurrentPosition((position) => {
    initialState.latitude = position.coords.latitude
    initialState.longitude = position.coords.longitude
})


const auth = props => {
    const classes = userStyles();

    const [isSignUp, setSignUp] = useState(false)

    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.onAuth(formData, isSignUp)
    }

    const handleChange = (e) =>{
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const switchMode = () => setSignUp((previsSignUp) => !previsSignUp)

    return (
        <div class="auth">
            <div class="auth__logo">
                <Logo/>     
            </div>
            <div class="auth__vendorContent">
                <Container component="main" maxWidth="sx" >
                        <form className={classes.form} onSubmit={handleSubmit} autoComplete={false}  > 
                            <Grid container spacing={2}   >
                                {
                                    isSignUp && (
                                        <Fragment   >
                                            <Input name="email" label="E-mail" handleChange={handleChange}  icon={<HiOutlineMail class="auth__icon"/>}/>
                                        </Fragment>
                                    )
                                }
                                <Input name="username" label="User name" handleChange={handleChange}  type="text" icon={<BiUserCircle class="auth__icon"/>}/>
                                <Input name="password" label="Password" handleChange={handleChange} type='password' icon={<FiLock class="auth__icon"/>}/>
                                { isSignUp && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type='password' icon={<FiLock class="auth__icon"/>}/>}
                                { isSignUp && <Input name="phone" label="User number" handleChange={handleChange} type='text' icon={<AiOutlinePhone class="auth__icon"/>}/>}
                            </Grid>
                            <Button  type="submit" fullWidth variant="contained" color="white" style={ {"border": "5px solid transparent"
                            ,"borderRadius":"1.5rem" }  } 
                            className={classes.submit}>
                                    {isSignUp ? 'Sign up' : 'Sign in'}
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Button class="form_btn" onClick={switchMode}>
                                        {isSignUp ? 'Already have an account? Sign in': 'Don\'t have an account? Sign up '}
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                </Container> 
            </div>
        </div>
    );
}
 
const mapDispatchToProps = dispatch =>{
    return{
        // email, password, lat, long,
        onAuth: (data, isSignUp)=> dispatch(actions.authVendor(data, isSignUp))
    }
};

export default connect(null, mapDispatchToProps)(auth);

