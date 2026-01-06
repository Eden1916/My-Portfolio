require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const contactRouter = require("./routes/contact") // import contact route

const app = express()

app.use(cors())
app.use(express.json())


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err))

// Use contact router
app.use("/api/contact", contactRouter) // <-- THIS

app.listen(process.env.PORT || 5000, () => {
  console.log("🚀 Server running on port 5000")
})
