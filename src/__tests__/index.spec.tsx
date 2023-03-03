// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { ReactElement } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { App } from '../App';

describe('Test App Entry point', () => {
  it('should have a header tag with Hello world React!', () => {
    const wrapper:ShallowWrapper<ReactElement> = shallow(<App />);
    expect(wrapper.find('h1').text()).toEqual('Hello world React!');
  });
});
