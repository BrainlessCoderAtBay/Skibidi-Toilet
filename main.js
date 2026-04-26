    const buttons = document.querySelectorAll('button');

    const description = document.getElementById('descNameInfo');

    const descSlots = [
        document.querySelector('.Info1Body'),
        document.querySelector('.Info2Body'),
        document.querySelector('.Info3Body'),
        document.querySelector('.Info4Body'),
        document.querySelector('.Info5Body'),
        document.querySelector('.Info6Body')
    ];

    const buttonDescriptions = {
        'triangle-1-btn': 'About Me',
        'triangle-2-btn': 'Projects',
        'triangle-3-btn': 'Experience',
        'triangle-4-btn': 'Academics',
        'triangle-5-btn': 'Github',
        'triangle-6-btn': 'Extracurricular',
        'triangle-7-btn': 'Contact'
    };

    const buttonQuestions = {
        'triangle-1-btn': [
            'Who <br> am I?',
            'What’s<br> my story?',
            'What is my passion?',
            'What are <br> my dreams?',
            'What <br> is my <br> role?',
            'What is my end goal?'
        ],
        'triangle-2-btn': [
            'What <br> have <br> I built?',
            'What <br> is my <br> best project?',
            'What technologies <br> I used?',
            'What am I <br> currently <br> working on?',
            'What <br> am I <br> proud <br> of?',
            'What I want to work on next?'
        ],
        'triangle-3-btn': [
            'Where <br> have I <br>worked?',
            'What <br>skill set <br> do I have?',
            'What skills did I gain?',
            'What <br> challenges <br> did I face?',
            'What <br> did I <br> learn?',
            'My past <br> positions'
        ],
        'triangle-4-btn': [
            'What <br> am I <br>studying?',
            'What <br> are my <br>best <br> subjects?',
            'What are my academic <br>goals?',
            'What <br> skills <br> did school <br> teach me?',
            'What <br> have I attained?',
            'What am I learning next?'
        ],
        'triangle-5-btn': [
            'What’s <br>on my <br>GitHub?',
            'What <br>code have <br>I written?',
            'What are my top repositories?',
            'How <br> active am I?',
            'How <br> long <br> have I coded?',
            'All of my work'
        ],
        'triangle-6-btn': [
            'What do <br>I do <br>outside <br>work?',
            'What <br> are my <br> hobbies?',
            'What activities am I in?',
            'What do I <br> enjoy about learning?',
            'How do <br> I spend <br> my time?',
            'What makes me excited?'
        ],
        'triangle-7-btn': [
            'How can <br>you <br>reach me?',
            'My IP <br> location?',
            'What’s my <br> email?',
            'When <br> can you <br> reach out?',
            'Links',
            'Spotify???'
        ]
    };

    const mainMenu = document.getElementById("scale-warper");
    const abtMe = document.getElementById("About-Me-Wrapper");



    function animateChange(key) {
        const questions = buttonQuestions[key];
        const title = buttonDescriptions[key];

        const allElements = [
            description,
            ...descSlots
        ];

        // STEP 1: OUT (straight down, no rotation changes)
        allElements.forEach(el => {
            el.classList.remove('anim-in', 'anim-show');
            el.classList.add('anim-out');
        });

        setTimeout(() => {

            // update text AFTER fade out
            description.innerHTML = title;

            descSlots.forEach((el, i) => {
                el.innerHTML = questions[i] || '';
            });

            // STEP 2: IN (from above)
            allElements.forEach(el => {
                el.classList.remove('anim-out');
                el.classList.add('anim-in');
            });

            requestAnimationFrame(() => {
                allElements.forEach(el => {
                    el.classList.add('anim-show');
                });
            });

        }, 180);
    }

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {

            const key = Object.keys(buttonDescriptions).find(cls =>
                button.classList.contains(cls)
            );

            if (key) animateChange(key);
        });
    });
    
    //TIME FUNCTION
    function updateTime() {
        const now = new Date();

        // TIME
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        // AM / PM
        const ampm = hours >= 12 ? "PM" : "AM";

        // convert to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // 0 becomes 12

        const hoursStr = hours.toString().padStart(2, '0');

        // DATE
        const day = now.getDate();
        const month = now.getMonth() + 1;
        const year = now.getFullYear().toString().slice(-2);

        const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
        const weekday = days[now.getDay()];

        const timeString = `${hoursStr}:${minutes}:${seconds} ${ampm}`;
        const dateString = `${day}/${month}/${year}-${weekday}`;

        document.getElementById("currentTime").innerHTML =
            `${timeString} <br> ${dateString}`;
    }

    setInterval(updateTime, 1000);
    updateTime();




