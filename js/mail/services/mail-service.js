import { utilService } from "../../services/util-service.js";
import { storageService } from "../../services/storage-service.js";

const emails = [
  {
    name: "yoni",
    id: "",
    subject: "Miss you!",
    body: "Would love to catch up sometimes",
    isRead: false,
    sentAt: 1551133930594,
    to: "momo@momo.com",
  },
  {
    name: "jomi",
    id: "",
    subject: "sprint",
    body: "let come stop program",
    isRead: false,
    sentAt: 1551133930594,
    to: "momo@momo.com",
  },
  {
    name: "rokie",
    id: "",
    subject: "box",
    body: "let come fight program",
    isRead: false,
    sentAt: 1551133930594,
    to: "momo@momo.com",
  },
  {
    name: "brok",
    id: "",
    subject: "poki",
    body: "go pokemon",
    isRead: false,
    sentAt: 1551133930594,
    to: "momo@momo.com",
  },
  {
    name: "liam",
    id: "",
    subject: "bar",
    body: "today at 4?",
    isRead: false,
    sentAt: 1551133930594,
    to: "momo@momo.com",
  },
  {
    name: "tim",
    id: "e104",
    subject: "party!",
    body: "you come?",
    isRead: false,
    sentAt: 1551133930594,
    to: "momo@momo.com",
  },
];
const MAILS_KEY = "MailsDb";
_createMails();

// const criteria = {
//     status: 'inbox/sent/trash/draft',
//     txt: 'puki', // no need to support complex text search
//     isRead: true, // (optional property, if missing: show all)
//     isStared: true, // (optional property, if missing: show all)
//     lables: ['important', 'romantic'] // has any of the labels
//    }

export const mailService = {
  query,
  remove,
  save,
  get,
  getMailsInMode,
  getEmptyMail,
};

function query() {
  return storageService.query(MAILS_KEY);
}

function remove(mailId) {
  return storageService.remove(MAILS_KEY, mailId);
}

function save(mail) {
  if (mail.id) return storageService.put(MAILS_KEY, mail);
  else return storageService.post(MAILS_KEY, mail);
}

function get(mailId) {
  return storageService.get(MAILS_KEY, mailId);
  // .then(mail => {
  // return _setNextPrevMailId(mail)
  // })
}

function _createMails() {
  let mails = utilService.loadFromStorage(MAILS_KEY);
  if (!mails || !mails.length) {
    mails = [];
    emails.map((mail) => {
      mails.push(createMail(mail));
    });
    utilService.saveToStorage(MAILS_KEY, mails);
  }
  return mails;
}

function createMail(mail) {
  const currMail = {
    name: mail.name,
    id: utilService.makeId(),
    subject: mail.subject,
    body: mail.body,
    isRead: false,
    sentAt: new Date().toDateString(),
    to: "yoni@guy.com",
    importent: false,
    isDeleted: false,
    sent: false,
    isDraft:false,
  };
  return currMail;
}
function getEmptyMail(mail) {
  const currMail = {
    name: mail.name,
    subject: mail.subject,
    body: mail.body,
    isRead: false,
    sentAt: new Date().toDateString(),
    to: "yoni@guy.com",
    importent: false,
    isDeleted: false,
    sent:false,
    isDraft:false,
  };
  return currMail;
}

function getMailsInMode(mode) {
  return query().then((mails) => {
    switch (mode) {
      case "starred":
        return mails.filter((mail) => mail.importent);
      case "sent":
        return mails.filter((mail) => mail.sent && !mail.isDeleted);
      case "Trash":
        return mails.filter((mail) => mail.isDeleted);
      case "Draft":
        return mails.filter((mail) => mail.isDraft);
      case "inbox":
        return mails.filter((mail) => !mail.isDeleted && !mail.sent);
    }
  });
}

// getModeMails(this.mode ,this.mails)
