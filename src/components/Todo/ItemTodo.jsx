import React from "react";
import { Button, ListGroup } from 'react-bootstrap';

class ItemTodo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {item} = this.props

    return (
      <ListGroup.Item>
        {item.text}
        <Button variant="danger" onClick={this.props.onClick}>Delete</Button>
      </ListGroup.Item>
    );
  }
}

export default ItemTodo;