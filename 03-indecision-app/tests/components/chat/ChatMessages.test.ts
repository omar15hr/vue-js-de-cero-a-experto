import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message-interface';
import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';

const messages: ChatMessage[] = [
  {
    id: 1,
    message: 'Hello, world!',
    itsMine: true,
  },
  {
    id: 2,
    message: 'Goodbye, world!',
    itsMine: false,
  },
];

describe('ChatMessages component', () => {
  const wrapper = mount(ChatMessages, {
    props: { messages },
  });

  test('renders messages correctly', () => {
    const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' });
    expect(chatBubbles.length).toBe(messages.length);
  });

  test('scrolls down to the bottom after messages update', async() => {
    const scrollToMock = vi.fn();

    const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement;
    chatRef.scrollTo = scrollToMock;

    await wrapper.setProps({
      messages: [...messages, {id: 3, message: 'Hello, world!', itsMine: true}],
    });

    await new Promise(resolve => setTimeout(resolve, 100));

    expect(scrollToMock).toHaveBeenCalledTimes(1);
    expect(scrollToMock).toHaveBeenCalledWith({ top: expect.any(Number), behavior: 'smooth' });
  });
});
