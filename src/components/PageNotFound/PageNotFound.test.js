import React from 'react';
import { PageNotFound } from './PageNotFound';
import { shallow } from 'enzyme';

describe('PageNotFound', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <PageNotFound />)
  });

  it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
  });
});