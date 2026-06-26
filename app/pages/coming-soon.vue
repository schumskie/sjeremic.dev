<script setup lang="ts">
const { openMail } = useEmail()
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-6 text-center">
    <p class="text-sm font-medium text-blue-600 tracking-widest uppercase mb-4">Stefan Jeremic</p>
    <h1 class="text-4xl font-bold text-slate-900 mb-4">Something is coming.</h1>
    <p class="text-slate-500 mb-10 max-w-sm">Senior Software Engineer. Portfolio launching soon.</p>
    <div class="flex items-center gap-6 text-sm text-slate-400">
      <button type="button" class="hover:text-slate-700 transition-colors" @click="openMail">Email</button>
      <a href="https://linkedin.com/in/stefan-jeremic" target="_blank" rel="noopener" class="hover:text-slate-700 transition-colors">LinkedIn</a>
      <a href="https://github.com/schumskie" target="_blank" rel="noopener" class="hover:text-slate-700 transition-colors">GitHub</a>
    </div>
  </div>
</template>
