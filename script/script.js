
import { saveTeam, saveResult, getNames } from "./data.js";

let map = null;

// If map div is preent on page then init the map
if (elementExistByID("map")) {
  initMap();
} 

// Initialize an index to keep track of the current item
let currentIndex = 0;

// Keep teamname for use thoughout
const teamName = getTeamNameLocal();

// Display first step
displayCurrentItem();

// var names = getNames();
// console.log("names:" + names);

// Quiz code 
//------------------------------------------------------------------------------------

function attachAnswerListners(){

  // remove locked status
  removeClassFromElements("quiz","quizLocked");

  const answers = document.querySelectorAll('.answer');

  let qidForRadio = "";

  answers.forEach(box => {
      box.addEventListener('click', () => {

        answers.forEach(b => {

          // Get the parent ele
            const parentElement = box.parentElement;
            const classNames = parentElement.classList;
            const qid = classNames[1];

            // select all class = qid
            const abc = document.querySelectorAll('.options.' + qid +' .answer');
            abc.forEach(def => {
              def.classList.remove('answer-selected');
            });
            qidForRadio = qid;
          });  

          box.classList.add('answer-selected');
          let www = box.id;
          let ele = www.split('-');
          let boxNum = ele[1];

          const correspondingRadio = document.querySelector(`input[id="${qidForRadio}${boxNum}"]`);
          correspondingRadio.checked = true;
    
      });
  });
}

function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

function getDateStamp(){
  const d = new Date();
  let year = d.getFullYear();   
  let month = addZero(d.getMonth() + 1);
  let day = addZero(d.getDate());
  let hour = addZero(d.getHours());
  let min = addZero(d.getMinutes());
  let sec = addZero(d.getSeconds());
  let timeStamp = `${year}-${month}-${day} ${hour}:${min}:${sec}`;
  return timeStamp;
}

