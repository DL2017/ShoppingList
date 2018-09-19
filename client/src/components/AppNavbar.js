import React, { Component } from 'react'
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

class AppNavbar extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     isOpen: false
  //   }

  //   //this.toggle = this.toggle.bind(this);//for custom methods (not the ones like render, componentDidMount etc) you need to bind; not necessary if you use an arrow function

  // } //end of constructor

  // if we don't use the bind method than we can have state //w/out the constructor

  state = {
    isOpen: false
  }
  // if we have reg function than you need to bind(this)- see
  // above
  // toggle(){}

  // the arrow version doesn't need bind
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
      <div>
        <Navbar color='dark' dark expand='sm' className='mb-5'>
          <Container>
            <NavbarBrand href='/'>Shopping List</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink href='https://github.com/bradtraversy'>
                    Github
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default AppNavbar
