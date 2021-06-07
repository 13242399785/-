const mongoose = require('mongoose')

const catalogSchema = new mongoose.Schema({
    name: { type: String },
    parent: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Catalog',
      default: null
    },
    desc:{ type: String, default: '' },
    path:{ type: String, default: '' },
    icon:{ type: String, default: '' },
})

catalogSchema.virtual('children', {
    localField: '_id',
    foreignField: 'parent',
    justOne: false,
    ref: 'Catalog'
})
const Catalog = mongoose.model('Catalog', catalogSchema)

module.exports = Catalog 