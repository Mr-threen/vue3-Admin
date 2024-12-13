import { type RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

export const routerList: RouteRecordRaw[] = [
  // {
  //   path: '/home',
  //   name: '预警管理',
  //   meta: {
  //     icon: '',
  //     permission: '',
  //   },
  //   children: [
  //     {
  //       path: 'index',
  //       name: '预警总览',
  //       component:
  //       () => import('@/views/home/index.vue')
  //       ,
  //       meta: {
  //         permission: '',
  //         isNative: true,
  //       },
  //     },
  //     {
  //       path: 'tactics',
  //       name: '预警策略',
  //       component: () => import('@/views/home/index.vue'),
  //       meta: {
  //         permission: '',
  //         isNative: true,
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/collaborative-management',
  //   name: '协同管理',
  //   meta: {
  //     icon: '',
  //     permission: '',
  //   },
  //   children: [
  //     {
  //       path: 'pre-management',
  //       name: '前期管理协同',
  //       meta: {
  //         isNative: true,
  //         permission: '',
  //       },
  //       children: [
  //         {
  //           path: 'preliminary-progress',
  //           name: '前期进度管控',
  //           component: () => import('@/views/collaborativeManagement/index.vue'),
  //           meta: {
  //             isNative: true,
  //             permission: '',
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   path: '/data-management',
  //   name: '数据管理',
  //   meta: {
  //     icon: '',
  //     permission: '',
  //   },
  //   children: [
  //     {
  //       path: 'data-search',
  //       name: '数据查询',
  //       meta: {
  //         isNative: true,
  //         permission: '',
  //       },
  //       children: [
  //         {
  //           path: 'project-library',
  //           name: '项目库',
  //           component: () => import('@/views/dataManagement/dataSearch/projectLibrary/index.vue'),
  //           meta: {
  //             isNative: true,
  //             permission: '',
  //           },
  //         },
  //         {
  //           path: 'project-library/project-library-detail',
  //           name: '项目库详情',
  //           component: () => import('@/views/dataManagement/dataSearch/projectLibrary/detail.vue'),
  //           meta: {
  //             isNative: false,
  //             permission: '',
  //           },
  //         },
  //         {
  //           path: 'single-project',
  //           name: '单项工程库',
  //           component: () => import('@/views/home/index.vue'),
  //           meta: {
  //             isNative: true,
  //             permission: '',
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       path: 'equipment-search',
  //       name: '设备查询',
  //       meta: {
  //         isNative: true,
  //         permission: '',
  //       },
  //       children: [
  //         {
  //           path: 'video-viewing',
  //           name: '作业现场视频查看',
  //           component: () => import('@/views/home/index.vue'),
  //           meta: {
  //             isNative: true,
  //             permission: '',
  //           },
  //         },
  //         {
  //           path: 'Inspection-info',
  //           name: '无人机巡检信息',
  //           component: () => import('@/views/home/index.vue'),
  //           meta: {
  //             isNative: true,
  //             permission: '',
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   path: '/system-management',
  //   name: '系统管理',
  //   meta: {
  //     icon: '',
  //     permission: '',
  //   },
  //   children: [
  //     {
  //       path: 'basics-feature',
  //       name: '基础功能',
  //       meta: {
  //         isNative: true,
  //         permission: '',
  //       },
  //       children: [
  //         {
  //           path: 'role-management',
  //           name: '角色管理',
  //           component: () => import('@/views/systemSettings/roleManagement/index.vue'),
  //           meta: {
  //             isNative: true,
  //             permission: '',
  //           },
  //         },
  //         {
  //           path: 'user-management',
  //           name: '组织管理',
  //           component: () => import('@/views/systemSettings/organizationManagement/index.vue'),
  //           meta: {
  //             isNative: true,
  //             permission: '',
  //           },
  //         },
  //         {
  //           path: 'dictionary-management',
  //           name: '字典管理',
  //           component: () => import('@/views/systemSettings/dictionaryManage/index.vue'),
  //           meta: {
  //             isNative: true,
  //             permission: '',
  //           },
  //         },
  //         {
  //           path: 'system-log',
  //           name: '系统日志',
  //           component: () => import('@/views/systemSettings/systemLog/index.vue'),
  //           meta: {
  //             isNative: true,
  //             permission: '',
  //           },
  //         },
  //         {
  //           path: 'menu-management',
  //           name: '菜单管理',
  //           component: () => import('@/views/systemSettings/menuManage/index.vue'),
  //           meta: {
  //             isNative: true,
  //             permission: '',
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home/index',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue'),
    },
    {
      path: '/layout',
      component: () => import('@/layouts/index.vue'),
      name: 'vue3-Admin',
      meta: {
        isNative: true,
      },
      children: routerList,
    },
    {
      path: '/401',
      name: '401',
      component: () => import('@/views/commonError/401.vue'),
    },
    {
      path: '/403',
      name: '403',
      component: () => import('@/views/commonError/403.vue'),
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/commonError/404.vue'),
    },
    {
      path: '/500',
      name: '500',
      component: () => import('@/views/commonError/500.vue'),
    },
    {
      path: '/502',
      name: '502',
      component: () => import('@/views/commonError/502.vue'),
    },
    {
      path: '/600',
      name: '600',
      component: () => import('@/views/commonError/600.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('@/views/commonError/404.vue'),
    },
  ],
})

export default router
