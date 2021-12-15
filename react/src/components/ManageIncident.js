import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ManageIncident extends React.Component {

  API_PATH = 'https://rxp3828.uta.cloud/php-ph4/manageincident.php'

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      floors: '',
      total_apartments: '',
      occupancy: '',
      dataSent: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('in Submit function');
    console.log(this.state);
    axios({
      method: 'post',
      url: this.API_PATH,
      headers: {
        'content-type': 'application/json'
      },
      data: this.state
    })
      .then(result => {
        console.log(result.data)
        this.setState({
          dataSent: result.data.sent,
        })
        console.log(this.state)
      })
      .catch(error => this.setState({
        error: error.message
      }));
  }
  render() {
    return (

      <>
<div class="sidebar">

<Link to='/visit-apartment'>Visit Apartment</Link>
<Link to='/visit-garden'>Visit Garden</Link>
<Link to='/manage-incident'>Manage Incident</Link>

<Link to='/chat-visitor'>Chat</Link>
</div>    <div id='login-form'class='login-page'>
      <div class="form-box">
          <div class='button-box'>
               <div id='btn'></div>
            
          </div>
        
   <div class="login-registering">
      <center>
          <h1>Manage Incidentss</h1>
      </center>
   </div>
<form id='register' class='input-group-register'>
   
    <input type='text'class='input-field'placeholder='Incident Name' required/>
    <input type='text'class='input-field'placeholder='Visitor Name' required/>
    <br/>
    <br/>
    <textarea placeholder="Description" class="field" style={{border: '1px solid black' }}></textarea> 
    <input type='text'class='input-field'placeholder='Visiting Apartment Id' required/>
    <br/>
    <br/>
    <label for="">Select Visitor</label>
    <select name="" id="">
        <option value="">Sayali Deshmukh</option>
        <option value="">Somnath Jadhav</option>
        <option value="">Rohit Padwal</option>
        <option value="">Michael Kors</option>
        <option value="">Ernst Handel</option>
        <option value="">Island Trading</option>
    </select>
    <br/>
    <br/>
 
 

<div>
    <label for="">Incident At:</label>
    <input type="time" name="" id="" placeholder="incident_at" class="input-field"/>   
</div>
    <button type='submit'class='submit-btn'>Submit</button>
     </form>
      </div>
  </div>
    
  <center>
    <table>
        <tr>
          <th>Incident Name</th>
          <th>Visitor Name</th>
          <th>Visiting Apartment Id</th>
          <th>Incident At</th>
          <th>Description</th>
            <th>Actions</th>
         </tr>
    <tr>
      <td>Verbal Abuse</td>
      <td>Sayali Deshmukh</td>
      
      <td>12</td>
      <td>11:20 PM</td>
      <td>fsdfsdfdsfffcfsfff</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
    </td>
    </tr>
    <tr>
        <td>Harrassment</td>
        <td>Somnath Jadhav</td>
        
        <td>13</td>
        <td>1:20 PM</td>
        <td>fsdfsdfdsfffcfsfff</td>
      
    
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
    </td>
    </tr>
    <tr>
        <td>murder</td>
        <td>Rohit Padwal</td>
      
        <td>13</td>
        <td>5:20 PM</td>
        <td>fsdfsdfdsfffcfsfff</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
    </td>
    </tr>
    <tr>
        <td>Roberry</td>
        <td>Michael Kors</td>
        
        <td>20</td>
        <td>6:00 AM</td>
        <td>fsdfsdfdsfffcfsfff</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
    </td>
    </tr>
    <tr>
      <td>Roberry</td>
      <td>Ernst Handel</td>
      
      <td>34</td>
      <td>6:30 PM</td>
      <td>fsdfsdfdsfffcfsfff</td>
      <td>
        <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
      <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
    </td>
    </tr>
    <tr>
        <td>Roberry</td>
        <td>Island Trading</td>
      
        <td>3</td>
        <td>10:00 PM</td>
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
}

export default ManageIncident;
