<script setup lang="ts">
const { t } = useI18n()
useSeoMeta({ title: computed(() => `${t('nav.contact')} — Stefan Jeremic`) })

const form = reactive({ name: '', email: '', company: '', message: '' })
const submitted = ref(false)

const { email, openMail } = useEmail()

function handleSubmit() {
  // TODO: wire up to form backend (Formspree, Resend, etc.)
  submitted.value = true
  setTimeout(() => { submitted.value = false }, 4000)
}
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-20">
    <div class="max-w-2xl mb-16">
      <p class="text-sm font-medium text-blue-600 tracking-widest uppercase mb-3">{{ t('contact.badge') }}</p>
      <h1 class="text-4xl font-bold text-slate-900 mb-6">{{ t('contact.title') }}</h1>
      <p class="text-lg text-slate-500 leading-relaxed">{{ t('contact.subtitle') }}</p>
    </div>

    <div class="grid md:grid-cols-5 gap-16">
      <!-- Form -->
      <div class="md:col-span-3">
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <div class="grid sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1.5" for="name">{{ t('contact.form.name') }}</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                :placeholder="t('contact.form.namePlaceholder')"
                class="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1.5" for="email">{{ t('contact.form.email') }}</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                :placeholder="t('contact.form.emailPlaceholder')"
                class="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1.5" for="company">{{ t('contact.form.company') }}</label>
            <input
              id="company"
              v-model="form.company"
              type="text"
              :placeholder="t('contact.form.companyPlaceholder')"
              class="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1.5" for="message">{{ t('contact.form.message') }}</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              required
              :placeholder="t('contact.form.messagePlaceholder')"
              class="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
            />
          </div>

          <div>
            <button
              type="submit"
              :disabled="submitted"
              class="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Icon v-if="!submitted" name="lucide:send" size="16" />
              <Icon v-else name="lucide:check" size="16" />
              {{ submitted ? t('contact.form.submitted') : t('contact.form.submit') }}
            </button>
          </div>
        </form>
      </div>

      <!-- Sidebar links -->
      <div class="md:col-span-2 space-y-8">
        <div>
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">{{ t('contact.sidebar.directContact') }}</p>
          <ul class="space-y-4">
            <li>
              <button type="button" class="flex items-center gap-3 text-sm text-slate-600 hover:text-slate-900 transition-colors group w-full text-left" @click="openMail">
                <span class="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <Icon name="lucide:mail" size="16" class="text-slate-400 group-hover:text-blue-500 transition-colors" />
                </span>
                <span>{{ email || '···' }}</span>
              </button>
            </li>
            <li>
              <a href="https://linkedin.com/in/stefan-jeremic" target="_blank" rel="noopener" class="flex items-center gap-3 text-sm text-slate-600 hover:text-slate-900 transition-colors group">
                <span class="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <Icon name="lucide:linkedin" size="16" class="text-slate-400 group-hover:text-blue-500 transition-colors" />
                </span>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/schumskie" target="_blank" rel="noopener" class="flex items-center gap-3 text-sm text-slate-600 hover:text-slate-900 transition-colors group">
                <span class="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <Icon name="lucide:github" size="16" class="text-slate-400 group-hover:text-blue-500 transition-colors" />
                </span>
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div class="border-t border-slate-100 pt-8">
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">{{ t('contact.sidebar.cv') }}</p>
          <a href="/cv-stefan-jeremic.pdf" download class="flex items-center gap-3 text-sm text-slate-600 hover:text-slate-900 transition-colors group">
            <span class="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
              <Icon name="lucide:download" size="16" class="text-slate-400 group-hover:text-blue-500 transition-colors" />
            </span>
            {{ t('common.downloadCv') }}
          </a>
        </div>

        <div class="border-t border-slate-100 pt-8">
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">{{ t('contact.sidebar.responseTime') }}</p>
          <p class="text-sm text-slate-500">{{ t('contact.sidebar.responseText') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
