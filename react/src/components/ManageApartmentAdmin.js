import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ManageApartmentAdmin extends React.Component {

  API_PATH = 'https://rxp3828.uta.cloud/php-ph4/manageapartmentadmin.php'

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
          <div class="form-box">
              <div class='button-box'>
                   <div id='btn'></div>
                  
              </div>
            
       <div class="login-registering">
          <center>
              <h1>Manage Apartments</h1>
          </center>
       </div>
        <form id='register' class='input-group-register'>
            <div>
                <label for="">Select Building</label>
                <select name="" id="" class='input-field'>
                    <option value="">Select</option>
                    <option value="">Lunamar</option>
                    <option value="">Supertech</option>
                    <option value="">Gaur</option>
                </select>
            </div>
            <br/>
            <br/>
            <div>
                <label for="">Select Owner</label>
                <select name="" id="" class='input-field'>
                    <option value="">Select</option>
                    <option value="">Sayali Deshmukh</option>
                    <option value="">Rohit Padwal</option>
                    <option value="">Somnath Jadhav</option>
                </select>
            </div>
            <br/>
            <br/>
            <div>
                <label for="">Select Services</label>
                <select name="" id="" class="input-field">
                    <option value="">Electricity</option>
                    <option value="">Light</option>
                    <option value="">Water</option>
                    <option value="">Internet</option>
                </select>
            </div>
            <br/>
            <input type="number" name="" id="" placeholder="Floor" class="input-field"/>
            <input type="text" name="" id="" placeholder="Apartment Id" class="input-field"/>
            <button type='submit'class='submit-btn'>Submit</button>
        </form>
          </div>
      </div>
        <center>
    <table>
        <tr>
          <th>Building Name</th>
          <th>Owner</th>
          <th>Services</th>
          <th>Floor</th>
          <th>Apartment</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>Lunamar</td>
          <td>Sayali Deshmukh</td>
          <td>Electricity, Light, Water</td>
          <td>6</td>
          <td>101</td>
          <td>
            <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
          <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
        </td>
        </tr>
        <tr>
            <td>Lunamar</td>
            <td>Rohit Padwal</td>
            <td>Electricity, Light, Water</td>
            <td>4</td>
            <td>402</td>
            <td>
              <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
            <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
          </td>
        </tr>
        <tr>
            <td>Lunamar</td>
            <td>Somnath Jadhav</td>
            <td>Electricity, Light, Water</td>
            <td>8</td>
            <td>805</td>
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


export default ManageApartmentAdmin;