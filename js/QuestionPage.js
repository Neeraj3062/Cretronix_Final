const year = new Date().getFullYear();
const fourthOfJuly = new Date(year, 6, 4).getTime();
const fourthOfJulyNextYear = new Date(year + 1, 6, 4).getTime();
const month = new Date().getMonth();

// countdown
let timer = setInterval(function () {
  // get today's date
  const today = new Date().getTime();

  // get the difference
  let diff;
  if (month > 6) {
    diff = fourthOfJulyNextYear - today;
  } else {
    diff = fourthOfJuly - today;
  }

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    '<div class="days"> \
<div class="numbers">' +
    // days +
    '</div></div> \
<div class="hours"> \
<div class="numbers">' +
    hours +
    '</div></div> \
<div class="minutes"> \
<div class="numbers">' +
    minutes +
    '</div></div> \
<div class="seconds"> \
<div class="numbers">' +
    seconds +
    "</div></div> \
</div>";
}, 1000);


function submitTest() {
    confirm("Are you sure to end the test?");
  }

  var questionFlag = document.getElementById("questionFlag");
  var flagCheck = document.getElementById("flag");
  function flagSetting() {
    if (flagCheck.checked) {
      setFlag();
    } else {
      removeFlag();
    }
  }
  function removeFlag() {
    questionFlag.innerHTML = '<i class="bi bi-flag"></i>';
  }
  function setFlag() {
    questionFlag.innerHTML = '<i class="bi bi-flag-fill"></i>';
  }  

  function dis(val) {
    document.getElementById("result").value += val
  }


  function solve() {
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
  }


  function clr() {
    document.getElementById("result").value = ""
  }
  
  
  var opt1 = document.getElementById("opt1");
  var opt2 = document.getElementById("opt2");
  var opt3 = document.getElementById("opt3");
  var opt4 = document.getElementById("opt4");

  function remvBg() {
    opt1.style.boxShadow = 'none';
    opt2.style.boxShadow = 'none';
    opt3.style.boxShadow = 'none';
    opt4.style.boxShadow = 'none';
    opt2.style.backgroundColor = '#fff';
    opt4.style.backgroundColor = '#fff';
    opt3.style.backgroundColor = '#fff';
    opt1.style.backgroundColor = '#fff';
  }
  function changeBg1() {
    opt1.style.boxShadow = 'rgb(0 0 0 / 16%) 0px 1px 4px, #311b92 0px 0px 0px 3px';
    opt1.style.backgroundColor = '#98FB98		';
    opt2.style.boxShadow = 'none';
    opt3.style.boxShadow = 'none';
    opt4.style.boxShadow = 'none';
    opt2.style.backgroundColor = '#fff';
    opt3.style.backgroundColor = '#fff';
    opt4.style.backgroundColor = '#fff';
  }
  function changeBg2() {
    opt2.style.boxShadow = 'rgb(0 0 0 / 16%) 0px 1px 4px, #311b92 0px 0px 0px 3px';
    opt2.style.backgroundColor = '#98FB98		';
    opt1.style.boxShadow = 'none';
    opt3.style.boxShadow = 'none';
    opt4.style.boxShadow = 'none';
    opt1.style.backgroundColor = '#fff';
    opt3.style.backgroundColor = '#fff';
    opt4.style.backgroundColor = '#fff';
  }
  function changeBg3() {
    opt3.style.boxShadow = 'rgb(0 0 0 / 16%) 0px 1px 4px, #311b92 0px 0px 0px 3px';
    opt3.style.backgroundColor = '#98FB98		';
    opt2.style.boxShadow = 'none';
    opt1.style.boxShadow = 'none';
    opt4.style.boxShadow = 'none';
    opt2.style.backgroundColor = '#fff';
    opt1.style.backgroundColor = '#fff';
    opt4.style.backgroundColor = '#fff';
  }
  function changeBg4() {
    opt4.style.boxShadow = 'rgb(0 0 0 / 16%) 0px 1px 4px, #311b92 0px 0px 0px 3px';
    opt4.style.backgroundColor = '#98FB98		';
    opt2.style.boxShadow = 'none';
    opt3.style.boxShadow = 'none';
    opt1.style.boxShadow = 'none';
    opt2.style.backgroundColor = '#fff';
    opt3.style.backgroundColor = '#fff';
    opt1.style.backgroundColor = '#fff';
  }
  
  
    // grab everything we need
    const btn = document.querySelector(".mobile-menu-button");
    const sidebar = document.querySelector(".sidebar");

    // add our event listener for the click
    btn.addEventListener("click", () => {
      sidebar.classList.toggle("-translate-x-full");
    });
