import React, { Component } from "react";

export class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

 addFormData=(e)=>{
    e.preventDefault()
    if(this.state.name==="" || this.state.email===""){
        alert("All the feilds are mandatory");
        return
    }
    this.props.addContactHandler(this.state);
    this.setState({name:"",email:""})
    console.log(this.state)

}

  render() {
    return (
      <div className="ui main">
        <h2>Add contact</h2>
        <form className="ui form" onSubmit={this.addFormData}>
          <div className="field">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="">Email</label>
            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
