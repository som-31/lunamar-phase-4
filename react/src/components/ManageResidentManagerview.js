import React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

class ManageResidentManagerview extends React.Component {

FETCH_API = 'https://rxp3828.uta.cloud/php-ph4/fetchResident.php';
DELETE_API = 'https://rxp3828.uta.cloud/php-ph4/deleteResident.php';

constructor(props) {
  super(props);
  this.state = {
    resident_name: '',
    email: '',
    phone: '',
    date_of_birth: '',
    gender: '',
    dataSent: '',
    residentRecords: {}
  };
  // this.onSubmit = this.onSubmit.bind(this);
  this.renderTableData = this.renderTableData.bind(this);
}

componentDidMount(){

  /**
   * Request to get the data from Backend
   */
  axios({
    method: 'post',
    url: this.FETCH_API,
    headers: {
      'content-type': 'application/json'
    },
    data: this.state
  })
    .then(result => {
      console.log(result);
      this.setState({
        residentRecords: result.data,
      })
      console.log(this.state)
    })
    .catch(error => this.setState({
      error: error.message
    }));
}

// onSubmit(event) {
//   event.preventDefault();
//   axios({
//     method: 'post',
//     url: this.INSERT_API,
//     headers: {
//       'content-type': 'application/json'
//     },
//     data: this.state
//   })
//     .then(result => {
//       console.log(result);
//       this.setState({
//         dataSent: result.data.sent,
//       })
//       console.log(this.state);
//     })
//     .catch(error => this.setState({
//       error: error.message
//     }));
// }

/**
 * Method to handle delete Logic
 * @param {*} id 
 */
handleDelete(id){
  console.log(id);
  console.log('in here delete function');
  /**
   * Request to delete the data from Backend
   */
       axios({
        method: 'post',
        url: this.DELETE_API,
        headers: {
          'content-type': 'application/json'
        },
        data: { id }
      })
        .then(result => {
          console.log(result);
        })
        .catch(error => {
                this.setState({
                error: error.message
              })
              console.log(error);
         });
}

/**
 * Method to handle update logic
 * @param {*} id 
 */
handleUpdate(e, id){
  console.log('in here update function');
  console.log(id);

  e.preventDefault();
  axios({
    method: 'post',
    url: this.INSERT_API,
    headers: {
      'content-type': 'application/json'
    },
    data: this.state
  })
    .then(result => {
      console.log(result);
      this.setState({
        dataSent: result.data.sent,
      })
      console.log(this.state);
    })
    .catch(error => this.setState({
      error: error.message
    }));
}


renderTableData() {
  let residents = [];
  for (let index = 0; index < this.state.residentRecords.length; index++) {
    residents[index] = this.state.residentRecords[index];
  }
  return residents.map((resident, index) => {
     const { id, resident_name, email, phone, date_of_birth,gender} = resident //destructuring
     return (
        <tr key={id}>
           <td>{resident_name}</td>
           <td>{email}</td>
           <td>{phone}</td>
           <td>{date_of_birth}</td>
           <td>{gender}</td>
           <td>
              <button onClick={this.handleUpdate.bind(this, id)}><img src="assets/icons/pencil.png"alt='Update'  width="20" height="20" /></button>
              <button onClick={this.handleDelete.bind(this, id)}><img src="assets/icons/trash.png" alt='Trash' width="20" height="20" /></button>
            </td>
        </tr>
     )
  })
}





render() {
  return (

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

     

          <div class="login-registering">
            <center>
              <h1>Manage Residents</h1>
            </center>

      </div> <br/><br/>
      <center>
        <table>
          <tr>
            <th>Resident Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
          {
            this.renderTableData()
          }
        </table>
      </center>
    </>
  );
}
}

export default ManageResidentManagerview;