<template>
  <div class="max-w-5xl mx-auto px-6 py-20">
    <!-- Header -->
    <div class="max-w-2xl mb-16">
      <p class="text-sm font-medium text-blue-600 tracking-widest uppercase mb-3">About</p>
      <h1 class="text-4xl font-bold text-slate-900 mb-6">Who I am and how I work</h1>
      <p class="text-lg text-slate-500 leading-relaxed">
        Full-stack engineer with a backend focus, based in Belgrade, Serbia. I've spent over a decade building and maintaining production systems across diverse domains.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-16">
      <!-- Main content -->
      <div class="md:col-span-2 space-y-10">

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-4">Background</h2>
          <div class="space-y-4 text-slate-600 leading-relaxed">
            <p>
              I started my career in a fast-moving agency environment where shipping quickly and adapting to different stacks was the default. That foundation taught me to ramp up fast on unfamiliar codebases — a skill I've leaned on throughout my career.
            </p>
            <p>
              Over the years I've worked across e-commerce, sports betting, and lead-generation platforms. My longest engagement was as a Senior Backend Developer at BlueGrid, where I worked embedded in the Recharge.com engineering team for five years — maintaining a complex core codebase, building internal AI tooling, and mentoring junior developers.
            </p>
            <p>
              Today I specialize primarily in Python backends (Flask, FastAPI, SQLAlchemy) with meaningful frontend experience in Vue.js and Nuxt.js. I've also done maintenance and debugging work in React and built full-stack features in Laravel/PHP early in my career.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-4">How I approach work</h2>
          <div class="space-y-4 text-slate-600 leading-relaxed">
            <p>
              I'm practical first. When facing a complex problem I look for the solution that solves it cleanly without over-engineering — three similar lines are usually better than a premature abstraction. I write automated tests because I've seen what happens when you don't.
            </p>
            <p>
              I use AI-assisted tools (Cursor, GitHub Copilot, Gemini) daily. Not as a crutch, but as a force multiplier. I'm deliberate about where AI adds leverage and where it introduces noise.
            </p>
            <p>
              I care about the broader context of what I'm building — the business problem, the user impact, the operational costs. Good engineering is engineering that serves the product.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-4">What I'm looking for</h2>
          <div class="space-y-4 text-slate-600 leading-relaxed">
            <p>
              I'm looking for a role at a <strong>product company</strong> — not outsourcing or staff augmentation. I want to work on a product I can learn inside out, contribute to long-term decisions, and see the impact of my work on real users.
            </p>
            <p>
              Senior IC or tech lead roles interest me most. I like mentoring junior engineers and being involved in architectural decisions, but I want to stay hands-on with the code.
            </p>
            <p>
              Remote-friendly is a plus. I'm open to occasional travel for team meetings.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-slate-900 mb-4">Education</h2>
          <p class="text-slate-600">Bachelor's degree — <strong>School of Computing</strong>, Belgrade, Serbia (2014)</p>
        </section>
      </div>

      <!-- Sidebar -->
      <div class="space-y-10">
        <!-- Photo placeholder -->
        <div class="w-full aspect-square rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400">
          <Icon name="lucide:user" size="40" />
          <p class="text-xs mt-3 text-center px-4">512×512px<br />.webp recommended</p>
        </div>

        <!-- Quick facts -->
        <div>
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Quick facts</p>
          <ul class="space-y-3">
            <li class="flex items-start gap-3 text-sm">
              <Icon name="lucide:map-pin" size="16" class="text-slate-400 mt-0.5 shrink-0" />
              <span class="text-slate-600">Belgrade, Serbia</span>
            </li>
            <li class="flex items-start gap-3 text-sm">
              <Icon name="lucide:briefcase" size="16" class="text-slate-400 mt-0.5 shrink-0" />
              <span class="text-slate-600">10+ years experience</span>
            </li>
            <li class="flex items-start gap-3 text-sm">
              <Icon name="lucide:code-2" size="16" class="text-slate-400 mt-0.5 shrink-0" />
              <span class="text-slate-600">Python · Vue.js · Nuxt.js</span>
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
          Download CV (PDF)
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: 'About — Stefan Jeremic' })
</script>
