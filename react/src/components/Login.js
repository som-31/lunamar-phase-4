import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {

 
  FETCH_API = 'https://rxp3828.uta.cloud/php-ph4/login.php';

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
    // this.renderTableData = this.renderTableData.bind(this);
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

  render() {
    return (

      <>
      <BrowserRouter>
        <div id='login-form' class='login-page'>
            <div class="form-box" style={{height: "470px"}}>
                <div class='button-box'>
                    <div id='btn'></div>
                </div>
                <div class="login-heading">
                   <center>
                       <h1>Login</h1>
                   </center>
                </div>
                <form id='login' class='input-group-login'>
                    <input type='text'class='input-field'placeholder='Email Id' required />
		    <input type='password'class='input-field'placeholder='Enter Password' required />
		    <input type='checkbox'class='check-box' /><span>Remember Password</span>
		    <button type='submit'class='submit-btn'>Log in</button>
		 </form>
         <span>Want to be part of us. Then <Link to='/register' >Register</Link> here.</span>
            </div>
        </div>
        </BrowserRouter>
      </>
    );
  }
}

export default Login;