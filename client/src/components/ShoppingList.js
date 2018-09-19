import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'
import { connect } from 'react-redux'
import { getItems, deleteItem, addItem } from '../actions/itemActions'
import PropTypes from 'prop-types'

class ShoppingList extends Component {
  // state = {
  //   items: [
  //     { id: uuid(), name: 'Eggs' },
  //     { id: uuid(), name: 'Milk' },
  //     { id: uuid(), name: 'Steak' },
  //     { id: uuid(), name: 'Water' }
  //   ]
  // }

  componentDidMount () {
    this.props.getItems()
  }

  onDeleteClick = id => this.props.deleteItem(id)

  onAddItem = () => {
    // const name = prompt('Enter name')
    // if (name) {
    //   this.props.addItem(name)
    // }
  }

  render () {
    // const { items } = this.state
    const { items } = this.props.item
    return (
      <Container>
        {/*
        <Button
          color='dark'
          style={{ marginBottom: '2rem' }}
          // onClick={() => {
          //   const name = prompt('Enter items')
          //   if (name) {
          //     this.setState(state => ({
          //       items: [...items, { id: uuid(), name }]
          //     }))
          //   }
          // }}

          // onClick={this.onAddItem.bind(this)}

          onClick={() => this.onAddItem()}
        >
          Add Item
      </Button> */}

        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  <Button
                    className='remove-btn'
                    color='danger'
                    size='sm'
                    // onClick={() => {
                    // this.setState(state => ({
                    //   items: state.items.filter(item => item.id != id)
                    // }))
                    // }}

                    // onClick={this.onDeleteClick.bind(this, id)}

                    onClick={() => this.onDeleteClick(id)}
                  >
                    x
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>

      </Container>
    )
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  item: state.item
})

// export default ShoppingList
export default connect(mapStateToProps, { getItems, deleteItem, addItem })(
  ShoppingList
)
