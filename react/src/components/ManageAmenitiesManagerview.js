import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ManageAmenitiesManagerview extends React.Component {

    API_PATH = 'https://rxp3828.uta.cloud/php-ph4/manageamenitiesmanager.php'
  
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
            <Link to="/manage-building-manager">Manage Building</Link>
            <Link to='/manage-resident-manager'>Manage Resident</Link>
            <Link to='/manage-apartment-manager'>Manage Apartment</Link>
            <Link to='/manage-service-manager'>Manage Service</Link>
            <Link to='/manage-visitor-manager'>Manage Visitor</Link>
            <Link to='/manage-amenities-manager'>Manage Amenities</Link>
            <Link to='/chat-manager'>Chat</Link>
        </div>        <div id='service-form' class='service-page'>
            <div class="service-sub-block">
                <div class="service-sub-block-header"><Link to='/manage-garden-manager'>Manage Garden</Link></div>
            </div>
        </div>
        <div id='service-form' class='service-page'>
            <div class="service-sub-block">
                <div class="service-sub-block-header"><Link to='/manage-pool-manager'>Manage Pool</Link></div>
            </div>
        </div>
        <div id='service-form' class='service-page'>
            <div class="service-sub-block">
                <div class="service-sub-block-header"><Link to='/manage-plant-manager'>Manage Plant</Link></div>
            </div>
        </div>
        

      </>
      );
    }
  }

export default ManageAmenitiesManagerview;