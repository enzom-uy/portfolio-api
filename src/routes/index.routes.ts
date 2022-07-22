import { Router } from 'express'

const indexRoute = Router()

indexRoute.get('/api', (_req, res) => {
  res.send('Enzomdev API: Index')
})

export default indexRoute
