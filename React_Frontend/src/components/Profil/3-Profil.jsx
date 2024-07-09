import React from 'react';
import './Profil-Design.css';
import { Link } from "react-router-dom";


    const Profil3 = () => {
        return (
            <main className="main-content">
                <div className='container'>
                    <img className='feder' src="/img/feder.png" alt="" />
                </div>
    
                <div>
                    <img className='Book-Background' src="/img/book.png" alt=""/>
                    <h1 className='Headline'>Was bin ich?</h1>
                    <p id='ja'>JA</p>
                    <p id='nein'>NEIN</p>
    
                    <ul className='checkbox'>
                        <li className='liste'>
                            <label htmlFor="question1">
                                <p className='paragraph'>Wie lautet dein Name ?</p>
                                <input className='box' type="radio" name="question1" />
                                <input className='box' type="radio" name="question1" />
                            </label>
                        </li>
    
                        <li className='liste'>
                            <label htmlFor="question2">
                                <p className='paragraph'>Wie lautet dein Name ?</p>
                                <input className='box' type="radio" name="question2" />
                                <input className='box' type="radio" name="question2" />
                            </label>
                        </li>
    
                        <li className='liste'>
                            <label htmlFor="question3">
                                <p className='paragraph'>Wie lautet dein Name ?</p>
                                <input className='box' type="radio" name="question3" />
                                <input className='box' type="radio" name="question3" />
                            </label>
                        </li>
    
                        <li className='liste'>
                            <label htmlFor="question4">
                                <p className='paragraph'>Wie lautet dein Name ?</p>
                                <input className='box' type="radio" name="question4" />
                                <input className='box' type="radio" name="question4" />
                            </label>
                        </li>
    
                        <li className='liste'>
                            <label htmlFor="question5">
                                <p className='paragraph'>Wie lautet dein Name ?</p>
                                <input className='box' type="radio" name="question5" />
                                <input className='box' type="radio" name="question5" />
                            </label>
                        </li>
    
                        <li className='liste'>
                            <label htmlFor="question6">
                                <p className='paragraph'>Wie lautet dein Name ?</p>
                                <input className='box' type="radio" name="question6" />
                                <input className='box' type="radio" name="question6" />
                            </label>
                        </li>
    
                        <li className='liste'>
                            <label htmlFor="question7">
                                <p className='paragraph'>Wie lautet dein Name ?</p>
                                <input className='box' type="radio" name="question7" />
                                <input className='box' type="radio" name="question7" />
                            </label>
                        </li>
                    </ul>
                    
                <button className='leftbtn'>
                    <Link to="/2-Profil">Vorherige Seite</Link>
                </button>

                
                <button className='rightbtn'>
                    <Link to="/4-Profil">Nächste Seite</Link>
                </button>

                </div>

            </main>
        );
    };
    
    export default Profil3;