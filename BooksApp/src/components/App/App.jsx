import React, { Component } from 'react';
import Header from '../Header';
import BooksControlPanel from '../BooksControlPanel';

class App extends Component {
    render() {
        return (
            <>
            <Header/>
            <BooksControlPanel/>
            </>
        );
    }
} 

export default App;
