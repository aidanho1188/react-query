const {model, Schema} = require('mongoose')

const PostsSchema = new Schema(
  {
    id: Schema.Types.ObjectId,
    title: String,
    content: String,
    author_id: Schema.Types.ObjectId,
    timeStamp: Date,
    default: Date.now,
  },
  {
    timestamps: true,
  }
)

module.exports = model('Posts', PostsSchema)
