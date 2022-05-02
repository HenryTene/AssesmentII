const Note = require("./note.models");


async function getAllNotes() {
  try {
    const notes = await Note.find();
    return notes;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Get note by id
 * @param {string} id identifier of the note to be fitered
 * @returns note 
 */
async function getNoteById(id) {
  try {
    const note = await Note.findById(id);
    return note;
  } catch (error) {
    console.log(error);
  }
}

async function createNote(note) {
  try {
    const newNote = new  Note(note);
    const savedNote = await newNote.save();
    return savedNote;
  } catch (error) {
    throw error;
    console.log(error);
  }
}

async function updateNote(id, note) {
  try {
    const updatedNote = await Note.findByIdAndUpdate(id, note, {
      new: true,
    });
    return updatedNote;
  } catch (error) {
    console.log(error);
  }
}

async function deleteNote(id) {
  try {
    const deletedNote = await Note.findByIdAndDelete(id);
    return deletedNote;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
  
};
