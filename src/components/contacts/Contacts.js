import {Component} from 'react';
import { Consumer } from '../context';
import Contact from "./Contact";

class Contacts extends Component {
   
     ContactDeleted(id){
         const {contacts} = this.state  ;
         // filter on list by id
         const newListContacts = contacts.filter((contact)=>contact.id!== id)  ; 
         this.setState(
             {contacts:newListContacts}
         );       
     }
    render() {
       return(
        <Consumer>
            {value => (
                <div>
                    {value.contacts.map((contact) => (
                        <Contact key={contact.id}
                                data={contact}
                                deleteContactChild={this.ContactDeleted.bind(this,contact.id)} />
                            ))}
                </div>
            )}
        </Consumer> 
       );
        
    }
}
 
export default Contacts;