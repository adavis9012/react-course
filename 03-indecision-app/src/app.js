class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
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

    handleDeleteOptions() {
        this.setState(() => ({
            options: []
        }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
                options: prevState.options.filter((option) => (
                    optionToRemove !== option
                ))
            })
        );
    }

    handlePick(){
        const choice = Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[choice]);
    }
    handleAddOption(option){
        if(option.length < 1){
            return 'Enter a valid option'
        } else if(this.state.options.indexOf(option) > -1){
            return 'Option is already defined'
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
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

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer'
}

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What Should I do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button
                onClick={props.handleDeleteOptions}
            >
                Remove All
            </button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map(option => (
                    <Option 
                        key = {option}
                        optionText = {option}
                        handleDeleteOption = {props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <p>
            {props.optionText}
            < button 
                onClick = {(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            > 
                remove 
            </button>
        </p>
    );
}

class AddOption extends React.Component {
    constructor({props}){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){
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

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));