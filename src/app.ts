import express from 'express'
import cors from 'cors'
import { PORT } from './utils/config'
import twitterRoute from './routes/twitter.routes'

const app = express()
app.set('port', PORT)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use(twitterRoute)

export default app
