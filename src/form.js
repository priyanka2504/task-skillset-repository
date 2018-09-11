import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, Form, FormGroup, Label, Input, FormText, Col, CustomInput, Jumbotron, Container, CardBody, Card } from 'reactstrap';

class UserForm extends Component {

handleSubmit = (e) => {
e.preventDefault();
 const name = this.getName.value;
 const experience = this.getExperience.value;
 const description = this.getDescription.value;
 const projectName = this.getProjectName.value;
 const billability = this.getBillability.value;
 const jobType = this.getJobType.value;
 const location = this.getLocation.value;

 const data = {
  id: new Date(),
  name,
  experience,
  description,
  projectName,
  billability,
  jobType,
  location,
  editing: false
 }
 this.props.dispatch({
 type: 'ADD_USER',
 data
 })
 this.getName.value = '';
 this.getExperience.value = '';
 this.getDescription.value = '';
 this.getProjectName.value = '';
 this.getBillability.value = '';
 this.getJobType.value = '';
 this.getLocation.value = '';
}

render() {
return (
<div>

  <h2 className="text-success"> Add Employee </h2>

  <Form onSubmit={this.handleSubmit} className="text-primary">
  <Col sm={{ size: 5, order: 2, offset: 0 }}>
  <Jumbotron>
        <FormGroup row>
   <Col sm={12}>
  <Label for="exampleEmail" sm={4} size="sm"> Enter Name: </Label>
    <input required type="text" ref={(input) => this.getName = input} 
   placeholder="Enter name" />
   </Col>
   </FormGroup>

        <FormGroup row>
<Col sm={12}>
<Label for="exampleEmail" sm={4} size="sm">
Select Experience: </Label>
    <select required ref={(input) => this.getExperience = input}>
   <option> Entry Level </option>
   <option> Mid Level </option>
   <option> Senior Level </option>
   </select> 
   </Col>
   </FormGroup>

        <FormGroup row>
<Col sm={12}>
<Label for="exampleEmail" sm={4} size="sm">
Enter Description: </Label>
  <textarea required rows="2" ref={(input) => this.getDescription = input}
   cols="28" placeholder="Enter Description" />
   </Col>
   </FormGroup>

        <FormGroup row>
<Col sm={12}>
<Label for="exampleEmail" sm={4} size="sm">
Select Project Name: </Label>
   <select required ref={(input) => this.getProjectName = input}>
   <option> Apple Online Store </option>
   <option> iTunes </option>
   <option> Apple Music </option>
   <option> Analytics </option>
   </select> 
   </Col>
   </FormGroup>

        <FormGroup row>
<Col sm={12}>
<Label for="exampleEmail" sm={4} size="sm"> Billable: </Label>
<div>
    <input type="radio" name='billability' ref={(input) => this.getBillability = input} value="Yes" /> Yes
    <input type='radio' name='billability' ref={(input) => this.getBillability = input} value="No" /> No
</div>
</Col>
</FormGroup>

        <FormGroup row>
<Col sm={12}>
<Label for="exampleEmail" sm={4} size="sm">
Select Job Type: </Label>
<select required ref={(input) => this.getJobType = input}>
   <option> Full Time </option>
   <option> Part Time </option>
   </select> 
   </Col>
   </FormGroup>
 
        <FormGroup row>
<Col sm={12}>
<Label for="exampleEmail" sm={4} size="sm">
Select Location: </Label>
    <select required ref={(input) => this.getLocation = input}>
   <option> Chennai </option>
   <option> Hyderabad </option>
   <option> Bangalore </option>
   <option> Pune </option>
   </select> 
   </Col>
   </FormGroup>

   
        <FormGroup row>
<Col sm={12}>
   <Button color="success"> Add </Button>
 
   </Col>
   </FormGroup>
   </Jumbotron>
   </Col>
  </Form>

</div>
);
}
}
export default connect()(UserForm);