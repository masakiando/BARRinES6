import React from 'react';
import MyComponent from './MyComponent';
import Button from './Button';
import MyList from './MyList';

class ManageMyComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    return new Promise((resolve) => {
      this.timer = setTimeout(() => {
        resolve([
          'First',
          'Second',
          'Third'
        ]);
      }, 8000);
    }).then(items => this.setState({ items }));
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <MyComponent>
        <MyComponent.First />
        <MyComponent.Second />
        <Button />
        <MyList {...this.state} />
      </MyComponent>
    );
  }
}

export default ManageMyComponent;
