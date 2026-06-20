<script setup lang="ts">
const { t, locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()

const links = computed(() => [
  { label: t('nav.about'), to: localePath('/about') },
  { label: t('nav.experience'), to: localePath('/experience') },
  { label: t('nav.projects'), to: localePath('/projects') },
  { label: t('nav.blog'), to: localePath('/blog') },
  { label: t('nav.contact'), to: localePath('/contact') },
])

const otherLocale = computed(() => locales.value.find(l => l.code !== locale.value))

const menuOpen = ref(false)
const route = useRoute()
watch(() => route.path, () => { menuOpen.value = false })
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
    <nav class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <NuxtLink :to="localePath('/')" class="font-semibold text-slate-900 tracking-tight hover:text-blue-600 transition-colors">
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
        <!-- Language switcher -->
        <li>
          <button
            class="text-xs font-medium text-slate-400 hover:text-slate-700 border border-slate-200 rounded px-2 py-1 transition-colors"
            @click="setLocale(otherLocale!.code as 'en' | 'sr')"
          >
            {{ otherLocale?.code.toUpperCase() }}
          </button>
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
        <li class="pt-2 border-t border-slate-100">
          <button
            class="text-xs font-medium text-slate-400 hover:text-slate-700 border border-slate-200 rounded px-2 py-1 transition-colors"
            @click="setLocale(otherLocale!.code as 'en' | 'sr')"
          >
            {{ otherLocale?.name }}
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>
