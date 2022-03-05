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


function createNote(noteType,title, bgc, info) {
    if (noteType === 'noteImg') title = 'Cool Image'
    if (noteType === 'noteVideo') title = 'Cool Video'
    return {
        id: utilService.makeId(),
        type: noteType,
        bgc: bgc,
        isPinned: false,
        info: info,
        title: title,
    }
}

function _createNotes() {
  var notes = utilService.loadFromStorage(NOTES_KEY);

if (!notes || notes.length < 1) {

   notes = [
    {
        id: utilService.makeId(),
        type: 'noteTodos',
        title: 'Get my stuff from work',
        bgc: '#F2F3F4',
        isPinned: false,
        info: {
            label: "Enter A Todo",
            todos: [
            {
                txt: 'USB flashdrive',
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
        title: 'Funny joke',
        bgc: '#F2F3F4',
        isPinned: false,
        info: {
            txt: "Fullstack Me Baby!",

        },
        
    },

    {
        id: utilService.makeId(),
        type: 'noteTodos',
        title: 'My Shopping list',
        bgc: '#F2F3F4',
        isPinned: false,
        info: {

            todos: [
            {
                txt: 'Flafel',
                isDone: false,
                color: '#F2F3F4',
                importance: 4,
            },
            {
                txt: 'Hummus',
                isDone: false,
                color: '#F2F3F4',
                importance: 4,
            },
            {
            txt: 'Milk',
            isDone: false,
            color: '#F2F3F4',
            importance: 4,
            }
        ],
    },
 
    },

    {
        id: utilService.makeId(),
        type: 'noteImg',
        title: 'Bobi and Me',
        bgc: '#F2F3F4',
        isPinned: false,
        info: {
            url: "https://lumiere-a.akamaihd.net/v1/images/character_themuppets_kermit_b77a431b.jpeg",
        
    },
 
    },

    {
        id: utilService.makeId(),
        type: 'noteVideo',
        title: 'Awesome Jam',
        bgc: '#F2F3F4',
        isPinned: false,
        info: {

            url: "https://www.youtube.com/watch?v=CJbR7K0E2Z4",
        
    },
 
    },

    {
        id: utilService.makeId(),
        type: 'noteTodos',
        title: 'Wish List',
        bgc: '#F2F3F4',
        isPinned: false,
        info: {

            todos: [
            {
                txt: 'A Pet Tiger',
                isDone: false,
                color: '#F2F3F4',
                importance: 4,
            },
            {
                txt: 'A Pet Lion',
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