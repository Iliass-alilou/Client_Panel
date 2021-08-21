import React, { Component } from 'react'


//i should specify that fil is a context file ===> creat conext
const Context = React.createContext();

const reducer=(state , action) => {
    switch (action.type){
        case  'DELETE_CONTACT':
            return{
                contacts:state.contacts.filter((contact)=>contact.id!==action.payload)  
            };
        default:
            return state
    }
}

export class Provider extends Component {
    state = { 
        contacts : [
            {id:1, name:"iliass",tel:"0611810809", email:"iliass11@gmail.com"},
            {id:2, name:"iliass1",tel:"0611810810", email:"iliass12@gmail.com"},
            {id:3, name:"iliass2",tel:"0611810811", email:"iliass13@gmail.com"},
        ],
        dispatch : action => this.setState(state => reducer(state,action))
     }

    render() {
        return (
            // creat abstract component==> to inject n'import qu'il element (component)
           <Context.Provider value = {this.state}>
                  {/* injectable*/}
                  {this.props.children}
           </Context.Provider>
        )
    }
}
//pour utiliser le Context que j'ai creer je le doit rendre consomable
export const Consumer = Context.Consumer;