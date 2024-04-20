
import { saveTeam, saveAnswer } from "./data.js";

// Initialize an index to keep track of the current item
let currentIndex = 0;

// Display first step
displayCurrentItem();

// Quiz code tests
//------------------------------------------------------------------------------------

const answers = document.querySelectorAll('.answer');
// const radioButtons = document.querySelectorAll('input[name="qRadio"]');

let qidForRadio = "";

// ATTACH LISTNERS TO ANSWER BOXES
// ---------------------------------------

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

        let ans = qidForRadio + ','+ boxNum;
        saveAnswer(ans);

        
    });
});


//------------------------------------------------------------------------------------

  function displayCurrentItem() {

    // do pre-display tasks
    // removeClassFromElements('answer', 'answer-enable'); 

    // If no steps then exit
    if (typeof steps === "undefined") { 
      console.log("exiting DisplayCurrentItem as no steps"); 
      return;
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

        const w_warningDiv = document.getElementById('w_warning');
        const w_mediaDiv1 = document.getElementById('w_media_1');

        w_titleDiv.innerHTML = `${currentItem.name}`;
        w_contentDiv.innerHTML = `${currentItem.place}`;
        w_image.innerHTML = `<img src='assets/img/${currentItem.image}'>`;

        if (currentItem.video){
          w_image.innerHTML = `<video width='100%' controls loop autoplay><source src='assets/vid/${currentItem.video}' type='video/mp4'></video>`;
        }

        // If have audio directions then show section
        if (currentItem.audio_direction != '') {
          w_directions.innerHTML = `<div class="directions-wrap"> <div class="audio-cntr"><audio id="audioDirections" autoplay controls controlsList="nodownload"><source src="${currentItem.audio_direction}" type="audio/mp3"></audio></div></div>`;
        }
        else {
          w_directions.innerHTML = '';
        }



        // Quiz section

        let subChildHtml = "";

        for (const key in currentItem.questions) {
            if (currentItem.questions.hasOwnProperty(key)) {

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
                answerOptions += '<div class="answer answer-enable" id="q' + qid + answerNum + '">' + item + '</div>';
                radioOptions += '<input type="radio" name="boxRadio-opt-' + qid + '" id="opt-' + qid + answerNum + '" value="q' + qid + answerNum + '">';
                answerNum ++;
              });

              // append to result
              subChildHtml += `<p class="question">${question}</p>`;
              subChildHtml += `<div class="options opt-${qid}">${answerOptions}</div>`;
              subChildHtml += `<div id="radioForm" class="xhide">${radioOptions}</div>`;
              
            }
        }

        w_quiz.innerHTML = subChildHtml;

        // If have audio talk then show section
        if (currentItem.audio_talk != '') {
          w_mediaDiv1.innerHTML = `<div class="audio-wrap"><div class="dr-green"><img src="img/dr-green.png"></div><div class="audio-cntr"><audio id="myAudio1" controls controlsList="nodownload"><source src="${currentItem.audio_talk}" type="audio/mp3"></audio></div></div>`;
        }
        else {
          w_mediaDiv1.innerHTML = '';
        }

    } else {
        console.log("No more items in this direction.");
    }

    // Do post display options
    resetAnimations();

}
  
//
// Functions
//


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



// Audio
// Get the audio element
var audio = document.getElementById("myAudio1");

// Function to play or pause the audio
function togglePlayPause(audioElement) {
  if (audioElement.paused) {
    audioElement.play();
  } else {
    audioElement.pause();
  }



    // myAudio.pause();
    // myAudio.currentTime = 0;
    // myAudio.src = 'sound.mp3';


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
  // Save Team name to local storage
//   localStorage.setItem("myval", "A value");
//   localStorage.getItem("myval");
  localStorage.setItem("team_name", teamName);
};

function getTeamNameLocal(teamName){
  // Get Team name from local storage
  return localStorage.getItem("team_name");
};


function createX(teamName){
  setTeamNameLocal(teamName);
  saveTeam(teamName);
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

const dialogBox = document.getElementById("dialogBox");
const dialogMessage= document.getElementById("dialogMessage");


// Only attach if addTeam is present

addTeam.addEventListener("click", () => {
  const teamName = document.getElementById("teamName");

  if (teamName.value){
    createX(teamName.value); 
  }
  else{
    alert("Please enter a team name!");
    dialogMessage.textContent = "Please enter a team name!";
  }
  
});



previousButton.addEventListener("click", () => {
  stepBackward();
});

nextButton.addEventListener("click", () => {
  stepForward();
});

mapSwitch.addEventListener("click", () => {
  mapToggle();
});

cameraSwitch.addEventListener("click", () => {
  cameraToggle();
});

directionsSwitch.addEventListener("click", () => {
  directionsPlayToggle();
});
