import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    return this.props.users.map( user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>List
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {users: state.users };
}

function loadData() {
  console.log('vai carregar ou nao ?');
}
export { loadData };
export default connect(mapStateToProps, { fetchUsers })(UsersList);