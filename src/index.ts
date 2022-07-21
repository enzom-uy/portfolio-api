import app from './app'

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/prefer-nullish-coalescing
const port = process.env.PORT || 3333

app.listen(port, () => {
  console.log(`The app is running on port ${port}`)
})
