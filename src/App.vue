<!-- <script setup lang="ts">
import 'dayjs/locale/zh-cn'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { RouterView } from 'vue-router'

import { themeConfig } from './config/theme'
</script>

<template>
  <a-config-provider
    :locale="zhCN"
    :theme="{
      token: themeConfig.default,
    }"
  >
    <RouterView />
  </a-config-provider>
</template> -->
<template>
  <a-config-provider>
    <RouterView />
  </a-config-provider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
