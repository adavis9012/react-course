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
    render() {
        return (
            <div>
                <button>What Should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                Options component here!
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
    render() {
        return (
            <div>
                Add option here!
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp></IndecisionApp>, document.getElementById('app'));