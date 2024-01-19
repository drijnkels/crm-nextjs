import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { DateTime } from 'luxon'; // If you're using luxon
import {convertDateString} from "@/scripts/utils";

describe('convertDateString', () => {
  it('should return "-" for empty or undefined date strings', () => {
    expect(convertDateString('')).toBe('-');
    // @ts-ignore
    expect(convertDateString(undefined)).toBe('-');
  });

  it('should return the date in dd/MM/yyyy format by default', () => {
    const testDate = '2024-01-17';
    expect(convertDateString(testDate)).toBe('17/01/2024');
    const testDatePast = '2022-08-12';
    expect(convertDateString(testDatePast)).toBe('12/08/2022');
  });

  it('should return the date in MM/dd/yyyy format when requested', () => {
    const testDate = '2024-01-17 12:38';
    expect(convertDateString(testDate, false, 'MM/dd/yyyy')).toBe('01/17/2024');
    expect(convertDateString(testDate, true, 'MM/dd/yyyy')).toBe('12:38 - 01/17/2024');
  });

  it('Test a leap day', () => {
    const testDate = '2020-02-29 12:38';
    expect(convertDateString(testDate)).toBe('29/02/2020');
    expect(convertDateString(testDate, true, 'MM/dd/yyyy')).toBe('12:38 - 02/29/2020');
  });

  it('should include time when requested', () => {
    const testDate = '2023-01-15 08:30';
    expect(convertDateString(testDate, true)).toMatch(/08:30 - 15\/01\/2023/);
  });

  it('should return "Today @ [time]" if the date is today', () => {
    const today = DateTime.now().toISO();
    expect(convertDateString(today)).toMatch(/^Today @ \d{2}:\d{2}$/);
  });
})