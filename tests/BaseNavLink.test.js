import BaseNavLink from '../src/components/BaseNavLink.vue';
// import { createRouter, createMemoryHistory } from 'vue-router';
// import HomeView from '../src/views/HomeView.vue'
// import FavoriteView from '../src/views/FavoriteView.vue';
import { shallowMount, RouterLinkStub } from '@vue/test-utils';

describe('BaseNavLink.vue', () => {
  // const router = createRouter({
  //   history: createMemoryHistory(),
  //   routes: [
  //     {
  //       path: '/',
  //       name: 'home',
  //       component: HomeView
  //     },
  //     {
  //       path: '/',
  //       name: 'home',
  //       component: FavoriteView
  //     },
  //   ],
  // });

  const LINK_ITEM = {
    href: '/',
    label: 'Home'
  }
  const wrapper = shallowMount(BaseNavLink, {
    global: {
      stubs: {
        'router-link': RouterLinkStub,
      }
    },
    props: {
      link: LINK_ITEM
    }
  });

  test('renders a router-link component whith correct props', () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.text()).toContain(LINK_ITEM.label);
  });
});
