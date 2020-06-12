import React from "react";
import { connect } from 'react-redux';
import { Form, Button, Col, Spinner } from 'react-bootstrap';
import { addTodo } from "../../actions/actions";


class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleAddItem = this.handleAddItem.bind(this);
    
    this.state = {
      fetching: false,
    }
  }

  handleAddItem = (e) => {
    
    this.setState({
      fetching: true
    })

    e.preventDefault();

    if (this.textInput.value.length) {
      this.props.addTodo(this.textInput.value);
    }
    this.textInput.value = '';

    setTimeout(()=>{
      this.setState({
        fetching: false
      })
    }, 500 )
  }

  render() {
    return (
      <Form onSubmit={this.handleAddItem}>
        <Form.Label>Add Items</Form.Label>
        <Form.Row>
          <Col xs={9}>
            <Form.Group>
              <Form.Control ref={(input) => this.textInput = input} type="text" placeholder="Typing item value..." />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Button type="submit" className="w-100" variant="primary">
              Add item
            </Button>
          </Col>
        </Form.Row>
        {this.state.fetching &&
          <div className="fetching-icon text-center">
            <Spinner animation="border" variant="success" />
          </div>
        }
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: (text) => dispatch(addTodo(text)),
})

export default connect(null, mapDispatchToProps)(AddTodo);