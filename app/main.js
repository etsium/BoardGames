import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js"
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { auth, db } from "./firebase.js"
import { loginCheck } from "./loginCheck.js"
import './signupForm.js'
import './logout.js'
import './signinForm.js'
import './googleLogin.js'
import './routing.js'
import { createAdminNav } from "./components/adminNav.js";

const gameRolMastersList = [
    "7xv2u0v8mvVTE3sEfUlaAO2uYkw2"
];

const nameDbRol = "rolGames";
const nameDbTable = "tableGames";
var eventRolGamesDocs = [];
var eventRolGames = [];
var eventTableGamesDocs = [];
var eventTableGames = [];
var eventCurrent = null;


onAuthStateChanged(auth, async (user) => {
    if (user) {
        loginCheck(user);
        if (isAdmin()) {
            createAdminNav();
        }
    } else {
        loginCheck(user);
    }
})


export async function setPage(nameDB) {
    let queryDocs;
    let queryEvents;
    switch (nameDB) {
        case nameDbRol:
            queryDocs = await getEventsDocs(nameDB);
            queryEvents = await getEvents(queryDocs, eventRolGames);
            if (!areArraysEqual(eventRolGames, queryEvents) || eventRolGames.length == 0) {
                eventRolGamesDocs = queryDocs;
                eventRolGames = queryEvents;
            }
            break;

        case nameDbTable:
            queryDocs = await getEventsDocs(nameDB);
            queryEvents = await getEvents(eventTableGamesDocs, eventTableGames);

            if (!areArraysEqual(eventTableGames, queryEvents) || eventTableGames.length == 0) {
                eventTableGamesDocs = queryDocs;
                eventTableGames = queryEvents;
            }
            break;

        default:
            break;
    }
}

async function getEventsDocs(nameDocs) {
    const queryDocs = await getDocs(collection(db, nameDocs));
    const docs = queryDocs.docs;
    return docs;
}

async function getEvents(eventDocs, currentListEvents) {
    var eventList = currentListEvents;
    if (currentListEvents.length != eventDocs.length) {
        eventRolGames = [];
        eventDocs.forEach(async (event) => {
            eventList.push(event.data());
        });
    }

    return eventList;
}

function areArraysEqual(array1, array2) {
    return array1.length === array2.length && array1.every((value, index) => value === array2[index]);
}

const isAdmin = () => {
    return gameRolMastersList.includes(auth.currentUser.uid);
}


export const showPage = (pageActive) => {
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        if (page.id === pageActive.id) {
            page.style.display = 'flex';
        } else {
            page.style.display = 'none';
        }
    });
}

export const hideAllPages = () => {
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        page.style.display = 'none';
    });
}

export const getScore = (listScore) => {
    let score = 0;
    if(listScore.length > 1){
    const sumScores = listScore.map(num => num).reduce((acc, cur) => acc + cur, 0);
    score = sumScores / listScore.length;
    }else{
        score = listScore;
    }

    return score;
}

export const getEventRolGames = () => { return eventRolGames };
export const getEventTableGames = () => { return eventTableGames };
export const setEventCurrent = (event) => {eventCurrent = event};
export const getEventCurrent = () => {return eventCurrent};