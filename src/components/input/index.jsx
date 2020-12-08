import React from 'react';

class Inputs extends React.Component{
    state = {
        name:'',
        country:'',
        bio:'',
        birthDay:'',
        gender:'',
        agree:false,
        skills:[]
    };
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleCheckbox = event => {
        this.setState({
            agree : event.target.checked
        })
    }
    handleSkillChange = event => {
        if(event.target.checked) {
            this.setState({
                skills: [...this.state.skills, event.target.value]
            })
        }else {
            const skills = this.state.skills.filter(skill => skill != event.target.value)
            this.setState({skills})
        }
    }
    render() {
        const {name,country,bio,birthDay,agree,skills}= this.state
        return (
            <div>
                <div className="form-group">
                    <input 
                    type="text"
                     name="name"
                     className="form-control"
                     value={name}
                     onChange={this.handleChange} 
                    />
                </div>
                <div className="form-group">
                    <select 
                    name="country" 
                    className="form-control" 
                    value={country}
                    onChange={this.handleChange} >
                        <option value="bangladesh">Bangladesh</option>
                        <option value="india">India</option>
                        <option value="pakistan">Pakisthan</option>
                    </select>
                </div>
                <div className="form-group">
                    <textarea name="bio" 
                    className="form-control" 
                    value={bio}
                    onChange={this.handleChange}>
                    </textarea>
                </div>
                <div className="form-group">
                <input type="date" 
                className="form-control" 
                value={birthDay}
                name="birthDay" 
                onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input type="radio"
                     name="gender"
                      value="male"
                       onChange={this.handleChange} />
                        Male
                    <input type="radio"
                     name="gender"
                     value="female"
                       onChange={this.handleChange} />
                        Female
                    <input type="radio"
                     name="gender"
                     value="other"
                       onChange={this.handleChange} />
                        Other
                </div>
                <div className="form-group">
                    <p>Skills : </p>
                    <input type="checkbox" 
                    name="skills" 
                    value="java" 
                    checked={skills.includes("java")} 
                    onChange={this.handleSkillChange} />
                    Java
                    <input type="checkbox" 
                    name="skills" 
                    value="javascript" 
                    checked={skills.includes("javascript")} 
                    onChange={this.handleSkillChange} /> javascript
                    <input type="checkbox" 
                    name="skills" 
                    value="python" 
                    checked={skills.includes("python")} 
                    onChange={this.handleSkillChange} /> python
                    <input type="checkbox" 
                    name="skills" 
                    value="php" 
                    checked={skills.includes("php")} 
                    onChange={this.handleSkillChange} /> PHP
                </div>
                <div className="form-group">
                    <input type="checkbox" name="agree" checked={agree} onChange={this.handleCheckbox} />
                    Agree
                </div>
                
                <div className="form-group text-center">
                    <button onClick={() => console.log(this.state)} className="btn btn-primary">Save</button>
                </div>
            </div>
        )
    }
}

export default Inputs;