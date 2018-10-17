class IndecisionApp extends React.Component {
    render() {
        return (
            <section>
                <Header></Header>
                <Action></Action>
                <Options></Options>
                <AddOption></AddOption>
            </section>
        )
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
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
                <Option></Option>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option component here
            </div>
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