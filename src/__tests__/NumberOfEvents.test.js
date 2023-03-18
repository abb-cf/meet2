import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents />', () => {
  
  let NumberOfEventsWrapper, noeInput;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    noeInput = NumberOfEventsWrapper.find('input.noe-input');
  });

  test('<NumberOfEvents /> and noe-input are both rendered', () => {
    expect(NumberOfEventsWrapper).toBeDefined();
    expect(noeInput).toBeDefined();
  });
  
  test('noe-input is 32 (number type) by default', () => {
    expect(NumberOfEventsWrapper.find('input.noe-input').prop('type')).toBe('number');
    expect(NumberOfEventsWrapper.state('noe')).toBe(32);
  });
  
  test('noe-input is changed, state and value are reflected correctly', () => {
    expect(NumberOfEventsWrapper.state('noe')).toBe(32);
    noeInput.simulate('change', {target: { value: 15 }});
    expect(NumberOfEventsWrapper.state('noe')).toBe(15);
  });

  test('filter events by city', () => {
    
  })
})