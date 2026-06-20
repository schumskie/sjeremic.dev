<template>
  <!-- Hero -->
  <section class="max-w-5xl mx-auto px-6 pt-24 pb-20">
    <div class="max-w-2xl">
      <p class="text-sm font-medium text-blue-600 tracking-widest uppercase mb-4">Available for new opportunities</p>
      <h1 class="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
        Stefan<br />Jeremic
      </h1>
      <p class="text-xl text-slate-500 leading-relaxed mb-8">
        Senior Software Engineer with 10+ years of experience building scalable web platforms.
        Specializing in Python backends and Vue.js/Nuxt.js frontends — focused on <em>product companies</em> where engineering directly drives business outcomes.
      </p>
      <div class="flex flex-wrap gap-4">
        <NuxtLink to="/contact" class="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors">
          Get in touch
          <Icon name="lucide:arrow-right" size="16" />
        </NuxtLink>
        <NuxtLink to="/experience" class="inline-flex items-center gap-2 border border-slate-200 text-slate-700 px-6 py-3 rounded-lg text-sm font-medium hover:border-slate-400 transition-colors">
          View experience
        </NuxtLink>
        <a
          href="/cv-stefan-jeremic.pdf"
          download
          class="inline-flex items-center gap-2 border border-slate-200 text-slate-700 px-6 py-3 rounded-lg text-sm font-medium hover:border-slate-400 transition-colors"
        >
          <Icon name="lucide:download" size="16" />
          Download CV
        </a>
      </div>
    </div>
  </section>

  <!-- Quick stats -->
  <section class="border-y border-slate-100 bg-slate-50">
    <div class="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
      <div>
        <p class="text-3xl font-bold text-slate-900">10+</p>
        <p class="text-sm text-slate-500 mt-1">Years of experience</p>
      </div>
      <div>
        <p class="text-3xl font-bold text-slate-900">3</p>
        <p class="text-sm text-slate-500 mt-1">Hackathon awards</p>
      </div>
      <div>
        <p class="text-3xl font-bold text-slate-900">4</p>
        <p class="text-sm text-slate-500 mt-1">Companies</p>
      </div>
      <div>
        <p class="text-3xl font-bold text-slate-900">Full</p>
        <p class="text-sm text-slate-500 mt-1">Stack coverage</p>
      </div>
    </div>
  </section>

  <!-- Brief about -->
  <section class="max-w-5xl mx-auto px-6 py-20">
    <div class="grid md:grid-cols-2 gap-16 items-start">
      <div>
        <h2 class="text-2xl font-bold text-slate-900 mb-4">About me</h2>
        <p class="text-slate-600 leading-relaxed mb-4">
          I'm a full-stack engineer who leans heavily on the backend side. I write production Python daily — Flask, FastAPI, SQLAlchemy — and I've shipped significant frontend work in Vue.js and Nuxt.js across e-commerce, betting, and lead-generation platforms.
        </p>
        <p class="text-slate-600 leading-relaxed mb-6">
          I care about code quality, automated testing, and practical problem-solving. I use AI-assisted tools like Cursor and GitHub Copilot not as shortcuts but as force multipliers for delivery without compromising quality.
        </p>
        <NuxtLink to="/about" class="text-sm font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 transition-colors">
          Read more about me <Icon name="lucide:arrow-right" size="14" />
        </NuxtLink>
      </div>

      <!-- Photo placeholder -->
      <div class="flex flex-col items-center gap-4">
        <div class="w-64 h-64 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400">
          <Icon name="lucide:user" size="48" />
          <p class="text-xs mt-3 text-center px-4">Photo placeholder<br /><span class="text-slate-300">Recommended: 512×512px, square, .webp</span></p>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills preview -->
  <section class="bg-slate-50 border-y border-slate-100">
    <div class="max-w-5xl mx-auto px-6 py-20">
      <h2 class="text-2xl font-bold text-slate-900 mb-10">Core technologies</h2>
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
    <h2 class="text-3xl font-bold text-slate-900 mb-4">Looking for a senior engineer?</h2>
    <p class="text-slate-500 mb-8 max-w-xl mx-auto">
      I'm open to senior individual contributor and lead roles at product companies. Let's talk about what you're building.
    </p>
    <NuxtLink to="/contact" class="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
      Start a conversation
      <Icon name="lucide:arrow-right" size="16" />
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
const skillGroups = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { label: 'Backend', items: ['Flask', 'FastAPI', 'SQLAlchemy', 'Celery', 'RESTful APIs'] },
  { label: 'Frontend', items: ['Vue.js', 'Nuxt.js', 'React'] },
  { label: 'Databases', items: ['PostgreSQL', 'MySQL', 'Redis', 'GCP Datastore'] },
  { label: 'Cloud & DevOps', items: ['GCP', 'Docker', 'GitHub Actions', 'GitLab CI'] },
  { label: 'Tools', items: ['Splunk', 'Sentry', 'Cursor', 'GitHub Copilot'] },
]
</script>
