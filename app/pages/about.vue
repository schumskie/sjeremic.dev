<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
useSeoMeta({ title: computed(() => `${t('nav.about')} — Stefan Jeremic`) })
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-20">
    <!-- Header -->
    <div class="max-w-2xl mb-16">
      <p class="text-sm font-medium text-blue-600 tracking-widest uppercase mb-3">{{ t('about.badge') }}</p>
      <h1 class="text-4xl font-bold text-slate-900 mb-6">{{ t('about.title') }}</h1>
      <p class="text-lg text-slate-500 leading-relaxed">{{ t('about.subtitle') }}</p>
    </div>

    <div class="grid md:grid-cols-3 gap-16">
      <!-- Main content -->
      <div class="md:col-span-2 space-y-10">

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-4">{{ t('about.background.title') }}</h2>
          <div class="space-y-4 text-slate-600 leading-relaxed">
            <p>{{ t('about.background.p1') }}</p>
            <p>{{ t('about.background.p2') }}</p>
            <p>{{ t('about.background.p3') }}</p>
          </div>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-4">{{ t('about.approach.title') }}</h2>
          <div class="space-y-4 text-slate-600 leading-relaxed">
            <p>{{ t('about.approach.p1') }}</p>
            <p>{{ t('about.approach.p2') }}</p>
            <p>{{ t('about.approach.p3') }}</p>
          </div>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-4">{{ t('about.looking.title') }}</h2>
          <div class="space-y-4 text-slate-600 leading-relaxed">
            <p>{{ t('about.looking.p1') }}</p>
            <p>{{ t('about.looking.p2') }}</p>
            <p>{{ t('about.looking.p3') }}</p>
          </div>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-4">{{ t('about.education.title') }}</h2>
          <p class="text-slate-600">{{ t('about.education.text') }}</p>
        </section>
      </div>

      <!-- Sidebar -->
      <div class="space-y-10">
        <!-- Photo -->
        <img
          src="/me.jpg"
          alt="Stefan Jeremic"
          class="w-full aspect-square rounded-2xl object-cover object-top shadow-sm"
        />

        <!-- Quick facts -->
        <div>
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">{{ t('about.sidebar.quickFacts') }}</p>
          <ul class="space-y-3">
            <li class="flex items-start gap-3 text-sm">
              <Icon name="lucide:map-pin" size="16" class="text-slate-400 mt-0.5 shrink-0" />
              <span class="text-slate-600">{{ t('about.sidebar.location') }}</span>
            </li>
            <li class="flex items-start gap-3 text-sm">
              <Icon name="lucide:briefcase" size="16" class="text-slate-400 mt-0.5 shrink-0" />
              <span class="text-slate-600">{{ t('about.sidebar.years') }}</span>
            </li>
            <li class="flex items-start gap-3 text-sm">
              <Icon name="lucide:code-2" size="16" class="text-slate-400 mt-0.5 shrink-0" />
              <span class="text-slate-600">{{ t('about.sidebar.skills') }}</span>
            </li>
            <li class="flex items-start gap-3 text-sm">
              <Icon name="lucide:mail" size="16" class="text-slate-400 mt-0.5 shrink-0" />
              <a href="mailto:sjeremic91@gmail.com" class="text-blue-600 hover:underline">sjeremic91@gmail.com</a>
            </li>
          </ul>
        </div>

        <!-- CV download -->
        <a
          href="/cv-stefan-jeremic.pdf"
          download
          class="flex items-center gap-2 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors"
        >
          <Icon name="lucide:download" size="16" class="text-slate-400" />
          {{ t('common.downloadCv') }}
        </a>
      </div>
    </div>
  </div>
</template>
