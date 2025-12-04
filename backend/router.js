const express = require("express");
const router = express.Router();
const controller = require("./controller"); 

router.get("/events", controller.getAllEvents);
router.get("/event/:id", controller.getById);
router.post("/event", controller.addEvent);
router.put("/event/:id", controller.updateEvent);
router.delete("/event/:id", controller.deleteEvent);

module.exports = router;