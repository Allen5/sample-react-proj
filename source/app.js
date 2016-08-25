import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoApp from './containers/Todo.App.react';
import todoApp from './reducers/todo.reducers';

// 获取reedit的文章标题
import ReeditApp from './containers/Reedit.App.react';

import HelloWorld from './components/helloworld';
import TestApp from './components/test';
import SnapApp from './components/Snap.react';
import EchartApp from './components/Echart.react';
import { Router, Route, hashHistory } from 'react-router';

// let rootElement = document.getElementById('app');
// render(
//   <Reedit />,
//   rootElement
// );

// 定义路由
render(
  (
	  <Router history={ hashHistory }>
		<Route path="/" component={ HelloWorld } />
   	  	<Route path="/test" component={ TestApp } />
	    <Route path="/snaptweet" component={ SnapApp } />
	    <Route path="/todo" component={ TodoApp } />
	    <Route path="/echarts" component={ EchartApp } />
	  </Router>), document.getElementById('app')
);
