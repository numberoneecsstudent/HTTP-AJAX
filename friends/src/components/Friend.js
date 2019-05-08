import React from 'react';

class Friend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editing: false,
            nameInput: this.props.name,
            ageInput: this.props.age,
            emailInput: this.props.email,
        };
    }
    handleInput = (e, type) => {
        const key = type + 'Input';
        this.setState({ [key]: e.target.value });
    }
    handleEdit = (e) => {
        e.preventDefault();
        if (!this.state.nameInput || !this.state.ageInput || !this.state.emailInput) return alert('Please fill out all fields');
        this.props.handleUpdate(this.state.nameInput, this.state.ageInput, this.state.emailInput, this.props.id);
        this.setState({
            editing: false,
        });
    }
    render(){
        return this.state.editing ? (
            <form onSubmit={this.handleEdit}>
                <p>
                    <span>Name:</span> 
                    <input type="text" 
                        placeholder="Name" 
                        value={this.state.nameInput} 
                        onChange={(e) => this.handleInput(e, 'name')} 
                    />
                </p>
                <p>
                    <span>Age:</span> 
                    <input type="number" 
                        placeholder="Age" 
                        value={this.state.ageInput} 
                        onChange={(e) => this.handleInput(e, 'age')}  
                    />
                </p>
                <p>
                    <span>Email:</span> 
                    <input type="email" 
                        placeholder="Email" 
                        value={this.state.emailInput} 
                        onChange={(e) => this.handleInput(e, 'email')}  
                    />
                </p>
            </form>
        ) : (
            <div>
                <p><span>Name:</span> {this.props.name}</p>
                <p><span>Age:</span> {this.props.age}</p>
                <p><span>Email:</span> {this.props.email}</p>
            </div>
        );
    }
}

export default Friend; 