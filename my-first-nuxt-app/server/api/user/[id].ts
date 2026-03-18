import { useRoute } from "nuxt/app"

export default defineEventHandler(event => {
  const { id } = useRoute().params
  return {id: id}
})
