<template>
  <div class="max-w-5xl mx-auto px-6 py-20">
    <div class="max-w-2xl mb-16">
      <p class="text-sm font-medium text-blue-600 tracking-widest uppercase mb-3">Blog</p>
      <h1 class="text-4xl font-bold text-slate-900 mb-6">Writing</h1>
      <p class="text-lg text-slate-500 leading-relaxed">
        Thoughts on software engineering, Python, frontend architecture, and the craft of building reliable systems. Coming soon.
      </p>
    </div>

    <!-- Empty state -->
    <div class="border border-dashed border-slate-200 rounded-2xl py-24 flex flex-col items-center justify-center text-center">
      <Icon name="lucide:pen-line" size="40" class="text-slate-300 mb-4" />
      <h2 class="text-lg font-medium text-slate-900 mb-2">No posts yet</h2>
      <p class="text-sm text-slate-400 max-w-xs">
        Articles are being drafted. Check back soon, or subscribe via email to be notified when the first post goes live.
      </p>
      <NuxtLink to="/contact" class="mt-6 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
        Get notified →
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: 'Blog — Stefan Jeremic' })
</script>
