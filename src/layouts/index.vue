<script lang="ts" setup></script>

<template>
  <a-layout class="min-h-100vh home-container">
    <a-layout-header class="layout-header">
      <SvgIcon name="logo" :size="54" />
      顶部导航
    </a-layout-header>
    <a-layout class="layout-base">
      <a-layout-sider class="layout-sider"> 侧边栏 </a-layout-sider>
      <a-layout-content class="layout-content"> content内容 </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<style lang="less" scoped>
@import './index.less';
</style>
