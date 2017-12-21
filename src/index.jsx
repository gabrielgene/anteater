import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

import Home from './pages/home';
import registerServiceWorker from './registerServiceWorker';

const App = () => <Home />;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
