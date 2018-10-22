class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options =['Thing one', 'Thing two', 'Thing three'];
        return (
            <section>
                <Header title={title} subtitle={subtitle}></Header>
                <Action></Action>
                <Options options={options}></Options>
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
    handlePick(){
        alert('handlePick');
    }  
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What Should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor({props}){
        super(props);
        // Allow use properties from this
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll(){
        console.log(this.props.options);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
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