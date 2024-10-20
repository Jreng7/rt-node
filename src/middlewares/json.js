export async function json(req, res) {

  buffers = []

  for await (const data of req) {
    buffers.push(data)
  }

  try {
    req.body = JSON.stringify(Buffer.concat(buffers).toString())
  } catch {
    req.body = null
  }

  res.setHeader('Content-type', 'aplication/json')

}


