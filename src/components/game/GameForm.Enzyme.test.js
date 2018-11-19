import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
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

  return shallow(<GameForm {...props}/>);
}

describe('GameForm via Enzyme', () => {
  it('renders form and h1', () => {
    const wrapper = setup(false);
    expect( wrapper.find('form').length ).toBe(1);
    expect( wrapper.find('h1').text() ).toEqual('Manage Game');
  });

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect( wrapper.find('input').props().value ).toBe('Save');
  });


  it('save button is labeled "Save..." when not saving',  () => {
    const wrapper = setup(true);
    expect( wrapper.find('input').props().value ).toBe('Save...')
  })

})
