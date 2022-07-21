import express from 'express'
import cors from 'cors'
import twitterRoute from './routes/twitter.routes'

const app = express()
app.listen(process.env.PORT as string)

console.debug(`Server listening on port ${process.env.PORT as string}`)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use(twitterRoute)

export default app
