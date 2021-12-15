import React from 'react';
import { Link } from 'react-router-dom';

function Manager(){

    return(
        <>

<div class="sidebar">
            <Link to="/manage-building-manager">Manage Building</Link>
            <Link to='/manage-resident-manager'>Manage Resident</Link>
            <Link to='/manage-apartment-manager'>Manage Apartment</Link>
            <Link to='/manage-service-manager'>Manage Service</Link>
            <Link to='/manage-visitor-manager'>Manage Visitor</Link>
            <Link to='/manage-amenities-manager'>Manage Amenities</Link>
            <Link to='/chat-manager'>Chat</Link>
        </div>
    <div>
        <h1 style={{"text-align":"center"}}>
            Welcome
        </h1>
    </div>
        

      </>
    );
}

export default Manager;
