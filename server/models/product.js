const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type:String,
    required: true,
    trim: true
  },
  price: {
    type:Number,
    required: true,
  },
  quantity: {
    type:Number,
    required: true
  }

}, {timestamps: true})

ProductSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;