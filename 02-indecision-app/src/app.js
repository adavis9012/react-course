class IndecisionApp extends React.Component {
    constructor({props}){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ['Thing one', 'Thing two', 'Thing three']
        }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }
    handlePick(){
        const choice = Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[choice]);
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <section>
                <Header title={title} subtitle={subtitle}></Header>
                <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0}></Action>
                <Options 
                    options={this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                ></Options>
                <AddOption></AddOption>
            </section>
        )
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What Should I do?
                </button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.handleDeleteOptions}
                >
                    Remove All
                </button>

                {this.props.options.map(option => {
                    return <Option key={option} optionText={option}/>;
                })}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <p>
                {this.props.optionText}
            </p>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e){
        e.preventDefault(); //Prevent Refresh
        const option = e.target.elements.option.value.trim();  
        if(option){
            alert(option);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <input type="submit" value="Add Option"></input>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp></IndecisionApp>, document.getElementById('app'));