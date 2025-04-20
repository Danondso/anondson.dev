import { describe, it, expect } from 'vitest';
import { toRoman } from './numbers';

describe('Numbers Utility', () => {
  describe('toRoman', () => {
    it('should convert basic numbers to Roman numerals', () => {
      expect(toRoman(1)).toBe('I');
      expect(toRoman(5)).toBe('V');
      expect(toRoman(10)).toBe('X');
      expect(toRoman(50)).toBe('L');
      expect(toRoman(100)).toBe('C');
      expect(toRoman(500)).toBe('D');
      expect(toRoman(1000)).toBe('M');
    });

    it('should convert numbers with addition patterns', () => {
      expect(toRoman(2)).toBe('II');
      expect(toRoman(3)).toBe('III');
      expect(toRoman(6)).toBe('VI');
      expect(toRoman(7)).toBe('VII');
      expect(toRoman(8)).toBe('VIII');
      expect(toRoman(11)).toBe('XI');
      expect(toRoman(15)).toBe('XV');
      expect(toRoman(16)).toBe('XVI');
      expect(toRoman(30)).toBe('XXX');
    });

    it('should convert numbers with subtraction patterns', () => {
      expect(toRoman(4)).toBe('IV');
      expect(toRoman(9)).toBe('IX');
      expect(toRoman(14)).toBe('XIV');
      expect(toRoman(19)).toBe('XIX');
      expect(toRoman(40)).toBe('XL');
      expect(toRoman(90)).toBe('XC');
      expect(toRoman(400)).toBe('CD');
      expect(toRoman(900)).toBe('CM');
    });

    it('should convert complex numbers', () => {
      expect(toRoman(42)).toBe('XLII');
      expect(toRoman(99)).toBe('XCIX');
      expect(toRoman(444)).toBe('CDXLIV');
      expect(toRoman(999)).toBe('CMXCIX');
      expect(toRoman(1984)).toBe('MCMLXXXIV');
      expect(toRoman(2023)).toBe('MMXXIII');
      expect(toRoman(3999)).toBe('MMMCMXCIX');
    });

    it('should handle zero and negative numbers', () => {
      expect(toRoman(0)).toBe('');
      expect(toRoman(-1)).toBe('');
      expect(toRoman(-5)).toBe('');
    });

    it('should convert large numbers correctly', () => {
      expect(toRoman(2024)).toBe('MMXXIV');
      expect(toRoman(3000)).toBe('MMM');
      expect(toRoman(3888)).toBe('MMMDCCCLXXXVIII');
    });
  });
}); 