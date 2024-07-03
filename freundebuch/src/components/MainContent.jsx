import React from 'react';
// import DemoBook from './FlipBook';
import './MainContent.css';


const MainContent = () => {
    return (
        <main className="main-content">
    

        <div className='container'>
            <img className='feder' src="/img/feder.png" alt="" />          
        </div>

        <div>
            <img className='Book-Background' src="/img/Background.png" alt=""/>
        
            <h1 className='Headline'>Was bin ich?</h1>


            <p id='inline'>JA</p>
            <p id='inline1'>NEIN</p>

            <ul className='checkbox'>

                <li>
                    <label htmlFor="box">
                        <p className='paragraph'>Wie lautet dein Name ?</p>
                        <input className='box' type="checkbox" />
                        <input className='box' type="checkbox" />
                    </label>
                </li>
                
                <li>
                    <label htmlFor="box">
                    <p className='paragraph'>Wie lautet dein Name ?</p>
                    <input className='box' type="checkbox" />
                    <input className='box' type="checkbox" />
                    </label>
                </li>

                <li>
                    <label htmlFor="box">
                    <p className='paragraph'>Wie lautet dein Name ?</p>
                    <input className='box' type="checkbox" />
                    <input className='box' type="checkbox" />
                    </label>
                </li>
          
                <li>
                    <label htmlFor="box">
                    <p className='paragraph'>Wie lautet dein Name ?</p>
                    <input className='box' type="checkbox" />
                    <input className='box' type="checkbox" />
                    </label>
                </li>
          
                <li>
                    <label htmlFor="box">
                    <p className='paragraph'>Wie lautet dein Name ?</p>
                    <input className='box' type="checkbox" />
                    <input className='box' type="checkbox" />
                    </label>
                </li>
             
                <li>
                    <label htmlFor="box">
                    <p className='paragraph'>Wie lautet dein Name ?</p>
                    <input className='box' type="checkbox" />
                    <input className='box' type="checkbox" />
                    </label>
                </li>
             
                <li>
                    <label htmlFor="box">
                    <p className='paragraph'>Wie lautet dein Name ?</p>
                    <input className='box' type="checkbox" />
                    <input className='box' type="checkbox" />
                    </label>
                </li>

            </ul>

            
        </div>

        
        </main>

        
    );
};

export default MainContent;