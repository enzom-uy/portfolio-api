import express from 'express'
import cors from 'cors'
import twitterRoute from './routes/twitter.routes'
import indexRoute from './routes/index.routes'
import adminRoute, { loginAdminRoute } from './routes/admin.routes'
import * as middleware from './middlewares/verifyAuth'
import './database/db'

const app = express()
app.listen(process.env.PORT as string)
console.debug(`Server listening on port ${process.env.PORT as string}`)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use(twitterRoute)
app.use(indexRoute)
app.use(loginAdminRoute)
app.use(middleware.verifyAuth)
app.use(adminRoute)

export default app
