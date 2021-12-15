import React from 'react';
import { Link } from 'react-router-dom';

function ManageReport(){

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
  <center>
      <br/>
      <br/>
    <h1>Manage Reports</h1>
    <br/>
    <br/>
</center>

  <center>
    <table>
        <tr>
          <th>Parameter</th>
          <th>2018-2019(% increase)</th>
          <th>2019-2020(% increase)</th>
          <th>2020-2021(% increase)</th>
        </tr>
    <tr>
      <td>Residents</td>
      <td>23</td>
      <td>34</td>
      <td>26</td>
    </tr>
    <tr>
      <td>Services</td>
      <td>26</td>
      <td>37</td>
      <td>21</td>
    </tr>
    <tr>
      <td>Visitors</td>
      <td>45</td>
      <td>57</td>
      <td>24</td>
    </tr>
  </table>
  
</center>
        

      </>
    );
}

export default ManageReport;
