import React, { Component } from 'react';
import '../styles/Modal.css'

export default class WelcomeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }
  
  render() {
    return (
      <React.Fragment>
        { this.state.modal && (
          <div className='modal'>
            <div className='modal-body'>
              <h3 className="text mdb-color white-text mb-md-5">Very Welcome Modal</h3>
              <p className="text blue-grey-text mb-md-5">I am an Awesome Modal!</p>
              <button className='btn btn-dark' onClick={ () => this.setState({ modal: false }) }>
                Close
              </button>
            </div>
          </div>
        ) }
      </React.Fragment>
    );
  }
  
  componentDidMount() {
    this.setState({
      modal: true,
    })
  }
}
