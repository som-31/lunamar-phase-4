import React from 'react';
import { Link } from 'react-router-dom';

function ManagePlantManager(){

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
    <div id='login-form'class='login-page'>
      <div class="form-box" style="height: 560px;">
          <div class='button-box'>
               <div id='btn'></div>
              
          </div>
          
   <div class="login-registering">
      <center>
          <h1>Manage Plants</h1>
      </center>
   </div>
<form id='register' class='input-group-register'>
    <input type='text'class='input-field'placeholder='Plant Type' required/>
    <br/>
    
   <input type='text'class='input-field'placeholder='Plant Name' required/>
    <br/>
    <br/>
    <textarea placeholder="Plant Description" class="field" style="border: 1px solid black;"></textarea>
    <br/>
    <br/>
    <label for="">Select Garden</label>
    <select name="" id="">
        <option value="">Earth Angels</option>
        <option value="">Flower Dome</option>
        <option value="">Green Solutions</option>
        <option value="">Arbor Gardening</option>
        <option value="">Nature Sharp</option>
        <option value="">Nature Captured</option>
    </select>
    <br/>
    <br/>

 
    <button type='submit'class='submit-btn'>Submit</button>
     </form>
      </div>
  </div>
    
  <center>
    <table>
        <tr>
          <th>Plant Type</th>
          <th>Plant Name</th>
          <th>Description</th>
            <th>Actions</th>
         </tr>
    <tr>
      <td>Flowering</td>
      <td>Agapanthus</td>
      <td>fsdfsdfdsfffcfsfff</td>
    <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
    </td>
    </tr>
    <tr>
        <td>Non Flowering</td>
      <td>club mosses</td>
      <td>fsdfsdfdsfffcfsfff</td>
      
    
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
    </td>
    </tr>
    <tr>
        <td>Non Flowering</td>
      <td>hornworts</td>
      <td>fsdfsdfdsfffcfsfff</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
    </td>
    </tr>
    <tr>
        <td>Non Flowering</td>
      <td>Aliverworts</td>
      <td>fsdfsdfdsfffcfsfff</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
    </td>
    </tr>
    <tr>
      <td>Flowering</td>
      <td>Tulip</td>
      <td>fsdfsdfdsfffcfsfff</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
    </td>
    </tr>
    <tr>
        <td>Flowering</td>
      <td>Lily</td>
      <td>fsdfsdfdsfffcfsfff</td>
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

export default ManagePlantManager;