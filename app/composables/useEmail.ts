export function useEmail() {
  const email = ref('')

  onMounted(() => {
    email.value = ['office', 'sjeremic.dev'].join('@')
  })

  function openMail() {
    const address = ['office', 'sjeremic.dev'].join('@')
    window.location.href = `mailto:${address}`
  }

  return { email, openMail }
}
