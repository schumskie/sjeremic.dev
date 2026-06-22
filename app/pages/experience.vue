<script setup lang="ts">
const { t, tm, rt } = useI18n()
useSeoMeta({ title: computed(() => `${t('nav.experience')} — Stefan Jeremic`) })

interface Job {
  title: string
  company: string
  client: string | null
  period: string
  bullets: string[]
  tags: string[]
}

interface Award {
  place: string
  name: string
}

const jobs = computed<Job[]>(() =>
  (tm('experience.jobs') as any[]).map((job: any) => ({
    title: rt(job.title),
    company: rt(job.company),
    client: job.client ? rt(job.client) : null,
    period: rt(job.period),
    bullets: (job.bullets as any[]).map((b: any) => rt(b)),
    tags: (job.tags as any[]).map((tag: any) => rt(tag)),
  }))
)

const awards = computed<Award[]>(() =>
  (tm('experience.awardsList') as any[]).map((a: any) => ({
    place: rt(a.place),
    name: rt(a.name),
  }))
)

const awardBadge = (i: number) => i < 2
  ? { badgeClass: 'bg-yellow-50', iconClass: 'text-yellow-500' }
  : { badgeClass: 'bg-slate-100', iconClass: 'text-slate-400' }
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-20">
    <div class="max-w-2xl mb-16">
      <p class="text-sm font-medium text-blue-600 tracking-widest uppercase mb-3">{{ t('experience.badge') }}</p>
      <h1 class="text-4xl font-bold text-slate-900 mb-6">{{ t('experience.title') }}</h1>
      <p class="text-lg text-slate-500 leading-relaxed">{{ t('experience.subtitle') }}</p>
    </div>

    <!-- Timeline -->
    <div class="relative">
      <div class="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-slate-200" />

      <div class="space-y-12">
        <JobCard
          v-for="(job, i) in jobs"
          :key="i"
          v-bind="job"
        />
      </div>
    </div>

    <!-- Education -->
    <div class="mt-20 pt-16 border-t border-slate-100">
      <h2 class="text-2xl font-bold text-slate-900 mb-8">{{ t('experience.education.title') }}</h2>
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
          <Icon name="lucide:graduation-cap" size="20" class="text-slate-500" />
        </div>
        <div>
          <h3 class="font-semibold text-slate-900">{{ t('experience.education.degree') }}</h3>
          <p class="text-slate-500 text-sm">{{ t('experience.education.school') }}</p>
        </div>
      </div>
    </div>

    <!-- Awards -->
    <div class="mt-16 pt-16 border-t border-slate-100">
      <h2 class="text-2xl font-bold text-slate-900 mb-8">{{ t('experience.awards.title') }}</h2>
      <div class="space-y-4">
        <div
          v-for="(award, i) in awards"
          :key="i"
          class="flex items-start gap-4"
        >
          <div class="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" :class="awardBadge(i).badgeClass">
            <Icon name="lucide:trophy" size="18" :class="awardBadge(i).iconClass" />
          </div>
          <div>
            <p class="font-semibold text-slate-900">{{ award.place }}</p>
            <p class="text-sm text-slate-500">{{ award.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
