import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



//////////////
class ManageServiceAdmin extends React.Component {


  INSERT_API = 'https://rxp3828.uta.cloud/php-ph4/insertService.php';
  FETCH_API = 'https://rxp3828.uta.cloud/php-ph4/fetchService.php';
  DELETE_API = 'https://rxp3828.uta.cloud/php-ph4/deleteService.php';

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',

      serviceRecords: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.renderTableData = this.renderTableData.bind(this);
  }

  componentDidMount() {

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
          serviceRecords: result.data,
        })
        console.log(this.state)
      })
      .catch(error => this.setState({
        error: error.message
      }));
  }

  onSubmit(event) {
    console.log("inside submit");

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
  handleDelete(id) {
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
  handleUpdate(e, id) {
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
    console.log("inside table");
    let services = [];
    for (let index = 0; index < this.state.serviceRecords.length; index++) {
      services[index] = this.state.serviceRecords[index];
    }
    return services.map((service, index) => {
      const { id, name, description } = service //destructuring
      return (
        <tr key={id}>
          <td>{name}</td>
          <td>{description}</td>

          <td>
            <button onClick={this.handleUpdate.bind(this, id)}><img src="assets/icons/pencil.png" alt='Update' width="20" height="20" /></button>
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
                <h1>Manage Services</h1>
              </center>
            </div>
            <form action='' id='register' method='post'>
              <input
                type="text" className="field" id="name" placeholder="Service Name" required
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })} />
              <br />
              <textarea name="description"
                placeholder="Service Description"
                id="description" rows="5" cols="39" required value={this.state.description}
                onChange={e => this.setState({ description: e.target.value })}>
              </textarea>
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
              <th>Service Description</th>

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
/////////////


export default ManageServiceAdmin;