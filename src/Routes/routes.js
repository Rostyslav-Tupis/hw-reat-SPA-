import React from "react";
import Nav from "../Components/nav-bar/navbar";
import { Route , Routes as ReactRouterRoutes } from "react-router-dom";

import HomePage from '../Components/Pages/home page/home'
import Contact from '../Components/Pages/contact page/contact'
import Photos from '../Components/Pages/photos page/photos'
import Post from '../Components/Pages/post page/post'
import NotFoundPage from "../Components/nofound/nofound";

export const appRoutes ={
    home: {
        path:"/",
        element: <HomePage/>,
    }, 
    photos:{
        path:"/photos",
        element: <Photos/>,
    },
    post:{
        path:"/post",
        element: <Post/>,
    },
    contact:{
        path:"/contact",
        element: <Contact/>,
    },
}

function Routes(){
    return(
        <div>
            <Nav/>
            
            <ReactRouterRoutes>
                {Object.values(appRoutes).map(({path , element}, index)=>(
                    <Route key={index} path={path} element={element} />
                ))}
                <Route path="*" element={<NotFoundPage/>}/>
            </ReactRouterRoutes>
        </div>
    )
}

export default Routes