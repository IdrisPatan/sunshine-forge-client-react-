import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

it('should call handleInputs when typing in input fields', () => {
  const event = {target: {value: 'hello'}}
  const wrapper = shallow(<App/>);
  wrapper.instance().handleInputs(event, 'spaceName')
  expect(wrapper.instance().state.spaceName).toEqual('hello')
});

it("should call createSpace when the create button is clicked", () => {
    const wrapper = shallow(<App/>)
    wrapper.instance().createSpace = jest.fn()
    wrapper.find('button').simulate('click')
    expect(wrapper.instance().createSpace).toBeCalled()
});

