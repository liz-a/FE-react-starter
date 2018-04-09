import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//THIS P IS JSX
// const helloWorld = <p>Hello World</p>; //THIS IS DECLARATIVE
// const helloWorld = React.createElement('p', null, 'Hello World'); //THIS IS IMPERATIVE
//is transpiled into javascript

const helloWorld = <p> 2 + 2 = {2+3}</p>;
const yinyang = (
    <div>
        <p>yin</p>
        <p>yang</p>
    </div>
);
console.log(yinyang)
ReactDOM.render(<App />, document.getElementById('root'));