//------------------------------------------------------------------------------------

  function displayCurrentItem() {
  
    // If no steps then exit
    if (typeof steps === "undefined") { 
      console.log("exiting DisplayCurrentItem as no steps"); 
      return;
    }
      const previousButton = document.getElementById('previousButton');   
      if( currentIndex == 0 ){
        previousButton.style.opacity = "0.1";
      } else {
        previousButton.style.opacity = "1";
      }

      const nextButton = document.getElementById('nextButton');   
      if( currentIndex >= 21 ){
        nextButton.style.opacity = "0.1";
      } else {
        nextButton.style.opacity = "1";
      }




    if (currentIndex >= 0 && currentIndex < steps.length) {
        const currentItem = steps[currentIndex];
        const resultDiv = document.getElementById('w_result');

        // const w_resultDiv = document.getElementById('w_result');
        const w_titleDiv = document.getElementById('w_title');
        const w_contentDiv = document.getElementById('w_content');

        const w_image = document.getElementById('w_image');
        const w_directions = document.getElementById('w_directions');
        const w_quiz = document.getElementById('w_quiz');
        const w_infoDiv = document.getElementById('w_info');
        const w_warningDiv = document.getElementById('w_warning');
        const w_mediaDiv1 = document.getElementById('w_media_1');


      
        const b_checkAnswers = document.getElementById('btnCheckAnswers');

        w_titleDiv.innerHTML = `${currentItem.name}`;
        w_contentDiv.innerHTML = `${currentItem.place}`;
        w_image.innerHTML = `<img src='assets/img/${currentItem.image}'>`;

        if (currentItem.video){
          // w_image.innerHTML = `<video width='100%' controls loop autoplay><source src='assets/vid/${currentItem.video}' type='video/mp4'></video>`;
       
          w_image.innerHTML = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="${currentItem.video}" frameborder="0" allow="autoplay" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="BTM wapping RAW"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
       
        }

        if (currentItem.info != '') {
          w_infoDiv.innerHTML = `${currentItem.info}`;          
        }
        else{
          w_infoDiv.innerHTML = '';
        }

        if (currentItem.access != '') {
          w_warningDiv.innerHTML = `${currentItem.access}`;
        }
        else {
          w_warningDiv.innerHTML = '';
        }

        // If have audio directions then show section
        if (currentItem.audio_direction != '') {
          w_directions.innerHTML = `<div class="directions-wrap"> <div class="audio-cntr"><audio id="audioDirections" controls controlsList="nodownload"><source src="${currentItem.audio_direction}" type="audio/mp3"></audio></div></div>`;
        }
        else {
          w_directions.innerHTML = '';
        }

        // Update map
        const lat = currentItem.lat;
        const lon = currentItem.lon;
        
        var marker = new mapboxgl.Marker()
        .setLngLat([lon,lat]) 
        .addTo(map);

        // map.setCenter([lon,lat]);

        // map.flyTo({
        //   center: [lon, lat],essential: true });

        map.easeTo({
          zoom:17,
          center: [lon, lat],
          bearing: -10,
          duration: 1000,
          easing: x => x
        });




        // Quiz section
        let subChildHtml = "";

        for (const key in currentItem.questions) {
            if (currentItem.questions.hasOwnProperty(key)) {

              // subChildHtml = '';

              // Get question ID
              let qid = extractQuestionID(currentItem.questions[key]);

              // remove question ID
              let questionAndAnswer = removeQuestionID(currentItem.questions[key]);

              // Get question
              let question = removeTextInBrackets(questionAndAnswer);
            
              // Get answer options
              let answers = extractTextBetweenBrackets(questionAndAnswer)

              let answerOptions = "";
              let radioOptions = "";
              let answerNum = 1;

              // split into seperate answers
              answers.split(",").forEach(function (item) {

                // If item ends with a * then this is the correct one
                let correctAnswer = isTheAnswer(item);

                let correctFlag = "0";
                if( correctAnswer ){
                  correctFlag = "1"
                  // Trim the flag from the answer text
                  item = item.slice(0, item.length-1);
                }

                answerOptions += '<div data-correct="' + correctFlag + '" class="answer answer-enable" id="q' + qid + answerNum + '">' + item + '</div>';
                radioOptions += '<input type="radio" name="boxRadio-opt-' + qid + '" id="opt-' + qid + answerNum + '" value="q' + qid + answerNum + '">';
                answerNum ++;
              });

              // append to result
              subChildHtml += '<div class="q-title">QUESTION ' + qid + '</div>';
              subChildHtml += `<p class="question">${question}</p>`;
              subChildHtml += `<div class="options opt-${qid}">${answerOptions}</div>`;
              subChildHtml += `<div id="radioForm" class="hide">${radioOptions}</div>`;
              
            } 
        }

        if (subChildHtml == "") {
          subChildHtml += '<h3>Take a break, there are no questions for this stage...</h3>';
          // Hide check answers button
          b_checkAnswers.style.display = 'none';
        } else {
          // Show check answers button
          b_checkAnswers.style.display = 'block';
        }

        // Render to page
        w_quiz.innerHTML = subChildHtml;

        // If have audio talk then show section
        if (currentItem.audio_talk != '') {
          w_mediaDiv1.innerHTML = `<div class="audio-wrap"><div class="dr-green"><img src="img/dr-green.png"></div><div class="audio-cntr"><audio id="myAudio1" controls controlsList="nodownload"><source src="${currentItem.audio_talk}" type="audio/mp3"></audio></div></div>`;
        }
        else {
          w_mediaDiv1.innerHTML = '';
        }


        w_contentDiv.classList.remove("content-hidden");

    } else {
        console.log("No more items in this direction.");
    }

    // Attach answer listners
    attachAnswerListners();

    // Do post display options
    resetAnimations();

}
  
//
// Functions
//

const coordinates = document.getElementById("coord");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    coordinates.innerHTML = "Geolocation is not supported or not allowed on this device.";
  }
}

function showPosition(position) {
  // coordinates.innerHTML = "Lat: " + position.coords.latitude + "<br>Lon: " + position.coords.longitude;

  // Put marker on map
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;


  const el = document.createElement('div');
  el.className = 'markerYou';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat([lon,lat])
    .addTo(map);

  map.easeTo({
    zoom:17,
    center: [lon, lat],
    // bearing: -10,
    // duration: 1000,
    easing: x => x
  });

}




function isTheAnswer(str) {
  return str.endsWith('*');
}

function resetAnimations(){

  addClassToElements('answer', 'answer-enable'); 

}

function addClassToElements(className, newClass) {
  const elements = document.getElementsByClassName(className);
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add(newClass);
  }
}

function removeClassFromElements(className, newClass) {
  const elements = document.getElementsByClassName(className);
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove(newClass);
  }
} 

function mapToggle() {
  var mapDiv = document.getElementById("map"); 
  mapDiv.classList.toggle("mapOpen"); 
  
}

function cameraToggle() {
  var cameraDiv = document.getElementById("camera"); 
  cameraDiv.classList.toggle("cameraOpen"); 
}

function directionsPlayToggle(){
  
  var player = document.getElementById("audioDirections"); 
  player.classList.toggle("playing"); 
  // player.play();
  // player.pause();
  togglePlayPause(player);

  // Material icon -> volume_off
  iconDirVol
  var iconDirVol = document.getElementById("iconDirVol");
  
  // volume_up / volume_off
  console.log(iconDirVol.innerHTML);
  let curState = iconDirVol.innerHTML;

  if ( curState == "volume_up"){
    iconDirVol.innerHTML = "volume_off";
  }
  else {
    iconDirVol.innerHTML = "volume_up";
  }

}


