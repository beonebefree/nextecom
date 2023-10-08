import mongoose, {model, Schema, models} from "mongoose";

const ProductSchema = new Schema({
  title: {type:String, required:true},
  description: String,
  price: {type: Number, required: true},
  images: [{type:String}],
  category: {
    type: mongoose.Types.ObjectId,
    ref: 'Category',
    required: true,
    validate: {
      validator: function(v) {
        return v.toString().trim() !== "";
      },
      message: "category cannot be empty"
    }
  },
  properties: {type:Object},
  slug: {type: String, default: function() { return this.title }},
}, {
  timestamps: true,
});

export const Product = models.Product || model('Product', ProductSchema);