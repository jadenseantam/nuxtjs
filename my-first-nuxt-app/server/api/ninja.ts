export default defineEventHandler(async (event) => {

  // handle query params
  const { name } = getQuery(event)
  const body = event.method !== 'GET' ? await readBody(event) : null;

  return {
    message: "Success",
    received: body,
    name: name
  };
})

