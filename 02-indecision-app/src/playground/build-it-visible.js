class VisibilityToggle extends React.Component {
    constructor({props}){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility(e){
        e.preventDefault();
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render(){
        return (
            <article>
                <h1>Visibility Toogle</h1>
                <form onSubmit={this.handleToggleVisibility}>
                    <button>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                </form>
                {this.state.visibility && <p>Fugiat eu amet fugiat adipisicing dolore.</p>}
            </article> 
        );
    }
}

ReactDOM.render(<VisibilityToggle></VisibilityToggle>, document.getElementById('app'));