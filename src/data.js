import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';

class Data extends Component {

handleView = () => {

alert('Name: ' + this.props.user.name + '\n' + 
'Experience: ' + this.props.user.experience + '\n' +
'Description: '  + this.props.user.description + '\n' + 
'Project Name: ' + this.props.user.projectName + '\n' +
'Billability: ' + this.props.user.billability + '\n' +
'Job Type: ' + this.props.user.jobType + '\n' + 
'Location: ' + this.props.user.location);
}

render() {
return (
<div className="post">

<Table bordered size="lg" className="text-primary">
  <tr> 
  <th> Name </th>
  <th> Experience </th>
  <th> Project Name </th>
  <th> Billability </th>
  <th> Job Type </th>
  <th> Location </th>
  </tr>
  <tr>
  <td> {this.props.user.name} </td>
  <td> {this.props.user.experience} </td>
  <td> {this.props.user.projectName} </td>
  <td> {this.props.user.billability} </td>
  <td> {this.props.user.jobType} </td>
  <td> {this.props.user.location} </td>
  </tr>
 </Table>

 <div class="d-flex justify-content-between">
    <Button className="btn btn-warning float-left"
    onClick={() => this.props.dispatch({ type: 'EDIT_USER', id: this.props.user.id })}>
    Edit</Button>
<div>
<Button className="btn btn-primary float-center"
    onClick={() => this.handleView({ id: this.props.user.id })}>
    View</Button>
</div>
    <Button className="btn btn-danger float-right"
    onClick={() => this.props.dispatch({ type: 'DELETE_USER', id: this.props.user.id })}>
    Delete</Button>
</div>
  </div>

);
}
}
export default connect()(Data);
