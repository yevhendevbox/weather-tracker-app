import { nextTick } from 'vue';
import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';
import BaseNavLink from '../src/components/BaseNavLink.vue';
// import FavoriteView from '../src/views/FavoriteView.vue'
// import HomeView from '../src/views/HomeView.vue'

const mockRouter = {
  push: jest.fn()
};

describe('BaseNavLink.vue', () => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [],
  });

  it('renders a router-link component whith correct props', () => {
    const link = { href: '/example', label: 'Example Link' };
    const wrapper = shallowMount(BaseNavLink, {
      props: { link },
    });
    expect(wrapper.exists()).toBeTruthy();
  });
  it('renders the link label correctly', () => {
    const link = { href: '/example', label: 'Example Link' };
    const wrapper = shallowMount(BaseNavLink, {
      props: { link },
    });

    expect(wrapper.text()).toContain(link.label);
  });

  it('renders the link with the correct "to" prop', () => {
    const link = { href: '/example', label: 'Example Link' };
    const wrapper = shallowMount(BaseNavLink, {
      props: { link },
      global: {
        components: {
          'router-link': RouterLinkStub,
        },
        plugins: [router],
      },
    });

    const routerLink = wrapper.findComponent({ name: 'router-link' });
    expect(routerLink.props().to).toBe(link.href);
  });
  // it('should redirects to the correct page when clicked', async () => {
  //   const link = { href: '/favorite', label: 'Favorite' };
  //   const wrapper = shallowMount(BaseNavLink, {
  //     props: { link },
  //     mocks: {
  //       $router: mockRouter,
  //     },
  //     stubs: ['router-link'],
  //   });

  //   const routerLink = wrapper.find('router-link');
  //   await routerLink.trigger('click');
  //   await nextTick();

  //   expect(mockRouter.push).toHaveBeenCalledWith('/favorite');
  // });
  it('should redirect to the correct page when clicked', async () => {
    const link = { href: '/favorite', label: 'Favorite' };
    const wrapper = shallowMount(BaseNavLink, {
      props: { link },
      mocks: {
        $router: mockRouter,
      },
      stubs: {
        'router-link': true,
      },
    });

    await wrapper.findComponent({ name: 'router-link' }).trigger('click');
    await nextTick();

    expect(mockRouter.push).toHaveBeenCalledWith('/favorite');
  });
});
