import React, { Component } from 'react';
import './App.css';
import getControls from './api'
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom'
import ControlList from './components/ControlList';
import ControlMain from './components/ControlMain';

class App extends Component {
  state = {
    controls: null
  }
  
  componentDidMount() {
    // We have provided a simple getControls() API that will load controls.json 
    // for you.  getControls() imposes an artificial delay of 1500ms.  
    getControls().then(controls => this.setState({ controls }))
  }

  render() {
    const { controls } = this.state;

    return (
      <Router>
        <div className="App">
          { controls &&
            <>
              <ControlList controls={controls} />

              <Route exact path='/'render={() => (
                <Redirect to={{ pathname: `/controls/${controls[0].id}` }} />
              )} />

              <Route path='/controls/:controlId' render={({ match }) => (
                <ControlMain control={controls.find(c => c.id.toString() === match.params.controlId)} />
              )} />
            </>
          }
        </div>
      </Router>
    );
  }
}

export default App;
