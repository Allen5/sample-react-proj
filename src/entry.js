import React from 'react';
import { render } from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

class App extends React.Component {
    render() {
        return <p> Hello { this.props.name } </p>;
    }
}

render(
    (<Router history={ hashHistory }>
        <Route path="/" component={ App } />
    </Router>), document.getElementById('app')
);

//render(<App name="React!!" />, document.getElementById('app') );
