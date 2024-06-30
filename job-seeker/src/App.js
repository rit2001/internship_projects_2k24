import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfileView from './components/Profile/ProfileView';
import ProfileEdit from './components/Profile/ProfileEdit';
import JobList from './components/Job/JobList';
import JobDetail from './components/Job/JobDetail';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import JobSeekerDashboard from './components/Dashboard/JobSeekerDashboard';
import EmployerDashboard from './components/Dashboard/EmployerDashboard';
import AnalyticsDashboard from './components/Dashboard/AnalyticsDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/profile" component={ProfileView} />
          <Route path="/profile/edit" component={ProfileEdit} />
          <Route path="/jobs" component={JobList} />
          <Route path="/job/:id" component={JobDetail} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard/job-seeker" component={JobSeekerDashboard} />
          <Route path="/dashboard/employer" component={EmployerDashboard} />
          <Route path="/dashboard/analytics" component={AnalyticsDashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
