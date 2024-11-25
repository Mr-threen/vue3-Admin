<template>
  <!-- 整体布局 -->
  <a-layout style="min-height: 100vh">
    <!-- 顶部区域 -->
    <a-layout-header style="background: #001529; color: white; display: flex; align-items: center">
      <div style="font-size: 18px; color: white; font-weight: bold; margin-left: 16px">Admin Dashboard</div>
    </a-layout-header>

    <!-- 中间区域 -->
    <a-layout>
      <!-- 左侧菜单 -->
      <a-layout-sider v-model:collapsed="collapsed" collapsible width="200" style="background: #fff">
        <a-menu mode="inline" :default-selected-keys="['1']" :default-open-keys="['sub1']" :items="menuItems" />
      </a-layout-sider>

      <!-- 右侧内容 -->
      <a-layout-content style="padding: 24px; background: #f0f2f5">
        <a-breadcrumb style="margin-bottom: 16px">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>Dashboard</a-breadcrumb-item>
        </a-breadcrumb>
        <div style="padding: 24px; background: white; min-height: 280px">
          <p>Content Area</p>
        </div>
      </a-layout-content>
    </a-layout>

    <!-- 底部区域 -->
    <a-layout-footer style="text-align: center; background: #f0f2f5">
      Ant Design Vue Admin ©2024 Created by You
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
export default {
  name: 'LayoutIndex',
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'
const collapsed = ref<boolean>(false)

// 模拟菜单项数据
const menuItems = [
  {
    key: '1',
    icon: '',
    label: 'Option 1',
  },
  {
    key: '2',
    icon: '',
    label: 'Option 2',
    children: [
      {
        key: '21',
        label: 'Sub Option 1',
      },
      {
        key: '22',
        label: 'Sub Option 2',
      },
    ],
  },
  {
    key: '3',
    icon: '',
    label: 'Option 3',
  },
]
</script>

<style scoped>
/* 顶部标题和内容居中样式 */
a-layout-header {
  font-size: 16px;
}
</style>
