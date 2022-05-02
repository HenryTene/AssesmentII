const { getAllNotes, getNoteById } = require("./note.service");

async function getAllNotesHandler(req, res) {
  try {
    const notes = await getAllNotes();

    return res.status(200).json(notes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}

async function getNoteByIdHandler(req, res) {
  const id = req.params.id;
  try {
    const note = await getNoteById(id);
    if (!note) {
      return res.status(404).json({ error: `Note with id:${id} not found` });
    }   
    return res.status(200).json(note);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllNotesHandler,
  getNoteByIdHandler,
};
