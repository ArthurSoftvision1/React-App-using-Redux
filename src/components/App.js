import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Table } from 'react-bootstrap';
import Select from 'react-select';
import { fetchInfo } from '../actions/actions_info';
import { connect } from 'react-redux';


class AppComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
      jsonList: []
    };
  }

  componentDidMount() {
    fetchInfo();
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption : selectedOption ? selectedOption : ''});
  }

  render() {

    const { jsonList } = this.state;

    const selectList = this.state.jsonList.map(element => {
      return { value: element.name, label: element.name }
    })

    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              About us
            </NavItem>
            <NavItem eventKey={2} href="#">
              Contact
            </NavItem>
            <NavDropdown pullRight eventKey={3} title="Data Views" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Search bar</h1>
              <div className="row">
                <div className="col-sm-3">
                  <Select
                    value={this.state.selectedOption}
                    onChange={this.handleChange.bind(this)}
                    options={selectList}
                  />
                </div>
              </div>
              <hr />
              <div className="col-sm-9">
                <Table striped bordered condensed hover>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Age</th>
                      <th>Company</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jsonList.map(element => {
                      console.log(this.state.selectedOption)
                      if(this.state.selectedOption ===''||element.name===this.state.selectedOption.value) {
                      
                        return (
                          <tr>
                            <td>{element.name}</td>
                            <td>{element.address}</td>
                            <td>{element.age}</td>
                            <td>{element.company}</td>
                          </tr>
                        )
                      }
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const App = connect()(AppComponent);

export default App;
