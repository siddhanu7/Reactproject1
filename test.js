import React from 'react';
const name = "Anubhuti Shivhare";
const currentdate = new Date().toLocaleDateString();
const currenttime = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/seed/picsum/200/300";
const img2 = "https://picsum.photos/200/300";
const img3 = "https://picsum.photos/200/300/?blur=1";
const img4 = "https://picsum.photos/200/300?grayscale";


function Test() {
    return (
        <div>
            <h1 contentEditable="true" className="heading"  ></h1>
            <p>{`My first name is ${name} `}</p>
            <p>Current date is: {currentdate} </p>

            <p>Current time is: {currenttime} </p>
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
        </div>
    );
}

export default Test;
