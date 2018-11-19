import React, { Component, PropTypes } from 'react';

class First extends Component {
  render() {
    return (
      <p>First...</p>
    );
  }
}

class Second extends Component {
  render() {
    return (
      <p>Second...</p>
    );
  }
}

class MyComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      first: false,
      second: true,
      heading: 'React Awesomesauce (Busy)',
      content: 'Loading...',
      first_a: 'loading...',
      second_b: 'loading...',
      third_c: 'loading...'
    };
    this.updateState_a = this.updateState_a.bind(this);
    this.updateState_b = this.updateState_b.bind(this);
    this.updateState_c = this.updateState_c.bind(this);
  }
  componentDidMount() {
    this.timer_a = setTimeout(
      this.updateState_a,
      this.props.timeout_first
    );
    this.timer_b = setTimeout(
      this.updateState_b,
      this.props.timeout_second
    );
    this.timer_c = setTimeout(
      this.updateState_c,
      this.props.timeout_thrid
    );
  }
  // setTimeoutの設定解除
  componentWillUnmount() {
    clearTimeout(this.timer_a);
    clearTimeout(this.timer_b);
    clearTimeout(this.timer_c);
  }

  updateState_a() {
    this.setState({
      heading: 'React Awesomesauce',
      content: 'Done!',
      first_a: 'done!'
    });
  }

  updateState_b() {
    this.setState({
      second_b: 'done!'
    });
  }

  updateState_c() {
    this.setState({
      third_c: 'done!'
    });
  }

  render() {
    const enabled = false;
    const text = 'A Button';
    const placeholder = 'input value...';
    const size = 30;
    const array = [
      'First',
      'Second',
      'Third'
    ];
    const object = {
      first: 1,
      second: 2,
      third: 3
    };

    const {
      first,
      second,
      heading,
      content
    } = this.state;

    const { disabled, text_b } = this.props;

    return (
      <section>
        <h1>名前空間のコンポーネント</h1>
        {this.props.children}
        <h1>動的プロパティ値とテキスト</h1>
        <button disabled={!enabled}>{text}</button>
        <input placeholder={placeholder} size={size} />
        <h1>コレクションを要素にマッピングする</h1>
        <h2>Array</h2>
        { /* Maps "array" to an array of "<li>"s.
          Note the "key" property on "<li>".
          This is necessary for performance reasons,
          and React will warn us if it's missing. */ }
        <ul>
          {array.map(i => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <h2>Object</h2>

        { /* Maps "object" to an array of "<li>"s.
             Note that we have to use "Object.keys()"
             before calling "map()" and that we have
             to lookup the value using the key "i". */ }
        <ul>
          {Object.keys(object).map(i => (
            <li key={i}>
              <strong>{i}: </strong>{object[i]}
            </li>
          ))}
        </ul>

        <h1>初期コンポーネントの状態</h1>
          <main>
            <section>
              <button disabled={first}>First</button>
            </section>
            <section>
              <button disabled={second}>Second</button>
            </section>
          </main>

        <h1>コンポーネント状態の設定</h1>
          <main>
            <p>{heading}</p>
            <p>{content}</p>
          </main>

        <h1>コンポーネント状態のマージ</h1>
          <ul>
            {Object.keys(this.state).map(i => (
              <li key={i}>
                <strong>{i}: </strong>{this.state[i]}
              </li>
            ))}
          </ul>

        <h1>デフォルトのプロパティ プロパティ値の受け渡し</h1>
        <button disabled={disabled}>{text_b}</button>

      </section>
    );
  }
}

MyComponent.propTypes = {
  children: PropTypes.array,
  timeout_first: PropTypes.number,
  timeout_second: PropTypes.number,
  timeout_thrid: PropTypes.number,
  disabled: PropTypes.bool,
  text_b: PropTypes.string
};
MyComponent.defaultProps = {
  timeout_first: 1000,
  timeout_second: 3000,
  timeout_thrid: 5000,
  disabled: false,
  text_b: "Hello Props"
};
MyComponent.First = First;
MyComponent.Second = Second;

export default MyComponent;
export { First, Second };
