<script setup lang="ts">
const links = [
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const menuOpen = ref(false)
const route = useRoute()
watch(() => route.path, () => { menuOpen.value = false })
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
    <nav class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <NuxtLink to="/" class="font-semibold text-slate-900 tracking-tight hover:text-blue-600 transition-colors">
        Stefan Jeremic
      </NuxtLink>

      <!-- Desktop links -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            active-class="text-slate-900 font-medium"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden p-2 text-slate-600 hover:text-slate-900"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <Icon :name="menuOpen ? 'lucide:x' : 'lucide:menu'" size="20" />
      </button>
    </nav>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="md:hidden border-t border-slate-100 bg-white">
      <ul class="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="block text-sm text-slate-600 hover:text-slate-900 transition-colors py-1"
            active-class="text-slate-900 font-medium"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>
