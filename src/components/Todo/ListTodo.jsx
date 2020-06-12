import React from "react";
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import ItemTodo from "./ItemTodo.jsx";
import { removeTodo } from "../../actions/actions";

class ListTodo extends React.Component {
  constructor(props) {
    super(props);
    this.removedItem = this.removedItem.bind(this);
  }

  removedItem(id) {
    this.props.removeTodo(id);
  }


  render() {
    const lists = this.props.lists || [];

    return (
      <ListGroup>
        {lists.length > 0 &&
          lists.map((item) =>
            <ItemTodo key={item.id} item={item} onClick={() => this.removedItem(item.id)}/>
          )
        }
      </ListGroup>
    )
  }
}

const mapStateToProps = state => ({
  lists: state.todos
})

const mapDispatchToProps = dispatch => ({
  removeTodo: (id) => dispatch(removeTodo(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);