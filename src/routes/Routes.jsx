import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './../pages/Home';
import Error from '../pages/Error';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement: <Error></Error>,
        
    },
]);

export default Routes;