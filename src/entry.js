import React from 'react';
import { render } from 'react-dom';
import HelloWorld from './helloworld';
import TestApp from './test';

import { Router, Route, hashHistory } from 'react-router';

// 定义路由
render(
    (<Router history={ hashHistory }>
        <Route path="/" component={ HelloWorld } />
        <Route path="/test" component={ TestApp } />
    </Router>), document.getElementById('app')
);
