import React from 'react';
import { render } from 'react-dom';
import HelloWorld from './components/helloworld';
import TestApp from './components/test';
import SnapApp from './components/snap.react';
import { Router, Route, hashHistory } from 'react-router';

// 定义路由
render(
  (
	  <Router history={ hashHistory }>
		<Route path="/" component={ HelloWorld } />
   	  	<Route path="/test" component={ TestApp } />
	  	<Route path="/snaptweet" component={ SnapApp } />
	  </Router>), document.getElementById('app')
);
