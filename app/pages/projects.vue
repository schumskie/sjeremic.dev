<script setup lang="ts">
const { t, tm, rt } = useI18n()
useSeoMeta({ title: computed(() => `${t('nav.projects')} — Stefan Jeremic`) })

interface Project {
  title: string
  company: string
  year: string
  problem: string
  solution: string
  result: string
  tags: string[]
}

const projects = computed<Project[]>(() =>
  (tm('projects.items') as any[]).map((p: any) => ({
    title: rt(p.title),
    company: rt(p.company),
    year: rt(p.year),
    problem: rt(p.problem),
    solution: rt(p.solution),
    result: rt(p.result),
    tags: (p.tags as any[]).map((tag: any) => rt(tag)),
  }))
)
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-20">
    <div class="max-w-2xl mb-16">
      <p class="text-sm font-medium text-blue-600 tracking-widest uppercase mb-3">{{ t('projects.badge') }}</p>
      <h1 class="text-4xl font-bold text-slate-900 mb-6">{{ t('projects.title') }}</h1>
      <p class="text-lg text-slate-500 leading-relaxed">{{ t('projects.subtitle') }}</p>
    </div>

    <div class="space-y-16">
      <article
        v-for="(project, i) in projects"
        :key="i"
        class="grid md:grid-cols-5 gap-10 pb-16 border-b border-slate-100 last:border-0"
      >
        <div class="md:col-span-3 space-y-6">
          <div>
            <span class="text-xs font-semibold text-slate-400 uppercase tracking-widest">{{ project.company }} · {{ project.year }}</span>
            <h2 class="text-2xl font-bold text-slate-900 mt-2">{{ project.title }}</h2>
          </div>

          <div>
            <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">{{ t('projects.labels.problem') }}</h3>
            <p class="text-slate-600 leading-relaxed">{{ project.problem }}</p>
          </div>

          <div>
            <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">{{ t('projects.labels.solution') }}</h3>
            <p class="text-slate-600 leading-relaxed">{{ project.solution }}</p>
          </div>

          <div>
            <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">{{ t('projects.labels.result') }}</h3>
            <p class="text-slate-600 leading-relaxed">{{ project.result }}</p>
          </div>
        </div>

        <div class="md:col-span-2 space-y-6">
          <div class="aspect-video rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-300">
            <Icon name="lucide:layers" size="36" />
          </div>

          <div>
            <p class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">{{ t('projects.labels.stack') }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded text-xs text-slate-600"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
