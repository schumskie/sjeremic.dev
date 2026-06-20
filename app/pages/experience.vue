<template>
  <div class="max-w-5xl mx-auto px-6 py-20">
    <div class="max-w-2xl mb-16">
      <p class="text-sm font-medium text-blue-600 tracking-widest uppercase mb-3">Experience</p>
      <h1 class="text-4xl font-bold text-slate-900 mb-6">Work history</h1>
      <p class="text-lg text-slate-500 leading-relaxed">
        10+ years across e-commerce, betting, and lead-generation platforms. Mostly backend, always full-stack capable.
      </p>
    </div>

    <!-- Timeline -->
    <div class="relative">
      <!-- Vertical line -->
      <div class="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-slate-200" />

      <div class="space-y-12">
        <article
          v-for="(job, i) in experience"
          :key="i"
          class="relative pl-14 md:pl-20"
        >
          <!-- Dot -->
          <div class="absolute left-2.5 md:left-6 top-1.5 w-3 h-3 rounded-full bg-blue-600 border-2 border-white shadow-sm" />

          <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
            <div>
              <h2 class="text-lg font-semibold text-slate-900">{{ job.title }}</h2>
              <p class="text-slate-500 text-sm">
                {{ job.company }}
                <span v-if="job.client" class="text-slate-400"> · <em>{{ job.client }}</em></span>
              </p>
            </div>
            <span class="text-sm text-slate-400 font-mono shrink-0">{{ job.period }}</span>
          </div>

          <ul class="space-y-2">
            <li
              v-for="(bullet, j) in job.bullets"
              :key="j"
              class="flex items-start gap-3 text-sm text-slate-600 leading-relaxed"
            >
              <Icon name="lucide:chevron-right" size="14" class="text-slate-300 mt-1 shrink-0" />
              {{ bullet }}
            </li>
          </ul>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mt-4">
            <span
              v-for="tag in job.tags"
              :key="tag"
              class="px-2.5 py-0.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-500"
            >
              {{ tag }}
            </span>
          </div>
        </article>
      </div>
    </div>

    <!-- Education -->
    <div class="mt-20 pt-16 border-t border-slate-100">
      <h2 class="text-2xl font-bold text-slate-900 mb-8">Education</h2>
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
          <Icon name="lucide:graduation-cap" size="20" class="text-slate-500" />
        </div>
        <div>
          <h3 class="font-semibold text-slate-900">Bachelor of Computer Science</h3>
          <p class="text-slate-500 text-sm">School of Computing · Belgrade, Serbia · 2014</p>
        </div>
      </div>
    </div>

    <!-- Awards -->
    <div class="mt-16 pt-16 border-t border-slate-100">
      <h2 class="text-2xl font-bold text-slate-900 mb-8">Hackathon Awards</h2>
      <div class="space-y-4">
        <div v-for="award in awards" :key="award.name" class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" :class="award.badgeClass">
            <Icon name="lucide:trophy" size="18" :class="award.iconClass" />
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

<script setup lang="ts">
useSeoMeta({ title: 'Experience — Stefan Jeremic' })

const experience = [
  {
    title: 'Senior Backend Developer',
    company: 'BlueGrid',
    client: 'Client: Recharge (getrecharge.com)',
    period: '2021 – 2026',
    bullets: [
      'Developed an AI-powered internal tool using Flask and Google Gemini API for merchant sentiment analysis, including automated categorization and cross-source data integrity checks.',
      'Engineered custom Python code parsers to automate a massive refactor — reducing a multi-month manual task to just one week.',
      'Maintained the core codebase, implementing complex features and resolving hard-to-replicate production bugs to ensure platform stability.',
      'Mentored junior developers and advocated for best practices in automated testing and code quality.',
    ],
    tags: ['Python', 'Flask', 'Google Gemini API', 'SQLAlchemy', 'PostgreSQL', 'GCP', 'Pytest'],
  },
  {
    title: 'Senior Full-Stack Developer',
    company: 'Factory World Wide',
    client: null,
    period: '2018 – 2021',
    bullets: [
      'Developed high-performance betting games and software — 70% frontend (Vue.js, Nuxt.js) and 30% backend (Python).',
      'Managed and mentored a growing engineering team, playing a key role in scaling the company from 10 to ~30 employees.',
      'Led delivery of critical client projects that supported the company\'s rapid market expansion.',
    ],
    tags: ['Vue.js', 'Nuxt.js', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Senior Full-Stack Developer',
    company: 'White City Soft',
    client: null,
    period: 'Jun 2018 – Dec 2018',
    bullets: [
      'Delivered full-stack features for a free travel-guide platform built for lead generation.',
      'Quickly ramped up on an unfamiliar AngularJS/Laravel codebase to deliver assigned features on schedule.',
    ],
    tags: ['AngularJS', 'Laravel', 'PHP', 'JavaScript'],
  },
  {
    title: 'Full-Stack Developer',
    company: 'MM Studio',
    client: null,
    period: '2016 – 2018',
    bullets: [
      'Architected and deployed web applications using Laravel, jQuery, and Vue.js in a fast-paced agency environment.',
      'Managed full-cycle development for multiple medium-sized projects, ensuring seamless integration between frontend and backend.',
    ],
    tags: ['Laravel', 'PHP', 'Vue.js', 'jQuery', 'MySQL'],
  },
]

const awards = [
  {
    place: '1st Place',
    name: 'Booking.com Hackathon (via HackerRank)',
    badgeClass: 'bg-yellow-50',
    iconClass: 'text-yellow-500',
  },
  {
    place: '1st Place',
    name: 'AISEC Hackathon · Faculty of Organizational Sciences, Belgrade',
    badgeClass: 'bg-yellow-50',
    iconClass: 'text-yellow-500',
  },
  {
    place: '3rd Place',
    name: 'National High School Algorithmic Competition (Republic Level)',
    badgeClass: 'bg-slate-100',
    iconClass: 'text-slate-400',
  },
]
</script>
