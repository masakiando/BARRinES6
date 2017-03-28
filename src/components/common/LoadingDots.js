import React, {PropTypes} from 'react';

class LoadingDots extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {frame: 1};
  }
  // もう直ぐマウントされる
  // その時にsetIntervalを使う。先にrenderが終わるように遅延させる
  // render後setStateを開始させることで再サイクル開始。
  // 一定の遅延間隔を置いて関数を繰り返し呼び出します。
  // setStateを一定間隔で繰り返し呼ぶ
  // その際にframeを+ 1することで再レンダリング開始
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({  // eslint-disable-line react/no-did-mount-set-state
        frame: this.state.frame + 1
      });
    }, this.props.interval);
  }
  // もう直ぐアンマウントされる。ページが変わったらsetInterval終わり。
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  // 余り算数ロジックで指定の数になったら０から始まるように見せる
  // 今回は２０でやる。
  render() {
    let dots = this.state.frame % (this.props.dots + 1);
    let text = '';
    while (dots > 0) {
      text += 'ロード中';
      dots--;
    }
    return <span {...this.props}>{text}&nbsp;</span>;
  }
}

LoadingDots.defaultProps = {
  interval: 300, dots: 3
};

LoadingDots.propTypes = {
  interval: PropTypes.number,
  dots: PropTypes.number
};

export default LoadingDots;
