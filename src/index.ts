import { PORT } from './utils/config'
import app from './app'

app.listen(PORT, () => {
  console.log('The app is running on port', PORT)
})
