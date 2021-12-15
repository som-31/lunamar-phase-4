import React from 'react';
import { Link } from 'react-router-dom';

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function ChatVisitor(){
   
 
    return(
        <>
   

   <div class="sidebar">

<Link to='/visit-apartment'>Visit Apartment</Link>
<Link to='/visit-garden'>Visit Garden</Link>
<Link to='/manage-incident'>Manage Incident</Link>

<Link to='/chat-visitor'>Chat</Link>
</div>    <div>
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

export default ChatVisitor;