
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase, ref, push, child, get,query,orderByChild,equalTo } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";


const appSettings = {
    databaseURL: "https://beyond-4ea43-default-rtdb.europe-west1.firebasedatabase.app/"
}


const app = initializeApp(appSettings);
const database = getDatabase(app);
const teamsInDB = ref(database, "teams");
const answersInDB = ref(database, "answers");
const resultsInDB = ref(database, "results");


export function saveTeam(teamName) {

    push(teamsInDB, teamName);

}

export function saveAnswer(answer) {

    push(answersInDB, answer);

}

export function saveResult(result) {
    push(resultsInDB, result);
}

export function getNames(){

    const dbRef = ref(database);
    var test = [];

    get(child(dbRef,"teams"))
        .then((snapshot)=>{
            
            snapshot.forEach(childSnapshot => {
                test.push(childSnapshot.val());
            });

    console.log(test);
    return test;
    })

}
