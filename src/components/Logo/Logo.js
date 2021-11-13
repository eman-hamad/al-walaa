import React, { Fragment } from 'react'
import img from '../../images/logo.png'
import { Link } from 'react-router-dom'; 

export default function logo() {
    return (
        <Link class="logo" to="/">
            <h1 class="logo__title">الولاء</h1>
            <img src={img} class="logo__img" alt="Logo"/>
        </Link>
    )
}
