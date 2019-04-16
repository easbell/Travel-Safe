import React from 'react';
import { Country } from './Country';
import { shallow } from 'enzyme';
import cogoToast from 'cogo-toast';

jest.mock('cogo-toast');

describe('Country', () => {
  let wrapper;
  let mockEvent;

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
    it('should call localStorage.getItem', () => {
      mockEvent = { target: { className: 'add' }}
      wrapper.setState({ saved: false });
      wrapper = shallow(<Country id={5}/>);
      wrapper.find('.add').simulate('click', mockEvent);
      expect(localStorage.getItem).toHaveBeenCalled();
      expect(localStorage.setItem).toHaveBeenCalled();
    });

    it.skip('calls cogoToast.success', () => {
      cogoToast.success = jest.fn();
      wrapper = shallow(<Country id={5}/>);
      wrapper.find('.add').simulate('click');
      expect(cogoToast.success).toHaveBeenCalled();
    });
  });

  describe('toggleCountry', () => {
    let mockEvent;

    beforeEach(() => {
      mockEvent = { target: { className: 'countrySaved' }}
    });

    it.skip('should invoke removeCountry', () => {
      wrapper.setState({ saved: true });
      wrapper.find('.countrySaved').simulate('click', mockEvent);
      console.log(mockEvent)
      const spy = jest.spyOn(wrapper.instance(), 'removeCountry');
      expect(spy).toHaveBeenCalled();
    });

    it.skip('should invoke addCountry', () => {
      wrapper.setState({ saved: false });
      mockEvent = { target: { className: 'add' }}
      wrapper.find('.add').simulate('click', mockEvent);
      const spy = jest.spyOn(wrapper.instance(), 'addCountry');
      expect(spy).toHaveBeenCalled();
    });

    it('should set state', () => {
      wrapper.setState({ saved: false });
      mockEvent = { target: { className: 'add' }}
      wrapper.find('.add').simulate('click', mockEvent);
      expect(wrapper.state('saved')).toBe(true);
    });
  });
})