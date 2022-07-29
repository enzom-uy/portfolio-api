import { mongoURL } from '../utils/config'
import mongoose from 'mongoose'

const connect: () => void = async () => {
  try {
    const db = await mongoose.connect(mongoURL)
    console.log('Database is connected to:', db.connection.name)
  } catch (error) {
    console.log('There was an error while trying to connect to MongoDB:')
    console.log(error)
  }
}

connect()
