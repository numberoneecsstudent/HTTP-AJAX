import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class FriendInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            email: '',
        };
    }

    onInputChange = (event, type) => {
        this.setState({
            [type]: event.target.value,
        });
    }

    onAddFriend = (event) => {
        event.preventDefault();
        if (!this.state.name || this.state.age || this.state.email) return alert('Please fill out all fields');
        const [name, age, email] = [this.state.name, this.state.age, this.state.email];
        this.setState({name: '', age: '', email: ''});
        axios.post('http://localhost:5000/friends', {
            name, 
            age,
            email,
        })
        .then(res => {
            this.props.updateList(res.data);
            this.props.history.push('/')
        })
        .catch(err => { throw new Error(err) });
    }

    render(){
        return (
            <div className ="input-container">
            <form onSubmit={this.onAddFriend} className='friend-input'>
            <Link to="/" className="return-home">Home</Link>
            <p>Enter new friend's information: </p>
            <input type="text" placeholder="Name" value={this.state.name} onChange={(event) => this.onInputChange(event, 'name')} />
            <input type="text" placeholder="Name" value={this.state.age} onChange={(event) => this.onInputChange(event, 'age')} />
            <input type="text" placeholder="Name" value={this.state.email} onChange={(event) => this.onInputChange(event, 'email')} />
            <button type="submit">Add friend</button>
            </form>
            </div>
        )
    }

}

export default FriendInput;