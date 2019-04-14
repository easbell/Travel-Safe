import React from 'react';
import { App, mapDispatchToProps, mapStateToProps } from './App';
import { shallow } from 'enzyme';
import { fetchData } from '../../thunks/fetchData';

jest.mock('./thunks/fetchData')

describe('App', () => {
  let wrapper;
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
    wrapper = shallow(<App fetchData={mockFn}/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetchData when mounted', () => {
    wrapper.instance().componentDidMount();
    expect(mockFn).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with fetchData action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = fetchData();
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.fetchData();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

  describe('mapStateToProps', () => {
    it('returns correct props', () => {
      const mockState = {
        data: ['some mock data'],
        other: 'other'
      }
      const expectedProps = {
        data: ['some mock data']
      }

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedProps)
    });
  });
});