import React, { Fragment, Component } from 'react';
import './App.css';
import getControls from './api'
import { Redirect, Route, Link, BrowserRouter as Router } from 'react-router-dom'

const ControlList = ({ controls }) => (
  <ul style={{ width: '200px', float: 'left' }}>
    { controls.map((c) => (
      <li key={c.id}>
        <Link to={`/controls/${c.id}`}>{c.name} - {c.text}</Link>
      </li>
    ))}
  </ul>
)
const ControlMain = ({ control }) => (
  <div style={{ marginLeft: '250px' }}>
    <h1>{control.name}</h1>
    <h2>{ control.state && control.state.isImplemented ? 'Implemented' : 'Not Implemented'}</h2>
    <p>{control.text}</p>
  </div>
)

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
          { controls ? (
            <Fragment>
              <ControlList controls={controls} />

              <Route exact path='/'render={() => (
                <Redirect to={{ pathname: `/controls/${controls[0].id}` }} />
              )} />

              <Route path='/controls/:controlId' render={({ match }) => (
                <ControlMain control={controls.find(c => c.id.toString() === match.params.controlId)} />
              )} />
            </Fragment>
          ) : (
            <div>
              Loading Controls
            </div>
          )}
        </div>
      </Router>
    );
  }
}

export default App;
