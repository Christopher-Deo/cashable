import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Auth } from 'aws-amplify';
import Button from 'react-bootstrap/Button';
import './Navigation.css';

function Navigation() {


    async function signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
    return (

        <Nav className="justify-content-end navbar" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item >
            <Nav.Item>
                <Nav.Link className="navItem" eventKey="link-1" href="./instructions">Instructions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="navItem" eventKey="link-2" href="./Dashboard">Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="navItem" eventKey="Link-3" href="./Profile">
                    Profile
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="navItem" eventKey="Link-4">
                    <Button onClick={signOut}>Log Out </Button>
                </Nav.Link>
            </Nav.Item>
        </Nav>

    );
}

export default Navigation;