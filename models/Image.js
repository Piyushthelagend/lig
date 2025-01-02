const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    prompt: { type: String, required: true },
    style: { type: String, required: true },
    img_type: { type: String, required: true },
    categorie: { type: String, required: true },
    tags: { type: [String], required: true },
    file_type: { type: String, required: true },
    is_improove_prompt: { type: Boolean, required: true },
    timestamp: { type: Date, default: Date.now },
    image_url: { type: String, required: true },
  },
  { collection: "gen_images" } // Explicitly set collection name
);

export default mongoose.models.Image || mongoose.model("Image", ImageSchema);
