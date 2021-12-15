import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ManageBuildingAdmin extends React.Component {

  INSERT_API = 'https://rxp3828.uta.cloud/php-ph4/insertbuilding.php';
  FETCH_API = 'https://rxp3828.uta.cloud/php-ph4/fetchBuilding.php';
  DELETE_API = 'https://rxp3828.uta.cloud/php-ph4/deleteBuilding.php';

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      floors: '',
      total_apartments: '',
      occupancy: '',
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
       const { id, name, floors, occupancy, total_apartments} = building //destructuring
       return (
          <tr key={id}>
             <td>{name}</td>
             <td>{floors}</td>
             <td>{occupancy}</td>
             <td>{total_apartments}</td>
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
                <h1>Manage Buildings</h1>
              </center>
            </div>
            <form action='' id='register' method='post'>
                                <input 
                                type="text" className="field" id="name" placeholder="Your Name" required
                                value={this.state.name}
                                onChange={e => this.setState({ name: e.target.value })} />
                                <input type="number" className="field" id="floors" placeholder="Floors" required
                                value={this.state.floors}
                                onChange={e => this.setState({ floors: e.target.value })}
                                />
                                <input type="number" className="field" id="total_apartments" placeholder="Total Apartments"  required 
                                value={this.state.total_apartments}
                                onChange={e => this.setState({ total_apartments: e.target.value })}
                                />
                                <input type="number" className="field" placeholder="Occupancy" id="occupancy" required
                                value={this.state.occupancy}
                                onChange={e => this.setState({ occupancy: e.target.value })}
                                />
                                <input type="submit" 
                                value="Submit" 
                                onClick={e => this.onSubmit(e)} 
                                className="submit-btn" />
                            </form>
          </div>
        </div>
        <center>
          <table>
            <tr>
              <th>Name</th>
              <th>Floors</th>
              <th>Occupancy</th>
              <th>Total Apartments</th>
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


export default ManageBuildingAdmin;