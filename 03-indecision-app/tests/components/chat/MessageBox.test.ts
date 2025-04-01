import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import MessageBox from '@/components/chat/MessageBox.vue';

describe('MessageBox component', () => {
  const wrapper = mount(MessageBox);

  test('renders input and button elements correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  });

  test('emits sendMessage event when button is clicked', async () => {
    const message = 'Hello';

    await wrapper.find('input[type="text"]').setValue(message);
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sendMessage')).toBeTruthy();
    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
    expect((wrapper.vm as any).message).toBe('');
  });

  test('emits sendMessage event when keypress.enter is clicked', async () => {
    const message = 'Hello';

    const input = wrapper.find('input');
    await input.setValue(message);
    await input.trigger('keypress.enter');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
  });

  test('emits sendMessage event when keypress.enter is clicked', async () => {
    const wrapper = mount(MessageBox);
    const input = wrapper.find('input');

    await input.trigger('keypress.enter');
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sendMessage')?.[0]).toBeFalsy();
  });
});
