import React from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
    import 'bootstrap/dist/css/bootstrap.min.css';
  
  
  export default class Example extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Backend Test</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
             <NavItem>
                  <NavLink href="/Login">Login</NavLink>
                  </NavItem>
                <NavItem>
                  <NavLink href="/Register">Register</NavLink>
                  </NavItem> 
                  <NavItem>
                  <NavLink href="/Users">Users</NavLink>
                  </NavItem> 
                  <NavItem>
                  <NavLink href="/Logout">Logout</NavLink>
                  </NavItem> 
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }