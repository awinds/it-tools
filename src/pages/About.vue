<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({ title: '关于 - 蜜蜂工具' });
</script>

<template>
  <c-markdown :markdown="$t('about.content')" mx-auto mt-50px max-w-600px />
</template>
