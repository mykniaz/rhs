import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList/TodoList';

const items = [
  {
    label: 'first',
    id: 1,
    isPrimary: true,
  },
  {
    label: 'second',
    id: 2,
  },
  {
    label: 'third',
    id: 3,
  },
];

const App = () => (
  <div className="container">
    <AppHeader />
    <SearchPanel />
    <TodoList items={items} />
  </div>
);

ReactDom.render(<App />, document.getElementById('root'));
