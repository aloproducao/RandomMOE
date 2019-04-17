import React, { Component } from 'react';

class CreateMessage extends Component {

    state = {
        content: ''
    }

    onChange = (e) => this.setState({content: e.target.value}); 
    onSubmit = (e) => {
        e.preventDefault();
        this.props.createMessage("You", this.state.content);
        this.setState({content: '', user: 'You' })
    }
  render() {    

    return (
            <form onSubmit = {this.onSubmit} style = {{position: 'fixed', bottom: '0', width: '100%' }}>
                <input type="text" name="title" style={{flex: '10', padding: '5px'}} placeholder="Type Message Here..." value={this.state.content} onChange={this.onChange}></input>
                <input type="submit" value="submit" className = "btn" style={{flex: '1'}} />
            </form>
    )
  };
}



export default CreateMessage;
