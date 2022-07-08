import React, {Component} from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Pathfinder from "./pathfinderComponents/pathfinder";
import Home from "./homeComponents/home";
import Graph from "./Graph/graph";

class App extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        console.log(window.innerHeight,"  ",window.innerWidth);
    }

    render() {
        return (
            <Router basename='/'>
                <Routes>
                    <Route path='/pathfinder'  element={<Pathfinder />}/>
                    <Route path='/graph' element={<Graph />}/>
                    <Route path='/' element={<Home />}/>
                </Routes>
            </Router>
        );
    }
}

export default App;
