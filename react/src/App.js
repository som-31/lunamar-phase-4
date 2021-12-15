import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChatManager from './components/ChatManager';
import ChatResident from './components/ChatResident';
import ChatVisitor from './components/ChatVisitor';
import ManageAmenitiesAdminview from './components/ManageAmenitiesAdminview';
import ManageAmenitiesManagerview from './components/ManageAmenitiesManagerview';
import ManageApartmentAdmin from './components/ManageApartmentAdmin';
import ManageApartmentManager from './components/ManageApartmentManager';
import ManageBuildingAdmin from './components/ManageBuildingAdmin';
import ManageBuildingManager from './components/ManageBuildingManager';
import ManageManager from './components/ManageManager';
import ManageReport from './components/ManageReport';
import ManageResidentAdminview from './components/ManageResidentAdminview';
import ManageResidentManagerview from './components/ManageResidentManagerview';
import ManageServiceAdmin from './components/ManageServiceAdmin';
import ManageServiceManager from './components/ManageServiceManager';
import ManageServiceResident from './components/ManageServiceResident';
import ManageVisitorAdmin from './components/ManageVisitorAdmin';
import PhotoVideo from './components/PhotoVideo';
import './App.css';
import Header from './components/Header';
import ManageGardenAdmin from './components/ManageGardenAdmin';
import ManageGardenManager from './components/ManageGardenManager';
import ManageIncident from './components/ManageIncident';
import ManagePlantAdmin from './components/ManagePlantAdmin';
import ManagePoolAdmin from './components/ManagePoolAdmin';
import ManagePoolManager from './components/ManagePoolManager';
import Manager from './components/manager/Manager';
import Visitor from './components/visitor/Visitor';
import Resident from './components/resident/Resident';

import ManageVisitorResident from './components/ManageVisitorResident';
import Register from './components/Register';
import ServicesInformation from './components/ServicesInformation';
import SuperAdmin from './components/superadmin/SuperAdmin';
import VisitApartment from './components/VisitApartment';
import VisitGarden from './components/VisitGarden';
import ChatAdmin from './components/ChatAdmin';
import ManageVisitorManager from './components/ManageVisitorManager';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />

    </div>
    <Switch>
      <Route path="/register" exact> <Register/>  </Route>
      <Route path="/manager" exact><Manager/></Route> 
      <Route path="/superadmin" exact> <SuperAdmin/> </Route>
      <Route path="/visitor" exact> <Visitor/> </Route>

      <Route path="/resident" exact> <Resident/> </Route>

      <Route path="/view-service" exact> <ServicesInformation/> </Route>

        <Route path="/manage-pool-admin" exact> <ManagePoolAdmin /> </Route>
        <Route path="/manage-garden-admin" exact> <ManageGardenAdmin /> </Route>
        <Route path="/manage-plant-admin" exact> <ManagePlantAdmin /> </Route>
        <Route exact path='/manage-reports-admin'><ManageReport /></Route>
        <Route exact path='/manage-manager-admin'><ManageManager /></Route>
        <Route exact path='/manage-building-admin'><ManageBuildingAdmin /></Route>
        <Route exact path='/manage-resident-admin'><ManageResidentAdminview /></Route>
        <Route exact path='/manage-apartment-admin'><ManageApartmentAdmin /></Route>
        <Route exact path='/manage-service-admin'><ManageServiceAdmin /></Route>
        <Route exact path='/manage-visitor-admin'><ManageVisitorAdmin /></Route>
        <Route exact path='/manage-amenities-admin'><ManageAmenitiesAdminview /></Route>
        <Route exact path='/chat-admin'><ChatAdmin /></Route>

            

      <Route path="/manage-pool-manager" exact> <ManagePoolManager/> </Route>
      <Route path="/manage-garden-manager" exact> <ManageGardenManager/> </Route>
      <Route path="/manage-plant-manager" exact> <ManagePoolManager/> </Route>
      <Route exact path='/manage-building-manager'><ManageBuildingManager /></Route>
            <Route exact path='/manage-resident-manager'><ManageResidentManagerview/></Route>
            <Route exact path='/manage-apartment-manager'><ManageApartmentManager/></Route>
            <Route exact path='/manage-service-manager'><ManageServiceManager/></Route>
            <Route exact path='/manage-visitor-manager'><ManageVisitorManager/></Route>
            <Route exact path='/manage-amenities-manager'><ManageAmenitiesManagerview/></Route>
            <Route exact path='/chat-manager'><ChatManager/></Route>


            <Route exact path='/manage-service-resident'><ManageServiceResident/></Route>
                    <Route exact path='/manage-visitor-resident'><ManageVisitorResident/></Route>
                    <Route exact path='/photo-video'><PhotoVideo /></Route>
                    <Route exact path='/chat-resident'><ChatResident /></Route>

                    <Route exact path='/visit-apartment'><VisitApartment/></Route>
                    <Route exact path='/visit-garden'><VisitGarden/></Route>
                    <Route exact path='/manage-incident'><ManageIncident/></Route>

                    <Route exact path='/chat-visitor'><ChatVisitor /></Route>
    </Switch>
    </Router>
  );
}

export default App;
