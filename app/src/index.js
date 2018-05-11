import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import HelloWorld from './HelloWorld';
import PropsValidation from './PropsValidation';
import Events from './Events';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
    // <HelloWorld txt = 'HelloWorld, eu sou o ReactJs!'/>,
    // <PropsValidation name="Rodrigo A." age='28' height="1.75" />,
    <Events />,
    document.getElementById("root")
);

