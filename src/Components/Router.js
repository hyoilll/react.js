import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import TV from "../Routes/TV";
import Header from "./Header"

class MyRouter extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/tv' exact component={TV} />
                    <Route path='/tv/popular' render={() => { return <h1>Popular</h1> }} />
                    <Route path='/search' exact component={Search} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>
        )
    }
};

export default MyRouter;