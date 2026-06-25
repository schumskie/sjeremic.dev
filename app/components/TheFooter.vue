<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <footer class="border-t border-slate-100 py-8 mt-24">
    <div class="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
      <span>© {{ new Date().getFullYear() }} {{ t('footer.rights') }}</span>
      <div class="flex items-center gap-6">
        <a href="https://linkedin.com/in/stefan-jeremic" target="_blank" rel="noopener" class="hover:text-slate-700 transition-colors">LinkedIn</a>
        <a href="https://github.com/schumskie" target="_blank" rel="noopener" class="hover:text-slate-700 transition-colors">GitHub</a>
        <a href="mailto:sjeremic91@gmail.com" class="hover:text-slate-700 transition-colors">Email</a>
      </div>
    </div>
  </footer>
</template>
