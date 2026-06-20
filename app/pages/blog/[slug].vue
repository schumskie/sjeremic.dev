<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
useSeoMeta({ title: computed(() => `${route.params.slug} — Stefan Jeremic`) })
</script>

<template>
  <div class="max-w-3xl mx-auto px-6 py-20">
    <NuxtLink :to="localePath('/blog')" class="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-700 transition-colors mb-12">
      <Icon name="lucide:arrow-left" size="14" />
      {{ t('common.backToBlog') }}
    </NuxtLink>

    <div class="text-center py-20">
      <Icon name="lucide:file-question" size="48" class="text-slate-300 mx-auto mb-4" />
      <h1 class="text-2xl font-bold text-slate-900 mb-2">{{ t('blog.notFound.title') }}</h1>
      <p class="text-slate-500 mb-6">{{ t('blog.notFound.text') }}</p>
      <NuxtLink :to="localePath('/blog')" class="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
        {{ t('common.viewAllPosts') }}
      </NuxtLink>
    </div>
  </div>
</template>
