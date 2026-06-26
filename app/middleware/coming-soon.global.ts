export default defineNuxtRouteMiddleware((to) => {
  const { public: { comingSoon } } = useRuntimeConfig()
  if (comingSoon && to.path !== '/coming-soon') {
    return navigateTo('/coming-soon')
  }
})
