
const mongoose = require('mongoose')

const DetailSchema = new mongoose.Schema({
    name: { type: String },
    parent: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Detail',
      default:null
    },
    desc:{ type: String, default: '' },
    path:{ type: String, default: '' },
    icon:{ type: String, default: '' },
})

DetailSchema.virtual('children', {
  localField: '_id',
  foreignField: 'parent',
  justOne: false,
  ref: 'Detail'
})

const Detail = mongoose.model('Detail', DetailSchema)

module.exports = Detail