import React from 'react';
import './App.css';
import './styles.css'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Datenschutz from './components/Datenschutz/Datenschutz.jsx';

function App() {
    return (
        <div className="App">
            <Header />
            <MainContent />
            <Footer />
            <link rel="stylesheet" href="./components/Datenschutz/Datenschutz" /><Datenschutz />
            <Datenschutz />
        </div>
    );
}
export default App;