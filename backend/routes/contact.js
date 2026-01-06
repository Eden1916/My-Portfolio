const express = require("express")
const Message = require("../models/Message")
const router = express.Router()

router.post("/", async (req, res) => {
  try {
    const msg = await Message.create(req.body);

    console.log("✅ Saved to DB:", msg);

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ Error saving:", err);
    res.status(500).json({ error: "Server error" });
  }
});


module.exports = router
