import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './App.css';


class FormEdit extends Component {

  constructor(props) {
    super()

    this.state = {
      clicks: this.props.clicks
    };

  }

  render() {

    return (
            
          <div className="container">
            <div>
              {this.props.firstName}
          
            </div>

            <br />

            <div>
              {this.props.lastName}
            </div>

            <br/>

            <button>Edit</button>
            
          </div>
            
 
    );

  }

}

function App() {
  return (
    <div className="App">
      <br/>
      <FormEdit firstName="First Name: " lastName="Last Name:"/>

    </div>
  );
}


FormEdit.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}

export default App;
