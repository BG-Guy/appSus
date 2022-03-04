import { utilService } from '../../services/util-service.js';
import { storageService } from '../../services/storage-service.js'

const NOTES_KEY = 'notesDB';
_createNotes();

export const noteService = {
  query,
  get,
  remove,
  save,
  update,

  createNote,
};



// function getById() {
//     return Promise.resolve(note);
// }

function query() {
  return storageService.query(NOTES_KEY);
}

function get(noteId) {
  return storageService.get(NOTES_KEY, noteId);
}

function remove(noteId) {
  return storageService.remove(NOTES_KEY, noteId);
}

function save(note) {
  return storageService.post(NOTES_KEY, note);
}

function update(note) {
  return storageService.put(NOTES_KEY, note);
}


function createNote(noteType, bgc, info) {
    
    let note = {
        id: utilService.makeId(),
        type: noteType,
        bgc: bgc,
        isPinned: false,
        info: info
    }
    return note
    
}

function _createNotes() {
  var notes = utilService.loadFromStorage(NOTES_KEY);

if (!notes || notes.length < 1) {

   notes = [
    {
        id: utilService.makeId(),
        type: 'noteTodos',
        bgc: '#F2F3F4',
        isPinned: false,
        info: {
            label: "Enter A Todo",
            todos: [
            {
                txt: 'Work Hard Play Hard',
                isDone: false,
                color: '#F2F3F4',
                importance: 4,
            },
            {
                txt: 'Drving Liscence',
                isDone: false,
                color: '#F2F3F4',
                importance: 4,
            },
        ],
    },
 
    },

    {
        id: utilService.makeId(),
        type: 'noteText',
        bgc: '#F2F3F4',
        isPinned: false,
        info: {
            txt: "Fullstack Me Baby!",
            color: 'red'
        },
        
    },

    {
        id: utilService.makeId(),
        type: 'noteTodos',
        bgc: '#F2F3F4',
        isPinned: false,
        info: {
            label: "Enter A Todo",
            todos: [
            {
                txt: 'Work Hard Play Hard',
                isDone: false,
                color: '#F2F3F4',
                importance: 4,
            },
            {
                txt: 'Work Hard Play Hard',
                isDone: false,
                color: '#F2F3F4',
                importance: 4,
            },
        ],
    },
 
    },

    {
        id: utilService.makeId(),
        type: 'noteImg',
        bgc: '#F2F3F4',
        isPinned: false,
        info: {
            url: "http://some-img/me",
            txt: "Bobi and Me",
        
    },
 
    },

    {
        id: utilService.makeId(),
        type: 'noteVideo',
        bgc: '#F2F3F4',
        isPinned: false,
        info: {
            label: "Enter A Todo",
            url: "https://www.youtube.com/watch?v=CJbR7K0E2Z4",
        
    },
 
    },

    {
        id: utilService.makeId(),
        type: 'noteTodos',
        bgc: '#F2F3F4',
        isPinned: false,
        info: {
            label: "Enter A Todo",
            todos: [
            {
                txt: 'Work Hard Play Hard',
                isDone: false,
                color: '#F2F3F4',
                importance: 4,
            },
            {
                txt: 'Work Hard Play Hard',
                isDone: false,
                color: '#F2F3F4',
                importance: 4,
            },
        ],
    },
 
    },

    ]

    utilService.saveToStorage(NOTES_KEY, notes)
}

    return notes

}