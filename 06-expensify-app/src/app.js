import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my add expense component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from my edit expense component
    </div>
);

const HelpPage = () => (
    <div>
        This is from my help component
    </div>
);

const NontFoundPage = () => (
    <div>
        404 - <Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/create" activeClassName="is-active" exact={true}>Create Expense</NavLink>
                </li>
                <li>
                    <NavLink to="/edit" activeClassName="is-active" exact={true}>Edit Expense</NavLink>
                </li>
                <li>
                    <NavLink to="/help" activeClassName="is-active" exact={true}>Help</NavLink>
                </li>
            </ul>
        </nav>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NontFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
