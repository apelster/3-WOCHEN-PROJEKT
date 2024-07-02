import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './FlipBook.css';
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
                height={500}
                size="fixed"
                minWidth={200}
                maxWidth={800}
                minHeight={400}
                maxHeight={1000}
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
            </HTMLFlipBook>
        </>
    );
}

export default DemoBook;