import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, Form, FormGroup, Label, Input, FormText, Col, CustomInput } from 'reactstrap';

 class EditComponent extends Component {
 handleEdit = (e) => {
  e.preventDefault();
  const newName = this.getName.value;
  const newExperience = this.getExperience.value;
  const newDescription = this.getDescription.value;
  const newProjectName = this.getProjectName.value;
  const newBillability = this.getBillability.value;
  const newJobType = this.getJobType.value;
  const newLocation = this.getLocation.value;

  const data = {
    newName,
    newExperience,
newDescription,
newProjectName,
newBillability,
newJobType,
newLocation
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.user.id, data: data })
}
render() {
return (
<div key={this.props.user.id} className="post">

<Form onSubmit={this.handleEdit} className="text-primary">
        <FormGroup row>
   <Col sm={10}>
   <Label for="exampleEmail" sm={2} size="sm">
Enter Name: </Label>
    <input required type="text" ref={(input) => this.getName = input}
    defaultValue={this.props.user.name} placeholder="Enter name" /><br />
</Col>
   </FormGroup>

     <FormGroup row>
<Col sm={10}>
<Label for="exampleEmail" sm={2} size="sm">
Select Experience: </Label>
    <select required ref={(input) => this.getExperience = input} 
defaultValue={this.props.user.experience}>
   <option> Entry Level </option>
   <option> Mid Level </option>
   <option> Senior Level </option>
   </select> <br/> 
    </Col>
   </FormGroup>
   
     <FormGroup row>
<Col sm={10}>
<Label for="exampleEmail" sm={2} size="sm">
Enter Description: </Label>
   <textarea required rows="5" ref={(input) => this.getDescription = input}
    defaultValue={this.props.user.description} cols="28" placeholder="Enter Description" /><br /><br />
</Col>
   </FormGroup>

     <FormGroup row>
<Col sm={10}>
<Label for="exampleEmail" sm={2} size="sm">
Select Project Name: </Label>
<select required ref={(input) => this.getProjectName = input} 
defaultValue={this.props.user.projectName}>
<option> Apple Online Store </option>
<option> iTunes </option>
<option> Apple Music </option>
<option> Analytics </option>
</select> <br/> 
</Col>
   </FormGroup>

    <FormGroup row>
<Col sm={10}>
<Label for="exampleEmail" sm={2} size="sm">
Billable: </Label>
<input type='radio' name='billability' ref={(input) => this.getBillability = input} defaultValue={this.props.user.billability} value='Yes'/> Yes
    <input type='radio' name='billability' ref={(input) => this.getBillability = input} value='No'/> No <br/>
</Col>
   </FormGroup>

   
    <FormGroup row>
<Col sm={10}>
<Label for="exampleEmail" sm={2} size="sm">
Select Job Type: </Label>
<select required ref={(input) => this.getJobType = input} defaultValue={this.props.user.jobType}>
   <option> Full Time </option>
   <option> Part Time </option>
   <option> Senior Level </option>
   </select> <br/> 
   </Col>
   </FormGroup>

    <FormGroup row>
<Col sm={10}>
<Label for="exampleEmail" sm={2} size="sm">
Select Location: </Label>
   <select required ref={(input) => this.getLocation = input} defaultValue={this.props.user.location}>
   <option> Chennai </option>
   <option> Hyderabad </option>
   <option> Bangalore </option>
   <option> Pune </option>
   </select> <br/> 
      </Col>
   </FormGroup>

    <FormGroup row>
<Col sm={10}>
    <Button color="success">Update</Button>
</Col>
   </FormGroup>
  </Form>
</div>
);
}
}
export default connect()(EditComponent);
