import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import '../register/sccs/App.css';
import logo from '../assets/react.svg'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        registerStudentInfo: []
      }
    } // state end
  } // constructor end

onUpdate (studentData) {
  this.state.data.registerStudentInfo.push(studentData);
  var newObj = {
    data: {
      registerStudentInfo: this.state.data.registerStudentInfo
    }
  }
  this.setState({
    newObj
  })
} // onUpdate end


onDelete(currentNodeId) {
  var newArray = [];
  for(var i=0; i<this.state.data.registerStudentInfo.length; i++) {
    var stData = this.state.data.registerStudentInfo[i];
    if(stData && stData.uid && stData.uid == currentNodeId) {
      //newArray.push(stData);
      delete(this.state.data.registerStudentInfo[i]);
    }
  }

  var newObj = {
    data: {
      registerStudentInfo: this.state.data.registerStudentInfo
    }
  }

  this.setState({
    newObj
  })
} // onDelete end
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <img src={logo} alt="Logo" />
          <h2>Student Registration Module</h2>
        </div>
        <RegisterStudentForm headerProp = {this.state.data} regClick = {this.onUpdate.bind(this)} delClick = {this.onDelete.bind(this)}/>
      </div>
    );
  } // render end
} // App Class End

// ==========================================================================

class RegisterStudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.registerStudent = this.registerStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }
  registerStudent(e) {
    var constructRegFormData = {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      emailAddress: this.refs.emailAddress.value,
      studentSSN: this.refs.studentSSN.value,
      phoneNumber: this.refs.phoneNumber.value,
      uid: Date.now()
    }
    this.props.regClick(constructRegFormData);
    var nullStr = '';
    this.refs.firstName.value = nullStr;
    this.refs.lastName.value = nullStr;
    this.refs.emailAddress.value = nullStr;
    this.refs.studentSSN.value = nullStr;
    this.refs.phoneNumber.value = nullStr;
  } // register student

  deleteStudent(e) {
   var currentNodeId = e.currentTarget.id
   this.props.delClick(currentNodeId);
  } // delete student end

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 left-col">
            <div className="panel panel-default">
              <div className="panel-heading"> <label> Register Student </label> </div>
              <div className="panel-body">
                <div className="container my-cont">
                  <div className="row">
                    <div className="col-md-3">
                      <span> First Name:</span>
                    </div>
                    <div className="col-md-9">
                    <input />

// Option B: if you do need it
<input ref={(el) => (this.inputRef = el)} /> // inside class

// Or if using React.createRef
<input ref={this.inputRef} />
                    </div>
                  </div>

                  <div className="row mrgnTp10">
                    <div className="col-md-3">
                      <span> Last Name:</span>
                    </div>

                    <div className="col-md-9">
                       <input className="form-control" id="lastName" type="text" ref='lastName' />
                    </div>
                  </div>

                  <div className="row mrgnTp10">
                    <div className="col-md-3">
                      <span> Email Address:</span>
                    </div>

                    <div className="col-md-9">
                       <input className="form-control" id="emailAddress" type="text" ref='emailAddress'/>
                    </div>
                  </div>

                  <div className="row mrgnTp10">
                    <div className="col-md-3">
                      <span> Student SSN:</span>
                    </div>

                    <div className="col-md-9">
                       <input className="form-control" id="studentSSN" type="text" ref='studentSSN'/>
                    </div>
                  </div>


                  <div className="row mrgnTp10">
                    <div className="col-md-3">
                      <span> Phone Number:</span>
                    </div>

                    <div className="col-md-9">
                       <input className="form-control" id="phoneNumber" type="text" ref='phoneNumber'/>
                    </div>
                  </div>

                </div>

              </div>
              <div className="panel-footer">
                <span>
                  <button type="button" id="registerBtn" className="btn btn-primary" onClick={this.registerStudent}>Register</button>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-6 right-col">
            <div className="panel panel-default">
              <div className="panel-heading">
                <label className="mrgnBtm10"> Display Student Information </label>
                <div className="container my-cont">
                <div className="row">
                  <div className="col-md-2">
                    <label> First Name </label>
                  </div>

                  <div className="col-md-2">
                   <label> Last Name </label>
                  </div>

                  <div className="col-md-3">
                     <label> SSN </label>
                  </div>

                  <div className="col-md-3">
                     <label> Phone # </label>
                  </div>

                </div>
                </div>
              </div>


              <div className="panel-body">
                <div className="container my-cont">
                  {
                    this.props.headerProp.registerStudentInfo.map(function(player) {
                        return (
                            <div className="row mrgnBtm10">
                              <div className="col-md-2">
                                <span> {player.firstName} </span>
                              </div>

                              <div className="col-md-2">
                                <span> {player.lastName} </span>
                              </div>

                              <div className="col-md-3">
                                <span> {player.studentSSN} </span>
                              </div>

                              <div className="col-md-3">
                                <span> {player.phoneNumber} </span>
                              </div>

                              <div className="col-md-2 pull-right">
                                <span> <button id={player.uid} type="button" className="btn-danger" onClick={this.deleteStudent}>Delete</button> </span>
                              </div>

                            </div>
                          )
                      }.bind(this))
                    }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
} // RegisterStudentForm End
export default App;