import React from 'react';
import AddOption from './AddOptions';
import Options from './Options';
import Header from './Header';
import Action from './Action';

export default class IndecisionApp extends React.Component {
    state = {
        options: []
    }

    handleDeleteOptions = ()  => {
        this.setState(() => ({
            options: []
        }));
    }

    handleDeleteOption = (optionToRemove)  => {
        this.setState((prevState) => ({
                options: prevState.options.filter((option) => (
                    optionToRemove !== option
                ))
            })
        );
    }

    handlePick = () => {
        const choice = Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[choice]);
    }
    
    handleAddOption = (option) => {
        if(option.length < 1){
            return 'Enter a valid option'
        } else if(this.state.options.indexOf(option) > -1){
            return 'Option is already defined'
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }

    componentDidMount() {
       try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({options}));
            }
       } catch (error) {
           //Do nothing
       }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount!');
    }

    render() {
        return (
            <section>
                <Header></Header>
                <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0}></Action>
                <Options 
                    options={this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                ></Options>
                <AddOption 
                    handleAddOption={this.handleAddOption}
                ></AddOption>
            </section>
        )
    }
}