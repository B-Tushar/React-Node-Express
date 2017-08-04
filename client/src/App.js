import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    debugger
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="container">
        <h1>Users</h1>
         <table className="table table-bordered">
            <thead>
              <tr className="btn-primary">
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
             
                {this.state.users.map(user =>
                  <tr key={user.id}>
                      <td>{user.firstname}</td>
                      <td>{user.lastname}</td>
                      <td>{user.email}</td>
                  </tr>
                )}
              
            </tbody>
          </table>
       
      </div>
    );
  }
}

export default App;
