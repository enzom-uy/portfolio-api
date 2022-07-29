import { Schema, model } from 'mongoose'

export interface IPost {
  title: string
  createdAt: string
  stack: string
  platform: 'Web' | 'Mobile' | 'Backend'
  website: string
  repository: string
  body: string
  imagePath: string
  filename: string
  featured: boolean
}

const postSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    },
    stack: {
      type: String,
      required: true
    },
    platform: {
      type: String,
      required: true
    },
    website: {
      type: String,
      required: true
    },
    repository: {
      type: String,
      required: true
    },
    imagePath: {
      type: String
    },
    filename: {
      type: String
    },
    featured: {
      type: Boolean,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

postSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject.__id
  }
})

export default model('Post', postSchema)
