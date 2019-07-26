document.getElementById("btn1").addEventListener("click", myName)
document.getElementById("btn2").addEventListener("click", mySchool)
document.getElementById("btn3").addEventListener("click", myCareer)
document.getElementById("btn4").addEventListener("click", myHobbies)


function myName() {
    if (document.getElementById("name").style.display == "block") {
        document.getElementById("name").style.display = "none";
    }  else {
            document.getElementById("name").style.display = "block"
      }
    document.getElementById("name").innerHTML = "My name is Risha Vankalapti. I'm currently 14 and I live in Round Rock, TX with my parents and my younger sister who will be starting middle school this comng year at Walsh.I lived in Carson City, NV until I was 8 and moved to Reno, NV in 3rd grade. A year after I moved to Round Rock and have been here since.";
}

function mySchool() {
    if (document.getElementById("school").style.display == "block") {
        document.getElementById("school").style.display = "none";
    }  else {
            document.getElementById("school").style.display = "block"
      }
    document.getElementById("school").innerHTML = "I just finished 8th grade at Walsh Middle School and am going to be a freshman at Round Rock HS. I'm going to be in the STEM academy, taking computer science. I've been in robotics for the past three years have competed as well, getting first place at regional competition with my team. I've taken orchestra and french for the past three years as my electives and plan to continue them in high school. I've also been a part of NJHS and volunteered with them. My favorite classes this year has been orchestra, science, LA, and Gateway to Tech.";
}

function myCareer() {
    if (document.getElementById("career").style.display == "block") {
        document.getElementById("career").style.display = "none";
    }  else {
            document.getElementById("career").style.display = "block"
      }
    document.getElementById("career").innerHTML = "I hope to pursue a field in STEM, specifically in Physics or AI/Robotics. I'm not sure where exactly I want to go to college yet but hopefully I'll know soon!";
}

function myHobbies() {
    if (document.getElementById("hobbies").style.display == "block") {
        document.getElementById("hobbies").style.display = "none";
    }  else {
            document.getElementById("hobbies").style.display = "block"
      }
    document.getElementById("hobbies").innerHTML = "I play two instruments, piano for 6 years and violin for 3. I absolutely reading and spend lots of time just wrapped up in a book. My favorite book is The Book Thief and my favorite series is either Keeper of the Lost Cities or the Black Witch Chronicles. I also love writing stories as well and drawing/craft projects.";
}