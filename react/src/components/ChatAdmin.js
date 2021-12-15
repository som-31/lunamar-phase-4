import React from 'react';
import { Link } from 'react-router-dom';


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


function ChatAdmin(){
   
    return(
        <>
   


            <div class="sidebar">
            <Link to="/manage-reports-admin">Manage Reports</Link>
            <Link to='/manage-manager-admin'>Manage Manager</Link>
            <Link to="/manage-building-manager">Manage Building</Link>
            <Link to='/manage-resident-manager'>Manage Resident</Link>
            <Link to='/manage-apartment-manager'>Manage Apartment</Link>
            <Link to='/manage-service-manager'>Manage Service</Link>
            <Link to='/manage-visitor-manager'>Manage Visitor</Link>
            <Link to='/manage-amenities-manager'>Manage Amenities</Link>
            <Link to='/chat-admin'>Chat</Link>
        </div>
    <div>
    <h1 style={{textAlign:"center"}}>
            Welcome, Visitor
        </h1>

        <button class="open-button" onClick={openForm}>Chat</button>

        <div class="chat-popup" id="myForm">
          <form  class="form-container">
            <h1>Chat</h1>
        
            <label for="msg"><b>Message</b></label>
            <textarea placeholder="Type message.." name="msg" required></textarea>
        
            <button type="submit" class="btn">Send</button>
            <button type="button" class="btn cancel" onClick={closeForm}>Close</button>
          </form>
        </div>
        
       
    </div>
        

      </>
    );
}

export default ChatAdmin;