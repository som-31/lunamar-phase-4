import React from 'react';
import { Link } from 'react-router-dom';
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function ChatResident(){
   

    
    return(
        <>
   

   <Link to='/manage-service-resident'>Manage Service</Link>
                    <Link to='/manage-visitor-resident'>Manage Visitor</Link>
                    <Link to='/photo-video'>Upload Photo/video</Link>

                    <Link to='/chat-resident'>Chat</Link>
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

export default ChatResident;