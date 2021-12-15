import React from 'react';
import { Link } from 'react-router-dom';


import axios from 'axios';

class VisitGarden extends React.Component {

  INSERT_API = 'http://localhost:8000/api/saveGarden/';
  FETCH_API = 'http://localhost:8000/api/gardenList/';
  DELETE_API = 'http://localhost:8000/api/deleteGarden/';

  constructor(props) {
    super(props);
    this.state = {
      garden_name: '',
      opening_hours: '',
      closing_hours: '',
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
    console.log("inside submit")
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
          url: this.DELETE_API+id,
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
    console.log("inside table");

    let buildings = [];
    for (let index = 0; index < this.state.buildingRecords.length; index++) {
      buildings[index] = this.state.buildingRecords[index];
    }
    return buildings.map((building, index) => {
       const { id, garden_name, opening_hours, closing_hours} = building //destructuring
       return (
          <tr key={id}>
             <td>{garden_name}</td>
             <td>{opening_hours}</td>
             <td>{closing_hours}</td>
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

<Link to='/visit-apartment'>Visit Apartment</Link>
<Link to='/visit-garden'>Visit Garden</Link>
<Link to='/manage-incident'>Manage Incident</Link>

<Link to='/chat-visitor'>Chat</Link>
</div> 

        <div id='login-form' class='login-page'>
          <div class="form-box">
            <div class='button-box'>
              <div id='btn'></div>

            </div>

            <div class="login-registering">
              <center>
                <h1>Visit Garden</h1>
              </center>
            </div>
            <form action='' id='register' method='post'>
                                <input 
                                type="text" className="field" id="garden_name" placeholder="Garden Name" required
                                value={this.state.garden_name}
                                onChange={e => this.setState({ garden_name: e.target.value })} />
                                <input type="number" className="field" id="opening_hours" placeholder="Opening hours HH:MM:SS" required
                                value={this.state.opening_hours}
                                onChange={e => this.setState({ opening_hours: e.target.value })}
                                />
                                <input type="number" className="field" id="closing_hours" placeholder="Closing hours"  required 
                                value={this.state.closing_hours}
                                onChange={e => this.setState({ closing_hours: e.target.value })}
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
              <th>Garden Name</th>
              <th>Opening at</th>
              <th>Closing At</th>
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

// function VisitGarden(){

//     return (
//         <>
// <div class="sidebar">

// <Link to='/visit-apartment'>Visit Apartment</Link>
// <Link to='/visit-garden'>Visit Garden</Link>
// <Link to='/manage-incident'>Manage Incident</Link>

// <Link to='/chat-visitor'>Chat</Link>
// </div>
//     <div id='login-form'class='login-page'>
//       <div class="form-box" style={{height: '700px' }}>
//           <div class='button-box'>
//                <div id='btn'></div>
             
//           </div>
          
//    <div class="login-registering">
//       <center>
//           <h1>Request Visit Garden</h1>
//       </center>
//    </div>
// <form id='register' class='input-group-register'>
   
//     <input type='text'class='input-field'placeholder='First Name' required/> 
//     <input type='text'class='input-field'placeholder='Last Name' required/>
//     <input type='text'class='input-field'placeholder='Visiting Garden Name' required/>
    
   
    
//  <input type='text'class='input-field'placeholder='Address' required/>
//  <input type='text'class='input-field'placeholder='State' required/>
//  <input type='text'class='input-field'placeholder='City' required/>
//  <label for="">Entry At</label>
//     <input type='time'class='input-field'placeholder='Entry At' required/>
//     <label for="">Exit At</label>
//     <input type='time'class='input-field'placeholder='Exit At' required/>
//     <input type='number'class='input-field'placeholder='Phone' required/>
//     <input type="number" class='input-field' placeholder='Zip Code' required/>

//               <button type='submit'class='submit-btn'>Submit</button>
//      </form>
//       </div>
//   </div>
//   <center>
//     <table>
//         <tr>
//           <th>Visitor</th>
//           <th>Visiting Garden Name</th>
//           <th>Entry At</th>
//           <th>Exit At</th>
//           <th>Actions</th>
//         </tr>
//     <tr>
//       <td>Michael Kors</td>
//       <td>Earth Angels</td>
//       <td>7:30 AM</td>
//       <td>11:20 PM</td>
      
//       <td>
//         <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
//       <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
//     </td>
//     </tr>
//     <tr>
//       <td>Rohit padwal</td>
//       <td>Flower Dome3</td>
//       <td>8:30 AM</td>
//       <td>11:20 PM</td>
//       <td>
//         <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
//       <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
//     </td>
//     </tr>
//     <tr>
//       <td>Ernst Handel</td>
//       <td>Green Solutions</td>
//       <td>05:00 PM</td>
//       <td>9:00 PM</td>
      
//       <td>
//         <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
//       <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
//     </td>
//     </tr>
//     <tr>
//       <td>Island Trading</td>
//       <td>Arbor Gardening</td>
//       <td>09:00 AM</td>
//       <td>4:00 PM</td>
   
//       <td>
//         <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
//       <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
//     </td>
//     </tr>
//     <tr>
//       <td>Sayali Deshmukh</td>
//       <td>Nature Sharp</td>
//       <td>7:30 AM</td>
//       <td>12:00 PM</td>
      
//       <td>
//         <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
//       <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
//     </td>
//     </tr>
//     <tr>
//       <td>Somnath Jadhav</td>
//       <td>Nature Captured7</td>
//       <td>09:00 AM</td>
//       <td>1:00 PM</td>
//     <td>
//         <button><img src="assets/icons/pencil.png" alt="edit image" width="20" height="20"/></button>
//       <button><img src="assets/icons/trash.png" alt="Delete image" width="20" height="20"/></button>
//     </td>
//     </tr>
//   </table>
// </center>
//         </>
//     );
// }

export default VisitGarden;
