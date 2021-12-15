import React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

class ManageVisitorAdmin extends React.Component {

  INSERT_API = 'https://rxp3828.uta.cloud/php-ph4/insertVisitor.php';
  FETCH_API = 'https://rxp3828.uta.cloud/php-ph4/fetchVisitor.php';
  DELETE_API = 'https://rxp3828.uta.cloud/php-ph4/deleteVisitor.php';

  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      approval: '',
      address: '',
      state: '',
      city: '',
      entry_at: '',
      exit_at: '',
      phone: '',
      zip_code: '',
      total_apartments: '',     
      dataSent: '',
      buildingRecords: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
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
          buildingRecords: result.data,
        })
        console.log(this.state)
      })
      .catch(error => this.setState({
        error: error.message
      }));
  }

  onSubmit(event) {
    event.preventDefault();
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
    let buildings = [];
    for (let index = 0; index < this.state.buildingRecords.length; index++) {
      buildings[index] = this.state.buildingRecords[index];
    }
    return buildings.map((building, index) => {
       const { id,first_name,last_name,approval,address,state,city,entry_at,exit_at,phone,zip_code} = building //destructuring
       return (
          <tr key={id}>
             <td>{first_name}</td>
             <td>{last_name}</td>
             <td>{approval}</td>
             <td>{address}</td>
             <td>{state}</td>
             <td>{city}</td>
             <td>{entry_at}</td>
             <td>{exit_at}</td>
             <td>{phone}</td>
             <td>{last_name}</td>
             <td>{zip_code}</td>
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

        <div id='login-form' class='login-page'>
          <div class="form-box">
            <div class='button-box'>
              <div id='btn'></div>

            </div>

            <div class="login-registering">
              <center>
                <h1>Manage Visitor</h1>
              </center>
            </div>
            <form action='' id='register' method='post'>
                                <input 
                                type="text" className="field" id="first_name" placeholder="First Name" required
                                value={this.state.first_name}
                                onChange={e => this.setState({ first_name: e.target.value })} />
                                <input 
                                type="text" className="field" id="last_name" placeholder="Last Name" required
                                value={this.state.last_name}
                                onChange={e => this.setState({ last_name: e.target.value })} />
                                <input type="boolean" className="field" id="approval" placeholder="Approval" required
                                value={this.state.approval}
                                onChange={e => this.setState({ approval: e.target.value })}
                                />

<input type="text" className="field" id="address" placeholder="Address" required
                                value={this.state.address}
                                onChange={e => this.setState({ address: e.target.value })}
                                />

<input type="text" className="field" id="state" placeholder="State" required
                                value={this.state.state}
                                onChange={e => this.setState({ state: e.target.value })}
                                />

<input type="text" className="field" id="city" placeholder="City" required
                                value={this.state.city}
                                onChange={e => this.setState({ city: e.target.value })}
                                />

<input type="time" className="field" id="entry_at" placeholder="Entry at"  required 
                                value={this.state.entry_at}
                                onChange={e => this.setState({ entry_at: e.target.value })}
                                />
                                <input type="time" className="field" id="exit_at" placeholder="Exit at"  required 
                                value={this.state.exit_at}
                                onChange={e => this.setState({ exit_at: e.target.value })}
                                />
                                
                                <input type="number" className="field" id="phone" placeholder="Phone"  required 
                                value={this.state.phone}
                                onChange={e => this.setState({ phone: e.target.value })}
                                />

<input type="number" className="field" id="zip_code" placeholder="Zip Code"  required 
                                value={this.state.zip_code}
                                onChange={e => this.setState({ zip_code: e.target.value })}
                                />

                               
                                <input type="submit" 
                                value="Submit" 
                                onClick={e => this.onSubmit(e)} 
                                className="submit-btn" />
                            </form>
          </div>
        </div> <br/> 
        <br/> <br/>
        <center>
          <table>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Approval</th>
              <th>Address</th>
              <th>State</th>
              <th>City</th>
              <th>Entry at</th>
              <th>Exit at</th>
              <th>Phone</th>
              <th>Zip code</th>
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

export default ManageVisitorAdmin;