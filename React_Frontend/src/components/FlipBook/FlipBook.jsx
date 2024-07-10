import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './FlipBook.css';
import '../Profil/Profil-Design.css'
import { Link } from "react-router-dom";



const Page = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage" ref={ref}>
            {props.children}
        </div>
    );
});
function DemoBook() {
    const book = useRef();
    const [name, setName] = useState("");
    return (
        <>

            <HTMLFlipBook
                width={300}
                height={450}
                size="fixed"
                drawShadow={false}
                flippingTime={1000}
                usePortrait={true}
                startZIndex={0}
                autoSize={true}
                maxShadowOpacity={1}
                showCover={false}
                mobileScrollSupport={true}
                swipeDistance={30}
                clickEventForward={true}
                useMouseEvents={true}
                renderOnlyPageLengthChange={false}
                ref={book}
                className="flipbook"
            >
                <Page>
                    <h1>Wer bin ich?</h1>
                    <p>Ich heiße <input type="text" placeholder="Dein Name" value={name} onChange={(e) => setName(e.target.value)} /></p>
                </Page>

                <Page number="2">
                    <h1>Page Header</h1>
                    <p>Page text 2</p>
                    <p>Page number: 2</p>
                </Page>

                <Page number="3">
                    <h1>Page Header</h1>
                    <p>Page text 3</p>
                    <p>Page number: 3</p>
                </Page>

                <Page number="4">
                    <h1>Page Header</h1>
                    <p>Page text 4</p>
                    <p>Page number: 4</p>
                </Page>
                
                <Page number="5">
                    <h1>Page Header</h1>
                    <p>Page text 5</p>
                    <p>Page number: 5</p>
                </Page>
                
                <Page number="6">
                    <h1>Page Header</h1>
                    <p>Page text 6</p>
                    <p>Page number: 6</p>
                </Page>
                
                <Page number="7">
                    <h1>Page Header</h1>
                    <p>Page text 7</p>
                    <p>Page number: 7</p>
                </Page>
                
                <Page number="8">
                    <h1>Page Header</h1>
                    <p>Page text 8</p>
                    <p>Page number: 8</p>
                </Page>
                
                <Page number="9">
                    <h1>Page Header</h1>
                    <p>Page text 9</p>
                    <p>Page number: 9</p>
                </Page>

                
                <Page number="10">
                    <h1>Page Header</h1>
                    <p>Page text 10</p>
                    <p>Page number: 10</p>
                </Page>
                
            </HTMLFlipBook>

            <button id="ZurückFlipBook">
        <Link to="/16-Freunde">16.Seite</Link>
      </button>
      
        </>
    );
}

export default DemoBook;