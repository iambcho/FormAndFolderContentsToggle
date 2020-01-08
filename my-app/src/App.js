import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './App.css';


class FormEdit extends Component {

  constructor(props) {
    super()



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


class Folder extends Component {
  constructor(props) {
    super()

    this.state = {
      show:true
    }
 

  }

  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {

    return (
            
          <div>
            <h1>Home</h1>

            {this.state.show ? 
              <ul style={ulStyle}>
                <li>File1</li>
                <li>File2</li>
                <li>File3</li>
              </ul> 
              : ''   
              }

            

            <br/>

            <button onClick={this.ToggleClick}>Toggle</button>
            
          </div>
            
 
    );

  }

}

function App() {
  return (
    <div className="App">
      <br/>
      <FormEdit firstName="First Name: " lastName="Last Name:"/>

      <Folder />

    </div>
  );
}


const ulStyle = {
  margin: '0 auto',
  width: '100px'
}

FormEdit.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}

export default App;
