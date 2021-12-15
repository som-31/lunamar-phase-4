import React from 'react';
import { Link } from 'react-router-dom';

function ManagePoolManager(){

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
        </div>    <div id='login-form'class='login-page'>
      <div class="form-box">
          <div class='button-box'>
               <div id='btn'></div>
            
          </div>
         
   <div class="login-registering">
      <center>
          <h1>Manage Pools</h1>
      </center>
   </div>
<form id='register' class='input-group-register'>
    <br/>
    <input type="number" class='input-field' placeholder='Pool Id' required/> 
<br/>
<br/>
<label for="subdivision">Select Subdivision</label>
    <select name="subdivision" id="subdivision">
        <option value="">Select</option>
        <option value="">Lunamar</option>
        <option value="">Supertech</option>
        <option value="">Gaur</option>
    </select>
    <br/>
    <br/>
    <p>Opening Hours</p>
    <input type="time" class='input-field' required name="" id="opening_hours"/>
    <br/>
    <label for="closing_hours">Closing Hours</label>
    <input type="time" class='input-field' required name="" id="closing_hours"/>
    <br/>
    <p>Last Inspection At</p>
    <input type="date" class='input-field' required name="" id="Last Inspection At"/>
    <br/>
    <label for="Next_Ispection">Next Inspection At</label>
    <input type="date" class='input-field' required name="" id="Next Inspection At"/>
    <br/>
     <button type='submit'class='submit-btn'>Submit</button>
     </form>
      </div>
  </div>
    <center>
<table>
    <tr>
      <th>Pool Id</th>
      <th>Subdivision Name</th>
      <th>Opening Hours</th>
      <th>Closing Hours</th>
      <th>Last Inspection At </th>
      <th>Next Inspection At</th>
       <th>Actions</th>
    </tr>
    <tr>
        <td>01</td>
      <td>Lunamar</td>
      <td>5:00 AM</td>
      <td>11:00 PM</td>
     <td>01/10/2021</td>
     <td>10/10/2021</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
    </td>
    </tr>
    <tr>
        <td> 02</td>
        <td>Lunamar</td>
        <td>9:00 AM</td>
        <td>12:00 PM</td>
       <td>02/10/2021</td>
       <td>12/10/2021</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
    </td>
    </tr>
    <tr>
        <td> 03</td>
        <td>Lunamar</td>
        <td>6:00 AM</td>
        <td>9:00 AM</td>
       <td>03/10/2021</td>
       <td>13/10/2021</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
    </td>
    </tr>
    <tr>
        <td> 04</td>
        <td>Lunamar</td>
        <td>5:30 AM</td>
        <td>1:00 PM</td>
       <td>04/10/2021</td>
       <td>14/10/2021</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
    </td>
    </tr>
    <tr>
        <td> 05</td>
        <td>Lunamar</td>
        <td>4:00 AM</td>
        <td>11:00 AM</td>
       <td>05/10/2021</td>
       <td>15/10/2021</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
    </td>
    </tr>
    <tr>
       <td> 06</td>
        <td>Lunamar</td>
        <td>6:00 AM</td>
        <td>11:00 PM</td>
       <td>06/10/2021</td>
       <td>16/10/2021</td>
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

export default ManagePoolManager;