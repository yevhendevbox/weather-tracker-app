import { shallowMount } from '@vue/test-utils';
import TheHeader from '../src/components/TheHeader.vue';
import BaseNavLink from '../src/components/BaseNavLink.vue';

describe('TheHeader.vue', () => {
  test('should render Brand title text', () => {
    const wrapper = shallowMount(TheHeader);
    const brand = wrapper.get('p');

    expect(brand.text()).toBe('Weather Tracker');
  });
  test('should render Brand description text', () => {
    const wrapper = shallowMount(TheHeader);
    const desc = wrapper.get('span');

    expect(desc.text()).toBe('application');
  });
  test('should render exact amount of link components', () => {
    const wrapper = shallowMount(TheHeader);
    const links = wrapper.findAllComponents(BaseNavLink);

    expect(links).toHaveLength(2);
  });
});