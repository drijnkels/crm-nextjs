import { describe, it, expect } from 'vitest';

import {setAddress} from "@/scripts/utils";

describe('setAddress', () => {
  it('should format a full address', () => {
    const address = setAddress({street: '1100 street', city: 'City', postal: '00000', state: 'AA'});
    expect(address).toBe('1100 street, City, AA 00000');
  });

  it('should format correctly with missing data', () => {
    expect(setAddress({street: '1100 street', city: 'City', postal: '00000', state: ''})).toBe('1100 street, City, 00000');
    expect(setAddress({street: '1100 street', city: 'City', postal: '', state: ''})).toBe('1100 street, City');
    expect(setAddress({street: '1100 street', city: '', postal: '', state: ''})).toBe('1100 street');
  });

  it('should return empty on an empty address object', () => {
    expect(setAddress({street: '', city: '', postal: '', state: ''})).toBe('');
  })

  it('should still return on missing object params', () => {
    // @ts-ignore
    expect(setAddress({city: 'City', postal: ''})).toBe('City');
  })

  it('should return a string if numbers instead of strings are given', () => {
    // @ts-ignore
    expect(setAddress({street: 123123, city: '123', postal: '', state: ''})).toBe('123123, 123');
  })

  it('should throw an error if no addres object was given', () => {
    // @ts-ignore
    expect(() => setAddress()).toThrow();
  })
})