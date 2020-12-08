import React from 'react';
import TextInput from './text_input'
import PropTypes from 'prop-types';

const Form = props => (
    <form onSubmit={props.handleSubmit}>
        <TextInput
            name= "name"
            type= "text"
            label= "Enter name"
            value= {props.value.name}
            onChange={props.handleChange}
        />
        <TextInput
            name= "email"
            type= "email"
            label= "Enter name"
            value= {props.value.email}
            onChange={props.handleChange}
        />
        <TextInput
            name= "password"
            type= "password"
            label= "Enter name"
            value= {props.value.password}
            onChange={props.handleChange}
        />
        <div className="form-group">
            <button type="submit" className="btn btn-primary">save</button>
        </div>
</form>
)

Form.propTypes = {
    value: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}


export default Form;