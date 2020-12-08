import React from 'react';

class UncontrolledForm extends React.Component {
    handleSubmit = event => {
        event.preventDefault();
        // console.dir(event.target)
        console.log(event.target.name.value);

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" name="name" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="password" />
                    </div>
                    <div className="form-group">
                        <button type="submit">save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default UncontrolledForm;