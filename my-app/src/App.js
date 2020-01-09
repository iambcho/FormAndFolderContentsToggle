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

	this.showEdit = this.showEdit.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleCancel = this.handleCancel.bind(this);
    }
    
    showEdit() {
	this.setState({currState: "editing"});
    }

    handleSubmit() {
	this.setState({currState: "default"});
    }

    handleCancel() {
	this.setState({currState: "default"});
    }

    handleChangeFirstName = (event) => {
      this.setState({firstName: event.target.value});
    }

    handleChangeLastName = (event) => {
      this.setState({lastName: event.target.value});
    }

    render() {
	if (this.state.currState == "default") {
	    return (
		    <div> 		    
		    First Name: {this.state.firstName} <br/>
		    Last Name: {this.state.lastName} <br/>
		    <button onMouseDown={this.showEdit}>Edit</button>
		    </div>
		    );
	}
	else {
	    return (
		    <div>
		    <input type="text" id="newFirst" onChange={this.handleChangeFirstName} value={this.state.firstName} />
		    <input type="text" id="newLast" onChange={this.handleChangeLastName} value={this.state.lastName}/>

		    <button onMouseDown={this.handleSubmit}>Submit</button>
		    <button onMouseDown={this.handleCancel}>Cancel</button>		    
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

