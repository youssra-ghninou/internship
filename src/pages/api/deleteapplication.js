import prisma from '@@/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const id = req.body
    const result = await prisma.application.delete({
      where: {
        id: id,
      },
    })
    res.status(200).json(result)
  } else res.redirect(307, '/').end()
}
