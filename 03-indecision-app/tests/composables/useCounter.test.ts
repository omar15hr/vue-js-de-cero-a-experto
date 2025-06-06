import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { useCounter } from '@/composables/useCounter';

describe('useCounter composable', () => {
  test('initializes counter with default value', () => {
    const { counter, squareCounter } = useCounter();

    expect(counter.value).toBe(5);
    expect(squareCounter.value).toBe(5 * 5);
  });

  test('initializes counter with initial value', () => {
    const initialValue = 10;
    const { counter, squareCounter } = useCounter(initialValue);

    expect(counter.value).toBe(initialValue);
    expect(squareCounter.value).toBe(initialValue * initialValue);
  });

  test('increments counter when increment method is called', () => {
    const { counter, squareCounter } = useCounter();

    counter.value++;

    expect(counter.value).toBe(6);
    expect(squareCounter.value).toBe(6 * 6);
  });
});