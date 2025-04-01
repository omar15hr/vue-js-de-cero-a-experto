import { useChat } from '@/composables/useChat';
import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';

describe('useChat composable', () => {
  test('add message correctly when onMessage is called', async() => {
    const text = 'Hello, world!';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    expect(messages.value.length).toBe(1);
    expect(messages.value[0].message).toBe(text);
    expect(messages.value[0].itsMine).toBe(true);
    expect(messages.value[0]).toEqual({
      id: expect.any(Number),
      message: text,
      itsMine: true,
    });
  });

  test('add nothing if text is empty', async() => {
    const text = '';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    expect(messages.value.length).toBe(0);
  });

  test('gets her response correctly when message ends with "?"', async() => {
    const text = 'quieres cafe?';
    const { messages, onMessage } = useChat();

    await onMessage(text);
    await new Promise(resolve => setTimeout(resolve, 2000));

    const [myMessage, herMessage] = messages.value;

    expect(messages.value.length).toBe(2);
    expect(herMessage).toEqual({
      id: expect.any(Number),
      message: expect.any(String),
      itsMine: false,
      image: expect.any(String),
    });
    expect(myMessage).toEqual({
      id: expect.any(Number),
      message: expect.any(String),
      itsMine: true,
    });
  });

  test('mock response - fetch api', async() => {
    const mockHerResponse = { answer: 'yes', image: 'example.gif' };
    (window as any).fetch = vi.fn(async() => ({
      json: async() => mockHerResponse,
    }))


    const text = 'quieres cafe?';
    const { messages, onMessage } = useChat();

    await onMessage(text);
    await new Promise(resolve => setTimeout(resolve, 1600));

    const [, herMessage] = messages.value;

    expect(herMessage).toEqual({
      id: expect.any(Number),
      message: mockHerResponse.answer,
      itsMine: false,
      image: mockHerResponse.image,
    })

  });
});