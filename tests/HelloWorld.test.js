import HelloWorld from '../src/components/HelloWorld.vue';
import { mount } from '@vue/test-utils';

test("HelloWorld component render the correct text", () => {
  const wrapper = mount(HelloWorld);
  expect(wrapper.text()).toBe('Hello from Vue component');
});