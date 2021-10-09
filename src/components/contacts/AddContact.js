import React, { Component } from 'react'
import { Consumer } from '../context'
import TextInputForm from '../Helpers/TextInputForm'

class AddContact extends Component {
    state = {
        name :'',
        email : '',
        phone : '',
        errors:{
            nameError:'',
            emailError:'',
            phoneError:''
        }
    }

    InputChange = (e) => this.setState(
        {
            [e.target.name] : e.target.value
        })

    submit = (dispatch,size,e) => {
        e.preventDefault()
        const {name,email,phone }= this.state;

        if(name==""){
            this.setState({errors:{nameError: "contact name is required"}})
            return;
        }
        if(email==""){
            this.setState({errors:{emailError: "contact email is required"}})
            return;
        }
        if(phone==""){
            this.setState({errors:{phoneError: "contact phone is required"}})
            return;
        }

        dispatch({
            type : "Add_CONTACT",
            payload :{
                id : size+1,
                name: name,
                email: email,
                phone: phone
            }
        })
        this.setState({
            name :'',
            email : '',
            phone : '',
            errors:{}
        })
        this.props.history.push('/');
    }
   

    render() {
        const {name , email , phone, errors} = this.state;
        
        return(
            <Consumer>
                {
                    value=>{
                        const {dispatch} = value
                        return (
                            <div>
                                <form onSubmit={this.submit.bind(this,dispatch,value.contacts.length)}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Add Contact</h4>
                                            <div className="card-text">
                                                <TextInputForm
                                                    label="Conatct Name"
                                                    type="text"
                                                    name="name"
                                                    value={name}
                                                    onChange={this.InputChange}
                                                    error = {errors.nameError}
                                                />
                                               <TextInputForm
                                                    label="Conatct email"
                                                    type="email"
                                                    name="email"
                                                    value={email}
                                                    onChange={this.InputChange}
                                                    error = {errors.emailError}
                                                />
                                                <TextInputForm
                                                    label="Conatct phone"
                                                    type="text"
                                                    name="phone"
                                                    value={phone}
                                                    onChange={this.InputChange}
                                                    error = {errors.phoneError}
                                                />
                                                <button className="btn btn-success btn-block">add contact</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )
                    }
                }
            </Consumer>
        )
    }
}
export default AddContact;
