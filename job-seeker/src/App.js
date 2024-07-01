import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import QuestionList from './components/Questions/QuestionList';
import QuestionDetail from './components/Questions/QuestionDetail';
import QuestionForm from './components/Questions/QuestionForm';
import ProfileView from './components/Profile/ProfileView';
import ProfileEdit from './components/Profile/ProfileEdit';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/questions" component={QuestionList} />
          <Route path="/question/:id" component={QuestionDetail} />
          <Route path="/ask" component={QuestionForm} />
          <Route path="/profile" component={ProfileView} />
          <Route path="/profile/edit" component={ProfileEdit} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
