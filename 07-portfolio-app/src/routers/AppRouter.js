import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Portfolio from '../components/PortfolioPage';
import PortfolioItem from '../components/PortfolioItemPage';
import Contact from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/portfolio" component={Portfolio} exact={true}/>
                <Route path="/portfolio/:id" component={PortfolioItem} exact={true}/>
                <Route path="/contact" component={Contact} exact={true}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;