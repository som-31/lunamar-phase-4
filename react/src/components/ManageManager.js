import React from 'react';
import { Link } from 'react-router-dom';

function ManageManager(){

    return(
        <>
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
      <div id='login-form'class='login-page'>
      <div class="form-box" style="height: 650px;">
          <div class='button-box'>
               <div id='btn'></div>
              </div>     
   <div class="login-registering">
      <center>
          <h1>Manage Managers</h1>
      </center>
   </div>
   <form id='register' class='input-group-register'>
    <input type='text'class='input-field'placeholder='First Name' required/>
    <input type='text'class='input-field'placeholder='Last Name ' required/>
    <input type='email'class='input-field'placeholder='Email Id' required/>
    <input type="text" class="input-field" placeholder="Phone" required/>
    <p>Please enter your date of birth</p>
    <input type="date" class="input-field" placeholder="Date of Birth" required/>
     <p>Please select your gender</p>
    <input type="radio" id="male" value="male">Male</input>
    <input type="radio" id="female" value="female">Female</input>
    <input type="radio" id="others" value="others">Others</input>
    <input type='password'class='input-field'placeholder='Enter Password' required/>
    <input type='password'class='input-field'placeholder='Confirm Password'  required/>
    <input type='checkbox'class='check-box'/><span>I agree to the terms and conditions</span>
    <button type='submit'class='submit-btn'>Register</button></form>
  </div>
  </div>
    <center>
<table>
    <tr>
      <th>Manager Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Date of Birth</th>
      <th>Gender</th>
      <th>Actions</th>
    </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Alfreds@lunamar.com</td>
      <td>6823442324</td>
      <td>01/01/1990</td>
      <td>Female</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
    </td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Centro@lunamar.com</td>
      <td>6823442324</td>
      <td>01/01/1990</td>
      <td>Female</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
    </td>
    </tr>
    <tr>
      <td>Ernst Handel</td>
      <td>Ernst@lunamar.com</td>
      <td>6823442324</td>
      <td>01/01/1990</td>
      <td>Female</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
    </td>
    </tr>
  </table>
</center>
        

      </>
    );
}

export default ManageManager;