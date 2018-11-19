import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import GameForm from './GameForm';

function setup(saving, errors, cover, title) {
  let props = {
    game: {
      title: title,
      cover: cover
    },
    saving: saving,
    errors: {
       global: errors
    },
    onSave: () => {},
    onChange: () => {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<GameForm {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('GameForm via Rreact Test Utils', () => {
  it('rendres form and h1', () => {
    const {output} = setup();
    expect(output.type).toBe('form');
    const [ h1 ] = output.props.children;
    // console.log(output);
    expect(h1.type).toBe('h1');
  });

  it('save button is labeled "Save" when not saving',() => {
    const { output } = setup(false);
    const submitButton = output.props.children[4];
    expect(submitButton.props.value).toBe('Save');
  });

  it('save button is labeled "Save..." when saving', () => {
    const { output } = setup(true);
    const submitButton = output.props.children[4];
    expect(submitButton.props.value).toBe('Save...');
  });

  it('The label of the first TextInput is Title', () => {
    const { output } = setup();
    const TitleTextInput = output.props.children[2];
    expect(TitleTextInput.props.label).toBe('Title');
  });

  it('The label of the Second TextInput is Cover', () => {
    const { output } = setup();
    const CoverTextInput = output.props.children[3];
    expect(CoverTextInput.props.label).toBe('Cover');
  });

  it('The type of the first input is submit', () => {
    const { output } = setup();
    const input = output.props.children[4];
    expect(input.props.type).toBe('submit');
  });

  it('errors check', () => {
    const { output } = setup(false, "error!!!!");
    const errorsDiv = output.props.children[1];
    expect(errorsDiv.props.children).toBe('error!!!!');
  });

  it(`1. game.coverにオブジェクトがある時は、classNameが
         fieldのdiv_tagが表示される
      2. The src of the img is cover.png
    `, () => {
    const { output } = setup(false, null, "cover.png");
    const coverDiv = output.props.children[5];
    expect(coverDiv.props.className).toBe('field');
    // console.log(coverDiv);
    const img = coverDiv.props.children[0];
    // console.log(img);
    expect(img.props.src).toBe('cover.png');
  });


});
