import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class ModalExampleSize extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
        open:this.props.open
    }; 
  }
  close = () => this.setState({ open: false })
  render() {

    return (
      <div>
        <Modal open={this.state.open} onClose={this.close} basic size='small'>
          <Modal.Header>Delete Your Account</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete your account</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative>No</Button>
            <Button positive icon='checkmark' labelPosition='right' content='Yes' />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalExampleSize
