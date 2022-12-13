import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {SiteNavBar} from "./components/site_nav_bar/SiteNavBar";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {HomePage} from "./components/homepage/HomePage";
import {AddUser} from "./components/add_user/AddUser";
import {DeleteUser} from "./components/delete_user/DeleteUser";

const root = ReactDOM.createRoot(document.getElementById('root'));

/*
* - Hubspot API to display 10 recent contacts
*   ! Display contacts full name, email and any other info
* !Create contacts
*   !Name, Last Name, Email, ID Number, Birthday
*   !Validate Data
* !Delete contacts
* !Responsive
*
* pat-eu1-b9baaf93-0750-4d0c-a403-8297d58a4a51
 */
root.render(
    <>
        <BrowserRouter>
            <SiteNavBar/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/add'} element={<AddUser/>}/>
                <Route path={'/remove'} element={<DeleteUser/>}/>
            </Routes>
        </BrowserRouter>
    </>
);

