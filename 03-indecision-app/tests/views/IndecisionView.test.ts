import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import IndecisionView from '@/views/IndecisionView.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

const mockChatMessages = {
  template: `<div data-testid="mock-messages">Mock Chat Messages</div>`,
}

describe('IndecisionView component', () => {
  test('renders chat messages and messagebox correctly', () => {
    const wrapper = mount(IndecisionView);

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.findComponent(ChatMessages).exists()).toBe(true);
    expect(wrapper.findComponent(MessageBox).exists()).toBeTruthy();
  });

  test('calls onMessage when sending a message', async() => {
    const wrapper = mount(IndecisionView, {
      global: {
        stubs: {
          ChatMessages: mockChatMessages,
        }
      }
    });

    const messageboxComponent = wrapper.findComponent(MessageBox);
    messageboxComponent.vm.$emit('sendMessage', 'Hello, world!');

    await new Promise(resolve => setTimeout(resolve, 100));

    expect(wrapper.html()).toMatchSnapshot();
  });
});