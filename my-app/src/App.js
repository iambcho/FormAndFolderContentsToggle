import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './App.css';

class FormEdit extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    firstName: this.props.firstName,
	    lastName: this.props.lastName,
	    currState: this.props.currState
	};

	this.onMouseDown1 = this.onMouseDown1.bind(this);
	this.onMouseDown2 = this.onMouseDown2.bind(this);
	this.onMouseDown3 = this.onMouseDown3.bind(this);
    }
    
    onMouseDown1() {
	this.setState({currState: "editing"});
    }

    onMouseDown2() {
	this.setState({currState: "default", firstName: document.getElementById("newFirst").value, lastName:document.getElementById("newLast").value});
    }

    onMouseDown3() {
	this.setState({currState: "default"});
    }

    render() {
	if (this.state.currState == "default") {
	    return (
		    <div> 		    
		    First Name: {this.state.firstName} <br/>
		    Last Name: {this.state.lastName} <br/>
		    <button onMouseDown={this.onMouseDown1}>Edit</button>
		    </div>
		    );
	}
	else {
	    return (
		    <div>
		    <input type="text" id="newFirst"/>
		    <input type="text" id="newLast"/>
		    <button onMouseDown={this.onMouseDown2}>Submit</button>
		    <button onMouseDown={this.onMouseDown3}>Cancel</button>		    
		    </div>
		    );
	}
    }   
}

FormEdit.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    currState: PropTypes.string.isRequired
};

FormEdit.defaultProps = {
    firstName: "John",
    lastName: "Doe",
    currState: "default"
};


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
	    <div>

	    <div className="App-header">
	    <FormEdit firstName="Xing Tao" lastName="Shi" currState="default"/>
	    </div>

	    <div className="App-header">
	    <Folder/>
	    </div>

	    </div>
	    );
}

const ulStyle = {
    margin: '0 auto',
    width: '100px'
}

export default App;

