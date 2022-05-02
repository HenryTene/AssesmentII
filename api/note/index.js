const { Router } = require("express");

const { getAllNotesHandler,getNoteByIdHandler } = require("./note.controller");

const router = new Router();

router.get("/", getAllNotesHandler);
//router.post("/");
router.get("/:id", getNoteByIdHandler);
//router.delete("/:id");
//router.patch("/:id");
//router.put("/:id");

module.exports = router;
