import app from './app'

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/prefer-nullish-coalescing

app.listen(process.env.PORT, () => {
  console.log(`The app is running on port ${process.env.PORT as string}`)
})
