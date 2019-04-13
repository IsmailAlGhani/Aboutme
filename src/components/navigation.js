import React, { Component } from 'react';
import {Navbar,
        NavbarBrand,
        NavItem,
        Nav,
        NavLink} from 'reactstrap';
import logo_ig from "../Assets/Image/instagram.png";
import logo_twitter from "../Assets/Image/twitter-logo-silhouette.png";
import logo_linkedin from "../Assets/Image/linkedin-logo.png";

export default class navigation extends Component {
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
                <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/">Ismail's Portfolio</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://www.instagram.com/d_mail6/"><img src={logo_ig} /></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://twitter.com/mailcool/"><img src={logo_twitter} /></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://www.linkedin.com/in/ismail-al-ghani-84a775147/"><img src={logo_linkedin} /></NavLink>
                    </NavItem>
                </Nav>
                </Navbar>
            </div>
        );
    }
}