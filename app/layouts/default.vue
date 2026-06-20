<template>
  <div class="min-h-screen flex flex-col bg-white text-slate-900">
    <TheNav />
    <main class="flex-1">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