function audioReset(){
  var player = document.getElementById("audioDirections"); 
  // player.classList.toggle("playing"); 
  player.pause();
  player.currentItem = 0;
  player.src = '';
}

// Function to step forward
function stepForward() {
  if (currentIndex < steps.length - 1) {
    currentIndex++;
    displayCurrentItem();
  }
  scrollToTop();
}

// Function to step backward
function stepBackward() {
  if (currentIndex > 0) {
    currentIndex--;
    displayCurrentItem();
  } 
  scrollToTop();
}


// Drawer functions
function openDrawer() {
    document.getElementById('drawer').classList.add('open');
}

function closeDrawer() {
    document.getElementById('drawer').classList.remove('open');
}    

function scrollToTop() { 
    window.scrollTo(0, 0); 
} 

// Function to play or pause the audio
function togglePlayPause(audioElement) {
  if (audioElement.paused) {
    audioElement.play();
  } else {
    audioElement.pause();
  }
}

// Event listener for the play/pause button (you can replace this with your own button or trigger)
// audio.addEventListener("play", function() {
//   console.log("Audio is playing");
// });

// audio.addEventListener("pause", function() {
//   console.log("Audio is paused");
// });

// audio.addEventListener("ended", function() {
//   console.log("Audio has ended");
// });

function fadePageToBlack() {
  // Get the overlay element
  var overlay = document.getElementById('overlay');

  // Set its opacity to 1 to fade it in
  overlay.style.opacity = '1';
}

function extractQuestionID(inputString)
{
  const extractedText = inputString.substring(0, 4);
  return extractedText;
}

function extractTextBetweenBrackets(inputString) {
  const startIndex = inputString.indexOf('[');
  const endIndex = inputString.indexOf(']');

  if (startIndex !== -1 && endIndex !== -1) {
    const extractedText = inputString.substring(startIndex + 1, endIndex);
    return extractedText;
  } else {
    return null;
  }
}

function removeQuestionID(inputString)
{
  const extractedText = inputString.slice(4, inputString.length);
  return extractedText;
}

function removeTextInBrackets(inputString) {
  const startIndex = inputString.indexOf('[');
  const endIndex = inputString.indexOf(']');

  if (startIndex !== -1 && endIndex !== -1) {
    return inputString.substring(0, startIndex) + inputString.substring(endIndex + 1);
  } else {
    return inputString;
  }
}


function setTeamNameLocal(teamName){
  setLocalData("team_name",teamName);
  setLocalData("totalScore", 0);
};

function getTeamNameLocal(){
  return getLocalData("team_name");
};


function setLocalData(key, data){
  // console.log('setLocaldata:' + ' ' + key + ' ' + data);
  localStorage.setItem(key, data);
}

function getLocalData(key){
  return localStorage.getItem(key);
}


function createX(teamName){
  setTeamNameLocal(teamName);
  saveTeam(getDateStamp() + "|" + teamName);
}


function removeAnswerHandler(){

  const answers = document.querySelectorAll('.answer');

  answers.forEach(box => {
    // box.removeEventListener("mousemove", myFunction);

    let newBox = box.cloneNode(true);
    box.parentNode.replaceChild(newBox,box);
    box = newBox;
  });
}



function checkAnswers() {

  let answerText = "";
  let questionNum = 1; // This step qID
  let questionId = ""; // Global qID
  let correctCount = 0;

  const myDialogEle = document.getElementById("myDialog");
  myDialogEle.showModal();

  const dialogMessageEle = document.getElementById("dialogMessage");
  dialogMessageEle.innerHTML = '<h4>Checking your answers...</h4>';

  // Get all question blocks
  const questions = document.querySelectorAll('.options');

  questions.forEach(question => {
    const answers = question.children;

    let notAttempted = true;
    let correctAnswer = false;

    for (let i=0; i<answers.length; i++) {
      let choice = answers[i];

      let id = choice.getAttribute("id");
      let selected = isAnswerChosen(choice.getAttribute("class"));
      let correct = !!+choice.getAttribute("data-correct");

      if (selected){
        notAttempted = false;
      }

      if (selected & correct){
        correctAnswer = true;
        correctCount++;
      }

      if (correct) {
        choice.classList.add("true-answer");
      }

      questionId = id;

    }

    answerText += "<li>";
    answerText += "(" + questionId + ") " +"Q" + questionNum + ". ";

    // Is there an attempt?
    if (notAttempted){
      answerText += "Not answered";
    }
    else {
      // Is attempt correct?
      if (correctAnswer){
        answerText += "<span class='correct'>Correct</span>";
      } else {
        answerText += "<span class='wrong'>Wrong</span>";
      }
    }
    answerText += "</li>";
    questionNum ++;
  });

  dialogMessageEle.innerHTML += "<ul class='check'>" + answerText + "</ul>";

  // Save compressed results to DB
  let answerTextComp = answerText;
  answerTextComp = answerTextComp.replaceAll("Not answered", "NA");
  answerTextComp = answerTextComp.replaceAll("</li>", ",");
  answerTextComp = answerTextComp.replace(/(<([^>]+)>)/ig, '');

  let compResult = getDateStamp() + "|"  + teamName + "|" + answerTextComp;
  saveResult(compResult);


  // Stop re-submitting of answers and restyle section
  removeAnswerHandler();
  addClassToElements("quiz","quizLocked");

  // remove check answer button
  btnCheckAnswers.style.display = 'none';

  // Return number of correct answers
  return correctCount;
};


