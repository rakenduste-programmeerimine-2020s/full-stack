const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TopicSchema = new Schema(
  {
    name: { type: String, required: true },
    viewCount: { type: Number, default: 0 },
    deletedAt: { type: Date, default: null }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Topic', TopicSchema)