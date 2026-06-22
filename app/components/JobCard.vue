<script setup lang="ts">
defineProps<{
  title: string
  company: string
  client: string | null
  period: string
  bullets: string[]
  tags: string[]
}>()
</script>

<template>
  <article class="relative pl-14 md:pl-20">
    <div class="absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full bg-blue-600 border-2 border-white shadow-sm" />

    <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
      <div>
        <h2 class="text-lg font-semibold text-slate-900">{{ title }}</h2>
        <p class="text-slate-500 text-sm">
          {{ company }}
          <span v-if="client" class="text-slate-400"> · <em>{{ client }}</em></span>
        </p>
      </div>
      <span class="text-sm text-slate-400 font-mono shrink-0">{{ period }}</span>
    </div>

    <ul class="space-y-2">
      <li
        v-for="(bullet, j) in bullets"
        :key="j"
        class="flex items-start gap-3 text-sm text-slate-600 leading-relaxed"
      >
        <Icon name="lucide:chevron-right" size="14" class="text-slate-300 mt-1 shrink-0" />
        {{ bullet }}
      </li>
    </ul>

    <div class="flex flex-wrap gap-2 mt-4">
      <span
        v-for="tag in tags"
        :key="tag"
        class="px-2.5 py-0.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-500"
      >
        {{ tag }}
      </span>
    </div>
  </article>
</template>