function isAnswerChosen(str){
  return str.toLowerCase().includes('answer-selected');
}

function elementExistByID(id){
  let element = !!document.getElementById(id); 
  if (element) {
    return true;
  } else {
    return false;
  }
}


 function initMap(){

  mapboxgl.accessToken = 'pk.eyJ1IjoicGF1bHN0dXJuIiwiYSI6ImNsb29xNjhsYTAzMWMyaWs0MnhmcnkwemMifQ.QGAyREqnB3rSzZTZoevDQw';

  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/paulsturn/clor4p1kl00ni01pbg0en5pa4',
    center: [-0.0704913,51.5065202],
    zoom: 16,
    bearing: 10
  });

  map.easeTo({
    zoom:16,
    bearing: -10,
    duration: 7000,
    easing: x => x
  });

 }


function updateScore(){
  // update score in header
  const scoreEle = document.getElementById("teamScore");
  scoreEle.textContent = getLocalData("totalScore"); 
  removeClassFromElements("score","flashScore");
  addClassToElements("score","flashScore");
}





//
// Event listners
//
const addTeam = document.getElementById("addTeamName");

const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const mapSwitch = document.getElementById("mapToggle");
const cameraSwitch = document.getElementById("cameraToggle");
const directionsSwitch = document.getElementById("directionsToggle");
const myLocationSwitch = document.getElementById("myLocation");

// set per answer block..
const btnCheckAnswers = document.getElementById("btnCheckAnswers");

// Only attach if addTeam is present
addTeam.addEventListener("click", () => {

  const teamName = document.getElementById("teamName");

console.log(teamName.value);

  if (teamName.value){

    createX(teamName.value); 

    const myDialogEle = document.getElementById("myDialog");
    myDialog.showModal()
    const dialogMessageEle = document.getElementById("dialogMessage");
    dialogMessageEle.innerHTML = "<br /><br /><h3>Thank you</h3><p>Your teamname has been saved.</p>";
    // enable next button
    const start = document.getElementById("btn-start");
    start.style.display = "block";

  }
  else{
    const myDialogEle = document.getElementById("myDialog");
    myDialogEle.showModal();
    const dialogMessageEle = document.getElementById("dialogMessage");
    dialogMessageEle.innerHTML = "<br /><br /><h3>Please enter a team name!</h3><p>We use the team name you enter to save your quiz score.</p>";

  }
  
});

myLocationSwitch.addEventListener("click", () => {
  getLocation();
});

previousButton.addEventListener("click", () => {
  stepBackward();
});

nextButton.addEventListener("click", () => {

  let allowed = true;
  let message = "";
  let hasQuestions = false;

  // w_quiz contains any .question  elements then there are questions
  const w_quiz = document.getElementById('w_quiz');
  const quest = document.querySelector('.question');

  if (w_quiz.contains(quest)) {
    hasQuestions = true;
  } 

  // if quizWrapper has a .quizLocked then class then attempt has been made
  const qWrapper = document.getElementById('w_quiz');



  if (allowed){  
    stepForward();
  }
  else {

    const myDialogEle = document.getElementById("myDialog");
    myDialogEle.showModal();
  
    const dialogMessageEle = document.getElementById("dialogMessage");
    dialogMessageEle.innerHTML = `<h4>"${message}"</h4>`;

  }

});

mapSwitch.addEventListener("click", () => {
  mapToggle();
});

// cameraSwitch.addEventListener("click", () => {
//   cameraToggle();
// });

directionsSwitch.addEventListener("click", () => {
  directionsPlayToggle();
});

btnCheckAnswers.addEventListener("click", () => {
  let correct = checkAnswers();

  let score = getLocalData("totalScore");

  if (score == 'NaN') {
    score = 0;
    setLocalData("totalScore", score);
  }

  let newScore = parseInt(score) + parseInt(correct);
  setLocalData("totalScore", newScore);

  updateScore();

});
