import React from 'react';
import { Link } from 'react-router-dom';

function Visitor(){

    return(
        <>
    <div class="sidebar">

<Link to='/visit-apartment'>Visit Apartment</Link>
<Link to='/visit-garden'>Visit Garden</Link>
<Link to='/manage-incident'>Manage Incident</Link>

<Link to='/chat-visitor'>Chat</Link>
</div> 
    <div>
        <h1 style={{"text-align":"center"}}>
            Welcome
        </h1>
    </div>
        

      </>
    );
}

export default Visitor;
