import React, { Component } from 'react'
import "./contact.css"
import { Consumer } from '../context';
import PropTypes from 'prop-types';

class Contact extends Component {
    state = {
        showContactToggel : true
    }
    showContact(myMessage){
        console.log("salam "+ myMessage);
        this.setState({
            showContactToggel: !this.state.showContactToggel
        });
    }
    onDeletClick = (id , dispatch) =>{
       dispatch({
           type: 'DELETE_CONTACT',
           payload : id
       })
    }
   
    render() {
        const {id,name,phone,email}=this.props.data;
        return(
            <Consumer>
            {value =>{
                 const {dispatch}=value;
                 return(
                  <div className="card">               
                  <div className="card-body">
                      <h4 className="card-title">
                          {name}
                          <i style={{cursor:'pointer'}} 
                             onClick={this.showContact.bind(this,name)} 
                             className="fa fa-sort-down">                           
                          </i>
                          <i onClick={this.onDeletClick.bind(this,id,dispatch)} 
                             style={{color:'red', float:'right', cursor:'pointer'}} 
                             className="fa fa-times" aria-hidden="true"> 
                          </i>
                      </h4>
                      {(this.state.showContactToggel)?(
                              <ul className="list-group">                            
                                  <li className="list-group-item">{phone}</li>
                                  <li className="list-group-item">{email}</li>
                              </ul>
                          ):null}
                  </div>
              </div>         
              )
               }    
            }
        </Consumer>
        )
       
    }
}

Contact.defaultProps={
    name: "name",
    phone : "06xxxxxxx",
    email : "your email"
}
// Contact.prototype = {
//     name : PropTypes.string.isRequired,
//     tel : PropTypes.string,
//     email : PropTypes.string
// }

export default  Contact;