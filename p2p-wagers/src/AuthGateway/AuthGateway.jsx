import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import Login from './LoginForm/LoginForm';
export default class AuthGateway extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <Row>
        <Col sm="2"></Col>
        <Col sm="8" className="auth-form">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={this.state.activeTab === '1' ? "active" : null }
              onClick={() => { this.toggle('1'); }}
            >
              
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={this.state.activeTab === '2' ? "active" : null}
              onClick={() => { this.toggle('2'); }}
            >
              
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
              <Login handleLogin={this.props.handleLogin}></Login>
          </TabPane>
          <TabPane tabId="2">
            <RegistrationForm handleRegister={this.props.handleRegister}></RegistrationForm>
          </TabPane>
        </TabContent>
        </Col>
      </Row>
    );
  }
}