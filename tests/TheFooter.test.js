import { shallowMount } from '@vue/test-utils';
import TheFooter from '../src/components/TheFooter.vue';

describe('TheFooter.vue', () => {
  const wrapper = shallowMount(TheFooter);

  it('Component did rendered', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('Component print correct inner text', () => {
    expect(wrapper.text()).toBe('Ⓒ 2023 All right reserved. Weather tracker app');
  });
});