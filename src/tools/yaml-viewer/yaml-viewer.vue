<script setup lang="ts">
import yaml from 'yaml';
import { useStorage } from '@vueuse/core';
import { formatYaml } from './yaml-models';
import { withDefaultOnError } from '@/utils/defaults';
import { useValidation } from '@/composable/validation';
import TextareaCopyable from '@/components/TextareaCopyable.vue';

const inputElement = ref<HTMLElement>();

const rawYaml = useStorage('yaml-prettify:raw-yaml', '');
const indentSize = useStorage('yaml-prettify:indent-size', 2);
const sortKeys = useStorage('yaml-prettify:sort-keys', false);

const cleanYaml = computed(() => withDefaultOnError(() => formatYaml({ rawYaml, indentSize, sortKeys }), ''));

const rawYamlValidation = useValidation({
  source: rawYaml,
  rules: [
    {
      validator: v => v === '' || yaml.parse(v),
      message: '提供的YAML无效。',
    },
  ],
});
</script>

<template>
  <div style="flex: 0 0 100%">
    <div style="margin: 0 auto; max-width: 600px" flex justify-center gap-3>
      <n-form-item label="排序键:" label-placement="left" label-width="100">
        <n-switch v-model:value="sortKeys" />
      </n-form-item>
      <n-form-item label="缩进大小:" label-placement="left" label-width="100" :show-feedback="false">
        <n-input-number v-model:value="indentSize" min="1" max="10" style="width: 100px" />
      </n-form-item>
    </div>
  </div>

  <n-form-item
    label="你的原始YAML"
    :feedback="rawYamlValidation.message"
    :validation-status="rawYamlValidation.status"
  >
    <c-input-text
      ref="inputElement"
      v-model:value="rawYaml"
      placeholder="将您的原始YAML粘贴到此处。。。"
      rows="20"
      multiline
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
      monospace
    />
  </n-form-item>
  <n-form-item label="您的YAML的优化版本">
    <TextareaCopyable :value="cleanYaml" language="yaml" :follow-height-of="inputElement" />
  </n-form-item>
</template>

<style lang="less" scoped>
.result-card {
  position: relative;
  .copy-button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
