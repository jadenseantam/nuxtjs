export default defineEventHandler(async (event) => {

  // handle query params
  const { name } = getQuery(event)
  const body = readBody(event)

  return {
    message: "Success",
    received: body,
    name: name
  };
})
