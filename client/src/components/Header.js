import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import $ from  'jquery'

export default class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isWideEnough: false,
    //     };

    // this.onClick = this.onClick.bind(this);
    // this.signOut = this.signOut.bind(this);
    // this.checkManagement = this.checkManagement.bind(this);
    // this.checkAdmin = this.checkAdmin.bind(this);
    // }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    // signOut() {
    //     // TODO: Update when payload is updated
    //     sessionStorage.removeItem('token');
    //     sessionStorage.removeItem('firstName');
    // }

    // checkAdmin() {
    //     let priv;
    //     $.ajax({
    //         url: "http://localhost:3001/users/getPriv",
    //         type: "get",
    //         headers: {
    //           Authorization: sessionStorage.getItem('token')
    //         },
    //         success: function(response) {
    //           response=JSON.parse(response)
    //           priv = response
    //         }
    //       });
    //     //   TODO SET UP FLAG
    //       if (priv >= 1) {
    //           return false
    //       }
    // }

    // checkManagement() {
    //     let priv;
    //     $.ajax({
    //         url: "http://localhost:3001/users/getPriv",
    //         type: "get",
    //         headers: {
    //           Authorization: sessionStorage.getItem('token')
    //         },
    //         success: function(response) {
    //           response=JSON.parse(response)
    //           priv = response
    //         }
    //       });
    //     //   TO DO SET UP FLAG
    //       if (priv === Number("1")) {
    //           return true
    //       }
    // }

    render() {
        let navLeft;
        let navRight;

        // if (sessionStorage.getItem('token')) {
            // If we are signed in, display all the good information
            navLeft = <NavbarNav left>
                <NavItem>
                    <Dropdown>
                        <DropdownToggle nav caret>Human Resources</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href="#">Pre-Employment</DropdownItem>

                            <DropdownItem href="/docs/Circle BMW Employee Handbook.pdf" target="_blank" download="Circle BMW Employee Handbook">CircleBMW Handbook</DropdownItem>
                            <DropdownItem href="docs/Gender Equity Notice.pdf" target="_blank" download="Gender Equity Notice.pdf">Gender Equity Notice</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavItem>
                <NavItem>
                    <Dropdown>
                        <DropdownToggle nav caret>Insurance</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href="/MedicalInsurance">Medical Insurance</DropdownItem>
                            <DropdownItem href="/DentalVision"> Dental and Vision </DropdownItem>
                            <DropdownItem href="/ChildCare">Child Care Benefits</DropdownItem>
                            <DropdownItem href="#">Supplemental Insurance</DropdownItem>
                            <DropdownItem href="#">Group Life</DropdownItem>
                            <DropdownItem href="/RelianceStandardGroup">Reliance Standard Group</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavItem>
                <NavItem>
                    <Dropdown>
                        <DropdownToggle nav caret>Forms</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href="/docs/TimeOffRequestForm.pdf" target="_blank" download="TimeOffRequestForm">Time off Request</DropdownItem>
                            <DropdownItem href="#">Expense Report</DropdownItem>
                            <DropdownItem href="/docs/Check Request Form.pdf" target="_blank" download="CheckRequestForm">Check Request</DropdownItem>
                            <DropdownItem href="/NJSafeAct">NJ Family Leave Insurance</DropdownItem>
                            <DropdownItem href="/docs/NewJerseySAFEAct.pdf" target="_blank" download="NewJerseySAFEAct">NJ SAFE Act</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavItem>
                <NavItem>
                    <Dropdown>
                        <DropdownToggle nav caret>401K</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="https://www.oneamerica.com" target="_new">OneAmerica</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavItem>
                {/* Check is User is an HR Manager */}
                {this.checkManagement && <NavItem>
                    <Dropdown>
                        <DropdownToggle nav caret> Management</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="/">Add Employee</DropdownItem>
                                <DropdownItem href="/">Modify Employee</DropdownItem>
                                <DropdownItem href="/">Offboard Employee</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    </NavItem>}

                {/* Check if User is an Admin */}
                {this.checkAdmin && <NavItem>
                    <Dropdown>
                        <DropdownToggle nav caret><i class="fa fa-vcard" aria-hidden="true"></i> Administration</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="/SelectEmployee">Register User</DropdownItem>
                                <DropdownItem href="/SelectEmployee">Modify User</DropdownItem>
                                <DropdownItem href="/SelectEmployee">Deactivate User</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    </NavItem>}
                </NavbarNav>
            navRight =
                 <NavbarNav right>
                    <NavItem>
                        <NavbarBrand href="/directory">
                            <i class="fa fa-users" aria-hidden="true"></i>
                        </NavbarBrand>
                    </NavItem>
                    <NavItem>
                        <Dropdown>
                            <DropdownToggle nav caret>Welcome { sessionStorage.getItem('firstName')}!</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="/MyProfile"><i class="fa fa-user-circle-o" aria-hidden="true"></i> My Profile</DropdownItem>
                                <DropdownItem href="/MyAccount">Account Settings</DropdownItem>
                                <DropdownItem href="/Login" onClick = { this.signOut }>Sign Out</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavItem>
                </NavbarNav>
 

        return (
            <Navbar color="primary-color-dark" dark expand="md" fixed="top" scrolling>
            <NavbarBrand href="/">
                <strong>CircleBMW</strong>
            </NavbarBrand>
            {/* <renderHeader/> */}
            { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
            { navLeft }
            { navRight }
        </Navbar>
        );
    }
}

