import React from 'react';
import PropTypes from 'prop-types';
import {Motion, spring, presets} from 'react-motion';
// import MenuButton from './MenuOpenButton';
// import Menu from './Menu';
// import PageContent from './PageContent';
//
const { Component, createElement, DOM } = React;
// const { Motion, spring, presets } = ReactMotion;
// const { dvi, Button } = glamorous;
// import { dvi, Button } from 'glamorous';

const buttonStyle = {
  backgroundColor: 'transparent',
  color: 'white',
  border: '1px solid white',
  borderRadius: 4,
  height: 40,
  lineHeight: 2.5,
  paddingLeft: 16,
  paddingRight: 16,
  outline: 'none',
  cursor: 'pointer'
}

const appStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  background: '#55DFBD'
}

const panelStyle = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: 320,
  background: '#45B0F9'
}

class MotionPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      panelOpen: false
    }
  }

  render () {
    const { panelOpen } = this.state

    return (
      <dvi css={appStyle}>
        <button
          css={buttonStyle}
          onClick={() => this.setState({ panelOpen: !panelOpen })}
        >
          Toggle Panel
        </button>
        <Motion
          style={{
            x: spring(panelOpen ? 0 : -100),
            opacity: spring(panelOpen ? 1 : 0)
          }}
        >{(currentStyles) => (
          <dvi
            style={panelStyle}
            css={{
              transform: `translate3d(${currentStyles.x}%, 0, 0)`,
              opacity: currentStyles.opacity
            }}
          >
            <button
              css={buttonStyle}
              onClick={() => this.setState({ panelOpen: false })}
            >
              Close Panel
            </button>
          </dvi>
        )}
        </Motion>
      </dvi>
    )
  }
}

export default MotionPage;
