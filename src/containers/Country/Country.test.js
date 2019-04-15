import React from 'react';
import { Country } from './Country';
import { shallow } from 'enzyme';
import cogoToast from 'cogo-toast';

jest.mock('cogo-toast');

describe('Country', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Country 
        key={'France'} 
        name={'France'}
        rating={2.4}
    />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call checkRating when component is mounted', () => {
    const spy = jest.spyOn(wrapper.instance(), 'checkRating');
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  describe('checkRating', () => {
    it('should return rating L when checkRating is called', () => {
      wrapper.instance().checkRating();
      expect(wrapper.state('rating')).toEqual('L');
    });
  
    it('should return rating M when checkRating is called', () => {
      wrapper = shallow(<Country rating={3}/>);
      wrapper.instance().checkRating();
      expect(wrapper.state('rating')).toEqual('M');
    });
  
    it('should return rating H when checkRating is called', () => {
      wrapper = shallow(<Country rating={4}/>);
      wrapper.instance().checkRating();
      expect(wrapper.state('rating')).toEqual('H');
    });
  
    it('should return rating E when checkRating is called', () => {
      wrapper = shallow(<Country rating={5}/>);
      wrapper.instance().checkRating();
      expect(wrapper.state('rating')).toEqual('E');
    });
  })

  describe('addCountry', () => {
    let localStorageMock;

    beforeEach(() => {
      localStorageMock = {
        getItem: jest.fn(),
        setItem: jest.fn()
      };
      global.localStorage  = localStorageMock;
    });

    it('should call localStorage.getItem', () => {
      wrapper = shallow(<Country id={5}/>);
      wrapper.find('.add').simulate('click');
      expect(localStorage.getItem).toHaveBeenCalled();
      expect(localStorage.setItem).toHaveBeenCalled();
    });

    it('calls cogoToast.success', () => {
      cogoToast.success = jest.fn();
      wrapper = shallow(<Country id={5}/>);
      wrapper.find('.add').simulate('click');
      expect(cogoToast.success).toHaveBeenCalled();
    });
  });
})