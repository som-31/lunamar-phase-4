import React from 'react';
import { Link } from 'react-router-dom'


function Employee(){
   
  
    return(
        <>
            <div style={{"text-align":"center", color: "brown"}}>
            <h1> Choose your catergory </h1>  
            </div>
            <div id='service-form' class='service-page'>
                <div class="service-sub-block">
                    <div class="service-sub-block-header"><Link to='/manager'>Manager</Link></div>
                </div>
            </div>
            <div id='service-form' class='service-page'>
                <div class="service-sub-block">
                    <div class="service-sub-block-header"><Link to='/superadmin'>Super Admin</Link></div>
                </div>
            </div>
            <div>
            </div>
        </>
    );
}

export default Employee;