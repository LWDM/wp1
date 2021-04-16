
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashBoard.vue') },
      { path: '/tt_book', component: () => import('pages/tt_book.vue') },
      { path: '/tt_book/:id', component: () => import('pages/store.vue') },
      { path: '/tt_book/tableStore', component: () => import('src/components/tableStore.vue') },
      { path: '/users', component: () => import('pages/users.vue') },
      { path: '/reg', component: () => import('pages/registration.vue') },
      { path: '/login', component: () => import('pages/login.vue') },
      { path: '/detail', component: () => import('pages/tt_detail.vue') },
      { path: '/serviceDesk', component: () => import('pages/serviceDesk.vue') },
      { path: '/test', component: () => import('../components/test.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
