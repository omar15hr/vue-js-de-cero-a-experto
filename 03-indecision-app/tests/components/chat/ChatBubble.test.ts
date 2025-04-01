import { mount } from '@vue/test-utils';
import ChatBubble from '@/components/chat/ChatBubble.vue';

describe('ChatBubble component', () => {
  test('renders the message correctly', () => {
    const message = 'Hello, world!';
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: true,
      },
    });
    
    expect(wrapper.find('.bg-blue-200').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy();
    expect(wrapper.find('.bg-blue-200').text()).toContain(message);
    expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy();
  });

  test('renders received message correctly', () => {
    const message = 'Hello, world!';
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: false,
        image: 'example.jpg',
      },
    });
    
    expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
    expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy();
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy();
    // expect(wrapper.find('img').exists()).toBe(false);
    expect(wrapper.find('img').exists()).toBe(true);
  });

});