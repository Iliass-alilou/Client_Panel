import React from 'react'
import classnames from 'classnames'
 const TextInputForm = (props) => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor={props.name}>{props.label}</label>
                <input 
                    type={props.type} 
                    className={classnames ('form-control',{
                        'is-invalid':props.error
                    })}
                    value={props.value}
                    name={props.name}
                    onChange={props.onChange}
                />
                <div className="invalid-feefback" style={{color:'red'}}> {props.error} </div>
            </div>
        </div>
    )
}
export default TextInputForm;
