<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
useSeoMeta({ title: computed(() => `${t('nav.blog')} — Stefan Jeremic`) })
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-20">
    <div class="max-w-2xl mb-16">
      <p class="text-sm font-medium text-blue-600 tracking-widest uppercase mb-3">{{ t('blog.badge') }}</p>
      <h1 class="text-4xl font-bold text-slate-900 mb-6">{{ t('blog.title') }}</h1>
      <p class="text-lg text-slate-500 leading-relaxed">{{ t('blog.subtitle') }}</p>
    </div>

    <div class="border border-dashed border-slate-200 rounded-2xl py-24 flex flex-col items-center justify-center text-center">
      <Icon name="lucide:pen-line" size="40" class="text-slate-300 mb-4" />
      <h2 class="text-lg font-medium text-slate-900 mb-2">{{ t('blog.emptyTitle') }}</h2>
      <p class="text-sm text-slate-400 max-w-xs">{{ t('blog.emptyText') }}</p>
      <NuxtLink :to="localePath('/contact')" class="mt-6 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
        {{ t('blog.emptyLink') }} →
      </NuxtLink>
    </div>
  </div>
</template>
