import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

// connect componentは子componentも含みmountする。なのでauthors={[]}がSelectInput生成時必須
// SelectInput <select options.map> = options   = {allAuthors} = this.props.authors = authors: authorsFormattedForDropdown
describe ('Manage Course Page', () => {
  it('sets error message when trying to save empty title', () => {
    const props = {
      authors: [],
      actions: { saveCourse: () => { return Promise.resolve(); }},
      course: { id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
    };

    const wrapper = mount(<ManageCoursePage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    expect(saveButton.prop('value')).toBe('Save');
    saveButton.simulate('click');

    expect(wrapper.find('input').last().props().type).toBe("submit");
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
