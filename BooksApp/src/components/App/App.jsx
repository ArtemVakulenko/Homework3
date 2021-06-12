import React, { Component } from 'react';
import Header from '../Header';
import BooksControlPanel from '../BooksControlPanel';
import BookList from '../BookList';

class App extends Component {
    render() {
        return (
            <>
            <Header/>
            <BooksControlPanel/>
            <BookList/>
            </>
        );
    }
} 

export default App;