let currentView = "menu";
let animating = false;


//About Me Transition
function aboutMe() {
    if (animating || currentView === "about") return;
    animating = true;
    currentView = "about";

    const wrapper = document.getElementById("aboutMe");
    const span = wrapper.querySelector("span");

    const aboutSection = document.getElementById("About-Me-Wrapper");
    const title = aboutSection.querySelector(".abtMeTitle");
    const abtMeCon = document.getElementById("AboutMeContainer");
    const abtMeBtn = document.querySelector(".About-Me-Button-Container");

    // hide menu text
    span.style.opacity = "0";

    document.querySelectorAll('#container > *').forEach(el => {
        if (el !== wrapper) {
            el.style.transition = "opacity 0.8s ease";
            el.style.opacity = "0";
        }
    });

    // animate button
    wrapper.style.transition = "transform 15s cubic-bezier(0.2, 1, 0.3, 1)";
    wrapper.style.transform = "translate(-1000%, -630%) scale(20) rotate(320deg)";

    setTimeout(() => {
        abtMeCon.style.opacity = "1";

        // TITLE RESET + SPIN
        title.style.transition = "none";
        title.style.opacity = "0";
        title.style.transform = "rotate(-360deg) scale(0.3)";
        title.offsetHeight;

        title.style.transition = "transform 0.8s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.5s ease";
        title.style.transform = "rotate(0deg) scale(1)";
        title.style.opacity = "1";

        // WRAPPER
        aboutSection.style.transition = "none";
        aboutSection.style.transform = "rotate(-360deg) scale(0.5)";
        aboutSection.offsetHeight;

        aboutSection.style.transition = "transform 0.8s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.5s ease";
        aboutSection.style.transform = "rotate(170deg) scale(1)";
        aboutSection.style.opacity = "1";

        setTimeout(() => {
            abtMeBtn.classList.add("show");
            wrapper.style.opacity = "0";
            animating = false;
        }, 300);

    }, 900);
}

function returnAboutMe() {
    if (animating || currentView === "menu") return;
    animating = true;
    currentView = "menu";

    const wrapper = document.getElementById("aboutMe");
    const aboutSection = document.getElementById("About-Me-Wrapper");
    const abtMeCon = document.getElementById("AboutMeContainer");
    const title = aboutSection.querySelector(".abtMeTitle");
    const abtMeBtn = document.querySelector(".About-Me-Button-Container");

    const span = wrapper.querySelector("span");

    // OUT animation (title + wrapper)
    aboutSection.style.transition = "transform 0.8s ease, opacity 0.5s ease";
    aboutSection.style.transform = "translate(1200px, -400px) rotate(360deg) scale(0.3)";
    aboutSection.style.opacity = "0";

    title.style.transition = "transform 0.8s ease, opacity 0.5s ease";
    title.style.transform = "rotate(360deg) scale(0.3)";
    title.style.opacity = "0";

    abtMeCon.style.transition = "opacity 0.6s ease";
    abtMeCon.style.opacity = "0";

    // reset triangle BEFORE fade-in
    wrapper.style.transition = "none";
    wrapper.style.removeProperty("transform");
    wrapper.style.opacity = "0";

    wrapper.offsetHeight;

    // fade menu back in
    setTimeout(() => {
        document.querySelectorAll('#container > *').forEach(el => {
            el.style.transition = "opacity 1s ease";
            el.style.opacity = "1";
        });

        const wrapper = document.getElementById("aboutMe");
        const span = wrapper.querySelector("span");

        span.style.opacity = "1";

        abtMeBtn.classList.remove("show");

        setTimeout(() => {
            animating = false;
        }, 600);

    }, 500);
}

//About Me info Box
function abtMeInfo1(){
    alert("My story");
}

function abtMeInfo2(){
    alert("Me Myself & I");
}

function abtMeInfo3(){
    alert("Dreams and Ambition");
}

function abtMeInfo4(){
    alert("Me Myself & I");
}

function abtMeInfo5(){
    alert("My story");
}

function abtMeInfo6(){
    alert("Me Myself & I");
}

function abtMeInfo7(){
    alert("End Goals");
}
//Projects Transition