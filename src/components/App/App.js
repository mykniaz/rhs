import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import Form from '../Form';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [
        {
          label: 'test',
          isDone: false,
          isImportant: false,
          id: 1,
        },
        {
          label: 'test2',
          isDone: true,
          isImportant: false,
          id: 2,
        },
      ],
      term: '',
      type: '',
    };
  }

  removeListItem = (id) => {
    this.setState(({ items }) => {
      const removeIndex = items.findIndex((item) => item.id === id);

      return {
        items: [
          ...items.slice(0, removeIndex),
          ...items.slice(removeIndex + 1),
        ],
      };
    });
  };

  addListItem = (label) => {
    this.setState(({ items }) => {
      const newItem = {
        label,
        id: new Date().valueOf(),
      };

      return {
        items: [
          ...items,
          newItem,
        ],
      };
    });
  };

  toggleProp = (id, propName) => {
    this.setState((state) => {
      const { items } = state;
      const markedIndex = items.findIndex((item) => item.id === id);
      const newItems = [...items];

      const oldPropValue = items[markedIndex][propName];
      newItems[markedIndex][propName] = !oldPropValue;

      return { items: newItems };
    });
  };

  searchInputHandler = (term) => {
    this.setState({ term });
  };

  changeTypeHandler = (type) => {
    this.setState({ type });
  };

  termItems = () => {
    const { items, term, type } = this.state;

    return items
      .filter((item) => term === '' || item.label.indexOf(term) !== -1)
      .filter((item) => type === ''
        || (type === 'done' && item.isDone)
        || (type === 'active' && !item.isDone));
  };

  render() {
    const { items } = this.state;

    const doneItemsAmount = items.filter((item) => item.isDone).length;
    const todoItemsAmount = items.length - doneItemsAmount;

    return (
      <div className="container">
        <AppHeader todo={todoItemsAmount} done={doneItemsAmount} />
        <SearchPanel
          onSearchInput={this.searchInputHandler}
          onChangeType={this.changeTypeHandler}
        />
        <TodoList
          items={this.termItems()}
          onMarkItem={(id) => this.toggleProp(id, 'isImportant')}
          onCrossItem={(id) => this.toggleProp(id, 'isDone')}
          onDeleteItem={this.removeListItem}
        />
        <Form onAdd={this.addListItem} />
      </div>
    );
  }
}
