<script setup lang="ts">
const { t, tm, rt } = useI18n()

const serviceIcons = ['lucide:globe', 'lucide:layout-dashboard', 'lucide:code-2']
const localePath = useLocalePath()

const skillGroups = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { label: 'Backend', items: ['Flask', 'FastAPI', 'SQLAlchemy', 'Celery', 'RESTful APIs'] },
  { label: 'Frontend', items: ['Vue.js', 'Nuxt.js', 'React'] },
  { label: 'Databases', items: ['PostgreSQL', 'MySQL', 'Redis', 'GCP Datastore'] },
  { label: 'Cloud & DevOps', items: ['GCP', 'Docker', 'GitHub Actions', 'GitLab CI'] },
  { label: 'Tools', items: ['Splunk', 'Sentry', 'Cursor', 'GitHub Copilot'] },
]
</script>

<template>
  <!-- Hero -->
  <section class="max-w-5xl mx-auto px-6 pt-24 pb-20">
    <div class="max-w-2xl">
      <p class="text-sm font-medium text-blue-600 tracking-widest uppercase mb-4">{{ t('home.badge') }}</p>
      <h1 class="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
        Stefan<br />Jeremic
      </h1>
      <p class="text-xl text-slate-500 leading-relaxed mb-8">{{ t('home.subtitle') }}</p>
      <div class="flex flex-wrap gap-4">
        <NuxtLink :to="localePath('/contact')" class="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors">
          {{ t('common.getInTouch') }}
          <Icon name="lucide:arrow-right" size="16" />
        </NuxtLink>
        <NuxtLink :to="localePath('/experience')" class="inline-flex items-center gap-2 border border-slate-200 text-slate-700 px-6 py-3 rounded-lg text-sm font-medium hover:border-slate-400 transition-colors">
          {{ t('common.viewExperience') }}
        </NuxtLink>
        <a
          href="/cv-stefan-jeremic.pdf"
          download
          class="inline-flex items-center gap-2 border border-slate-200 text-slate-700 px-6 py-3 rounded-lg text-sm font-medium hover:border-slate-400 transition-colors"
        >
          <Icon name="lucide:download" size="16" />
          {{ t('common.downloadCv') }}
        </a>
      </div>
    </div>
  </section>

  <!-- Services -->
  <section class="border-y border-slate-100 bg-slate-50">
    <div class="max-w-5xl mx-auto px-6 py-14">
      <p class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">{{ t('home.services.title') }}</p>
      <div class="grid sm:grid-cols-3 gap-8">
        <div
          v-for="(service, i) in (tm('home.services.items') as any[])"
          :key="i"
          class="flex flex-col gap-3"
        >
          <div class="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
            <Icon :name="serviceIcons[i]" size="16" class="text-blue-600" />
          </div>
          <h3 class="font-semibold text-slate-900">{{ rt(service.title) }}</h3>
          <p class="text-sm text-slate-500 leading-relaxed">{{ rt(service.description) }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Brief about -->
  <section class="max-w-5xl mx-auto px-6 py-20">
    <div class="grid md:grid-cols-2 gap-16 items-start">
      <div>
        <h2 class="text-2xl font-bold text-slate-900 mb-4">{{ t('home.about.title') }}</h2>
        <p class="text-slate-600 leading-relaxed mb-4">{{ t('home.about.p1') }}</p>
        <p class="text-slate-600 leading-relaxed mb-6">{{ t('home.about.p2') }}</p>
        <NuxtLink :to="localePath('/about')" class="text-sm font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 transition-colors">
          {{ t('home.about.cta') }} <Icon name="lucide:arrow-right" size="14" />
        </NuxtLink>
      </div>

      <!-- Photo -->
      <div class="flex justify-center md:justify-end">
        <img
          src="/me.jpg"
          alt="Stefan Jeremic"
          class="w-64 h-64 rounded-2xl object-cover object-top shadow-sm"
        />
      </div>
    </div>
  </section>

  <!-- Skills preview -->
  <section class="bg-slate-50 border-y border-slate-100">
    <div class="max-w-5xl mx-auto px-6 py-20">
      <h2 class="text-2xl font-bold text-slate-900 mb-10">{{ t('home.skills.title') }}</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="group in skillGroups" :key="group.label">
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">{{ group.label }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in group.items"
              :key="skill"
              class="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm text-slate-700"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="max-w-5xl mx-auto px-6 py-24 text-center">
    <h2 class="text-3xl font-bold text-slate-900 mb-4">{{ t('home.cta.title') }}</h2>
    <p class="text-slate-500 mb-8 max-w-xl mx-auto">{{ t('home.cta.subtitle') }}</p>
    <NuxtLink :to="localePath('/contact')" class="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
      {{ t('home.cta.button') }}
      <Icon name="lucide:arrow-right" size="16" />
    </NuxtLink>
  </section>
</template>
