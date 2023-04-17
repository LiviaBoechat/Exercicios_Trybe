import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import FormDisplay from './pages/FormDisplay';
import PersonalForm from './pages/PersonalForm';
import ProfessionalForm from './pages/ProfessionalForm';

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/personal-form" component={ PersonalForm } />
          <Route path="/professional-form" component={ ProfessionalForm } />
          <Route path="/form-display" component={ FormDisplay } />
        </Switch>
      </main>
    );
  }
}

export default App;
