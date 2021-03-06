import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    handleAddOption = (e) => {
        e.preventDefault(); //Prevent Refresh
        const option = e.target.elements.option.value.trim();
        const error =  this.props.handleAddOption(option);
        this.setState(() => ({
            error
        }));

        if(!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <input type="submit" value="Add Option"></input>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        );
    }
}