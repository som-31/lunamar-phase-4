import React from 'react';
import { Link } from 'react-router-dom';

function SuperAdmin(){

    return(
        <>
    

   {/* <AdminSideNav/> */}
   <div class="sidebar">
   <Link to="/manage-reports-admin">Manage Reports</Link>
        <Link to="/manage-manager">Manage Manager</Link>

            <Link to="/manage-building-admin">Manage Building</Link>
            <Link to='/manage-resident-admin'>Manage Resident</Link>
            <Link to='/manage-apartment-admin'>Manage Apartment</Link>
            <Link to='/manage-service-admin'>Manage Service</Link>
            <Link to='/manage-visitor-admin'>Manage Visitor</Link>
            <Link to='/manage-amenities-admin'>Manage Amenities</Link>
            <Link to='/chat-admin'>Chat</Link>
    </div>
    <div>
        <h1 style={{'text-align':'center'}}>
            Welcome, Somnath !
        </h1>
    </div>

        

      </>
    );
}

export default SuperAdmin;
