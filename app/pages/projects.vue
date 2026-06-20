<template>
  <div class="max-w-5xl mx-auto px-6 py-20">
    <div class="max-w-2xl mb-16">
      <p class="text-sm font-medium text-blue-600 tracking-widest uppercase mb-3">Projects</p>
      <h1 class="text-4xl font-bold text-slate-900 mb-6">Case studies</h1>
      <p class="text-lg text-slate-500 leading-relaxed">
        Selected commercial projects — focused on the problem, the solution, and the measurable outcome. Details are kept high-level to respect NDAs.
      </p>
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
            <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Problem</h3>
            <p class="text-slate-600 leading-relaxed">{{ project.problem }}</p>
          </div>

          <div>
            <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Solution</h3>
            <p class="text-slate-600 leading-relaxed">{{ project.solution }}</p>
          </div>

          <div>
            <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Result</h3>
            <p class="text-slate-600 leading-relaxed">{{ project.result }}</p>
          </div>
        </div>

        <div class="md:col-span-2 space-y-6">
          <!-- Placeholder image -->
          <div class="aspect-video rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-300">
            <Icon name="lucide:layers" size="36" />
          </div>

          <!-- Tech stack -->
          <div>
            <p class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Stack</p>
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

<script setup lang="ts">
useSeoMeta({ title: 'Projects — Stefan Jeremic' })

const projects = [
  {
    title: 'AI-Powered Merchant Sentiment Analysis Tool',
    company: 'BlueGrid / Recharge',
    year: '2023–2024',
    problem: 'The merchant support team was manually sifting through thousands of merchant feedback signals across multiple data sources, with no unified view and no way to detect sentiment trends at scale.',
    solution: 'Built an internal Flask application integrating the Google Gemini API to automatically classify and summarize merchant sentiment. Implemented cross-source data integrity checks and automated categorization pipelines, with a clean internal UI for the support team.',
    result: 'Transformed a manual, error-prone review process into an automated workflow. The team gained actionable insights in hours instead of days, enabling faster and more targeted merchant interventions.',
    tags: ['Python', 'Flask', 'Google Gemini API', 'SQLAlchemy', 'PostgreSQL'],
  },
  {
    title: 'Automated Codebase Refactor via Custom Python Parsers',
    company: 'BlueGrid / Recharge',
    year: '2022',
    problem: 'A large-scale structural refactor was estimated to take the entire engineering team several months of tedious, error-prone manual work with high risk of introducing regressions.',
    solution: 'Built custom Python AST-based code parsers and transformation scripts that could automatically traverse, analyze, and rewrite the affected codebase patterns. Developed the tooling iteratively with test coverage to validate each transformation step.',
    result: 'Reduced a multi-month manual effort to a single week. Zero regressions introduced. The approach became a template for subsequent refactor tasks on the same codebase.',
    tags: ['Python', 'AST parsing', 'Code automation', 'Pytest'],
  },
  {
    title: 'Real-Time Betting Game Platform',
    company: 'Factory World Wide',
    year: '2018–2021',
    problem: 'Multiple betting clients needed custom, high-performance game UIs with real-time state sync, complex animation requirements, and tight latency constraints under high concurrent user load.',
    solution: 'Architected and delivered a series of betting game applications using Nuxt.js on the frontend for SSR performance and Vue.js for reactive real-time UI. Python backend services handled game logic, state management, and integrations with third-party providers.',
    result: 'Delivered several game titles on schedule that became core revenue drivers for clients. The frontend architecture established a reusable pattern adopted across multiple subsequent projects.',
    tags: ['Vue.js', 'Nuxt.js', 'Python', 'WebSockets', 'TypeScript'],
  },
]
</script>
