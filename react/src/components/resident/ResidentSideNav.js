import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ChatResident from '../ChatResident';
import ManageServiceResident from '../ManageServiceResident';
import PhotoVideo from '../PhotoVideo';
import VisitGarden from '../VisitGarden';


function ResidentSideNav() {

    return (
        <>
            <Router>
                <div class="sidebar">

                    <Link to='/manage-service-resident'>Manage Service</Link>
                    <Link to='/manage-visitor-resident'>Manage Visitor</Link>
                    <Link to='/photo-video'>Upload Photo/video</Link>

                    <Link to='/chat-resident'>Chat</Link>
                </div>

                <Switch>

                    <Route exact path='/manage-service-resident'><ManageServiceResident/></Route>
                    <Route exact path='/manage-visitor-resident'><VisitGarden/></Route>
                    <Route exact path='/photo-video'><PhotoVideo /></Route>
                    <Route exact path='/chat-resident'><ChatResident /></Route>

                </Switch>
            </Router>

        </>
    );
}

export default ResidentSideNav;