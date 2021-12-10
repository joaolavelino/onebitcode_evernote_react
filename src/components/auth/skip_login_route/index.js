import React from 'react';
import {Route , Navigate} from 'react-router-dom'


function SkipLoginRoute ({children}) {
    return localStorage.getItem('user') ? <Navigate to="/notes"/> : children
}

export default SkipLoginRoute