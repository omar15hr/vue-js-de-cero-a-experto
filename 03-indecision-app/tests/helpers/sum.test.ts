import { expect, test } from 'vitest';
import { addArray, sum } from '../../src/helpers/sum';
import { describe } from 'node:test';

describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    // Preparación
    const a = 1;
    const b = 2;

    // Estímulo
    const result = sum(a, b);

    // El comportamiento esperado
    expect(sum(1, 2)).toBe(3);
  });
});

describe('addArray function', () => {
  test('addArray adds 1 + 2 to equal 3', () => {
    // Preparación
    const a = [1, 2, 3];

    // Estímulo
    const result = addArray(a);

    // El comportamiento esperado
    expect(result).toBe(6);
  });

  test('should return 0 if the array is empty', () => {
    // Preparación
    const a = [];

    // Estímulo
    const result = addArray(a);

    // El comportamiento esperado
    expect(result).toBe(0);
  });
});
