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
            'Bucket <br> list',
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

    const mainMenu = document.getElementById("scale-wrapper");
    const menuContainer = document.getElementById("container");
    const abtMe = document.getElementById("About-Me-Wrapper");

    function setMainMenuInteractivity(enabled) {
        if (!menuContainer) return;
        menuContainer.style.pointerEvents = enabled ? "" : "none";
    }

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
    setMainMenuInteractivity(false);

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

//About Me info Box
const aboutMeTablet = document.getElementById('aboutMeTablet');
const aboutMeTabletTitle = document.getElementById('aboutMeTabletTitle');
const aboutMeTabletText = document.getElementById('aboutMeTabletText');

const academicsTablet = document.getElementById('academicsTablet');
const academicsTabletTitle = document.getElementById('academicsTabletTitle');
const academicsStat1Label = document.getElementById('academicsStat1Label');
const academicsStat1Value = document.getElementById('academicsStat1Value');
const academicsStat2Label = document.getElementById('academicsStat2Label');
const academicsStat2Value = document.getElementById('academicsStat2Value');
const academicsStat3Card = document.getElementById('academicsStat3Card');
const academicsStat3Label = document.getElementById('academicsStat3Label');
const academicsStat3Value = document.getElementById('academicsStat3Value');

const aboutMeButtonContent = {
    abtMeInfo1: {
        title: 'My Story',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquip ex ea commodo consequat.'
    },
    abtMeInfo2: {
        title: 'Me Myself & I',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    abtMeInfo3: {
        title: 'Dreams',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    abtMeInfo4: {
        title: 'Bucket List',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.'
    },
    abtMeInfo5: {
        title: 'Passion',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.'
    },
    abtMeInfo6: {
        title: 'Extra Facts',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta.'
    },
    abtMeInfo7: {
        title: 'Goals',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in.'
    }
};

const academicsButtonContent = {
    acadInfo1: {
        title: 'English',
        stats: [
            { label: 'ENG2D1', value: '86' },
            { label: 'NBE3U1', value: '92' },
            { label: 'X', value: '80' }
        ]
    },
    acadInfo2: {
        title: 'Mathematics',
        stats: [
            { label: 'MPM2D1', value: '97' },
            { label: 'MCR3U1', value: '90' },
            { label: 'X', value: '75' }
        ]
    },
    acadInfo3: {
        title: 'Chemistry',
        stats: [
            { label: 'SCH3U1', value: '91' },
            { label: 'X', value: '60' }
        ]
    },
    acadInfo4: {
        title: 'Physics',
        stats: [
            { label: 'X', value: '77' },
            { label: 'X', value: '69' }
        ]
    },
    acadInfo5: {
        title: 'Computer Science',
        stats: [
            { label: 'ICD2O1', value: '84' },
            { label: 'ISC3U1', value: '98' },
            { label: 'X', value: '88' }
        ]
    },
    acadInfo6: {
        title: 'Computer Engineering',
        stats: [
            { label: 'TEJ2O1', value: '90' },
            { label: 'X', value: '72' },
            { label: 'X', value: '78' }
        ]
    },
    acadInfo7: {
        title: 'Other',
        stats: [
            { label: 'TCJ2O1', value: '85' },
            { label: 'GLC2OH', value: '93' },
            { label: 'CHV2OH', value: '89' }
        ]
    }
};

function showAboutMeTablet(key) {
    if (!aboutMeTablet) return;
    const content = aboutMeButtonContent[key] || {};
    aboutMeTabletTitle.textContent = content.title || 'About Me';
    aboutMeTabletText.textContent = content.text || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    aboutMeTablet.classList.add('show');
}

function hideAboutMeTablet() {
    if (!aboutMeTablet) return;
    aboutMeTablet.classList.remove('show');
}

function showAcademicsTablet(key) {
    if (!academicsTablet) return;
    const content = academicsButtonContent[key] || {};
    academicsTabletTitle.textContent = content.title || 'Academics';

    const stats = content.stats || [
        { label: 'Stat 1', value: '0' },
        { label: 'Stat 2', value: '0' }
    ];

    academicsStat1Label.textContent = stats[0]?.label || '';
    academicsStat1Value.textContent = stats[0]?.value || '';
    academicsStat2Label.textContent = stats[1]?.label || '';
    academicsStat2Value.textContent = stats[1]?.value || '';

    if (stats[2]) {
        academicsStat3Card.style.display = '';
        academicsStat3Label.textContent = stats[2].label;
        academicsStat3Value.textContent = stats[2].value;
    } else {
        academicsStat3Card.style.display = 'none';
        academicsStat3Label.textContent = '';
        academicsStat3Value.textContent = '';
    }

    academicsTablet.classList.add('show');
}

function hideAcademicsTablet() {
    if (!academicsTablet) return;
    academicsTablet.classList.remove('show');
}

const aboutMeContainer = document.getElementById('AboutMeContainer');
if (aboutMeContainer) {
    aboutMeContainer.addEventListener('click', (event) => {
        if (!aboutMeTablet.contains(event.target) && !event.target.closest('button')) {
            hideAboutMeTablet();
        }
    });
}

const academicsContainer = document.getElementById('AcademicsContainer');
if (academicsContainer) {
    academicsContainer.addEventListener('click', (event) => {
        if (!academicsTablet.contains(event.target) && !event.target.closest('button')) {
            hideAcademicsTablet();
        }
    });
}

if (aboutMeTablet) {
    aboutMeTablet.addEventListener('click', () => {
        hideAboutMeTablet();
    });
}

if (academicsTablet) {
    academicsTablet.addEventListener('click', () => {
        hideAcademicsTablet();
    });
}

function abtMeInfo1(){
    showAboutMeTablet('abtMeInfo1');
}

function abtMeInfo2(){
    showAboutMeTablet('abtMeInfo2');
}

function abtMeInfo3(){
    showAboutMeTablet('abtMeInfo3');
}

function abtMeInfo4(){
    showAboutMeTablet('abtMeInfo4');
}

function abtMeInfo5(){
    showAboutMeTablet('abtMeInfo5');
}

function abtMeInfo6(){
    showAboutMeTablet('abtMeInfo6');
}

function abtMeInfo7(){
    showAboutMeTablet('abtMeInfo7');
}

function acadInfo1(){
    showAcademicsTablet('acadInfo1');
}

function acadInfo2(){
    showAcademicsTablet('acadInfo2');
}

function acadInfo3(){
    showAcademicsTablet('acadInfo3');
}

function acadInfo4(){
    showAcademicsTablet('acadInfo4');
}

function acadInfo5(){
    showAcademicsTablet('acadInfo5');
}

function acadInfo6(){
    showAcademicsTablet('acadInfo6');
}

function acadInfo7(){
    showAcademicsTablet('acadInfo7');
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

    hideAboutMeTablet();

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

        setMainMenuInteractivity(true);

        const wrapper = document.getElementById("aboutMe");
        const span = wrapper.querySelector("span");

        span.style.opacity = "1";

        abtMeBtn.classList.remove("show");

        setTimeout(() => {
            animating = false;
        }, 600);

    }, 500);
}
//Academics Transition
function academics() {
    if (animating || currentView === "academics") return;
    animating = true;
    currentView = "academics";
    setMainMenuInteractivity(false);

    const wrapper = document.getElementById("academics");
    const academicsCon = document.getElementById("AcademicsContainer");
    const academicsSection = document.getElementById("Academics-Wrapper");
    const academicsBtn = document.querySelector(".Academics-Button-Container");

    const title = academicsSection.querySelector(".acadTitle");

    // SHOW container FIRST
    academicsCon.style.display = "block";
    academicsCon.style.opacity = "0";

    // prepare menu fade
    const menuItems = Array.from(document.querySelectorAll('#container > *'));
    menuItems.forEach(el => {
        if (el !== wrapper) {
            el.style.transition = "opacity 0.8s ease";
        }
    });

    requestAnimationFrame(() => {
        menuItems.forEach(el => {
            if (el !== wrapper) el.style.opacity = "0";
        });
    });

    // big zoom animation from menu button
    wrapper.style.transition = "transform 2s cubic-bezier(0.2, 1, 0.3, 1)";
    wrapper.style.transform = "translate(-300%, -100%) scale(2) rotate(120deg)";

    setTimeout(() => {

        // fade in container
        academicsCon.style.transition = "opacity 0.4s ease";
        academicsCon.style.opacity = "1";

        // reset title animation
        title.style.transition = "none";
        title.style.opacity = "0";
        title.style.transform = "rotate(-360deg) scale(0.3)";
        title.offsetHeight;

        title.style.transition = "transform 0.8s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.5s ease";
        title.style.transform = "rotate(0deg) scale(1)";
        title.style.opacity = "1";

        // wrapper animation
        academicsSection.style.transition = "none";
        academicsSection.style.transform = "rotate(-360deg) scale(0.5)";
        academicsSection.offsetHeight;

        academicsSection.style.transition =
            "transform 0.8s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.5s ease";

        academicsSection.style.transform = "rotate(170deg) scale(1)";
        academicsSection.style.opacity = "1";

        // IMPORTANT: force button animation AFTER layout is ready
        requestAnimationFrame(() => {
            academicsBtn.classList.add("show");
        });

        setTimeout(() => {
            wrapper.style.opacity = "0";
            animating = false;
        }, 300);

    }, 600);
}

function returnAcademics() {
    if (animating || currentView === "menu") return;
    animating = true;
    currentView = "menu";

    const wrapper = document.getElementById("academics");
    const academicsSection = document.getElementById("Academics-Wrapper");
    const academicsCon = document.getElementById("AcademicsContainer");
    const title = academicsSection.querySelector(".acadTitle");
    const academicsBtn = document.querySelector(".Academics-Button-Container");

    const span = wrapper.querySelector("span");

    // OUT animation (title + wrapper)
    academicsSection.style.transition = "transform 0.8s ease, opacity 0.5s ease";
    academicsSection.style.transform = "translate(1200px, -400px) rotate(360deg) scale(0.3)";
    academicsSection.style.opacity = "0";

    title.style.transition = "transform 0.8s ease, opacity 0.5s ease";
    title.style.transform = "rotate(360deg) scale(0.3)";
    title.style.opacity = "0";

    academicsCon.style.transition = "opacity 0.6s ease";
    academicsCon.style.opacity = "0";

    hideAcademicsTablet();

    // reset triangle BEFORE fade-in
    wrapper.style.transition = "none";
    wrapper.style.removeProperty("transform");
    wrapper.style.opacity = "0";

    wrapper.offsetHeight;

    // fade menu back in
    setTimeout(() => {
        academicsCon.style.display = "none";

        document.querySelectorAll('#container > *').forEach(el => {
            el.style.transition = "opacity 1s ease";
            el.style.opacity = "1";
        });

        setMainMenuInteractivity(true);

        const wrapper = document.getElementById("academics");
        const span = wrapper.querySelector("span");

        span.style.opacity = "1";

        academicsBtn.classList.remove("show");

        setTimeout(() => {
            animating = false;
        }, 600);

    }, 500);
}

function github() {
    window.open('https://github.com/BrainlessCoderAtBay')
}

// Contact Transition
function contactTransition() {
    if (animating || currentView === "contact") return;
    animating = true;
    currentView = "contact";
    setMainMenuInteractivity(false);

    const wrapper = document.querySelector('.triangle-7-wrapper');
    if (!wrapper) { animating = false; return; }
    const span = wrapper.querySelector('span');

    const contactCon = document.getElementById('Contact-Container');
    const contactWrapper = document.getElementById('Contact-Wrapper');
    const title = contactWrapper ? contactWrapper.querySelector('.contactTitle') : null;

    // hide menu text quickly
    if (span) span.style.opacity = '0';

    // fade other menu items
    document.querySelectorAll('#container > *').forEach(el => {
        if (el !== wrapper) el.style.transition = 'opacity 0.8s ease';
    });
    requestAnimationFrame(() => {
        document.querySelectorAll('#container > *').forEach(el => { if (el !== wrapper) el.style.opacity = '0'; });
    });

    // drop wrapper down out of frame (slower, rotating while falling)
    wrapper.style.transition = 'transform 10.6s cubic-bezier(0.2,1,0.3,1), opacity 0.6s ease';
    wrapper.style.transform = 'translateY(2000px)';
    wrapper.style.opacity = '0';

    setTimeout(() => {
        // show contact container and fade in
        if (contactCon) {
            contactCon.style.display = 'block';
            contactCon.style.opacity = '0';
            contactCon.style.transition = 'opacity 0.4s ease';
            contactCon.style.opacity = '1';
        }

        // ensure contact wrapper itself is visible
        if (contactWrapper) {
            contactWrapper.classList.remove('show');
            contactWrapper.offsetHeight;
            contactWrapper.classList.add('show');
            contactWrapper.style.pointerEvents = '';
        }

        // animate contact title falling from top
        if (title) {
            title.classList.remove('show');
            title.offsetHeight;
            title.classList.add('show');
        }

        // animate buttons in
        const contactBtnContainer = document.querySelector('.Contact-Button-Container');
        if (contactBtnContainer) {
            requestAnimationFrame(() => {
                contactBtnContainer.classList.add('show');
            });
        }

        setTimeout(() => {
            animating = false;
        }, 800);
    }, 1600);
}

function returnContact() {
    if (animating || currentView === "menu") return;
    animating = true;
    currentView = "menu";

    const wrapper = document.querySelector('.triangle-7-wrapper');
    const contactCon = document.getElementById('Contact-Container');
    const contactWrapper = document.getElementById('Contact-Wrapper');
    const title = contactWrapper ? contactWrapper.querySelector('.contactTitle') : null;

    // OUT: hide contact content
    if (contactCon) {
        contactCon.style.transition = 'opacity 0.5s ease';
        contactCon.style.opacity = '0';
    }

    if (title) {
        title.classList.remove('show');
    }

    if (contactWrapper) {
        contactWrapper.classList.remove('show');
        contactWrapper.style.pointerEvents = 'none';
    }

    const contactBtnContainer = document.querySelector('.Contact-Button-Container');
    if (contactBtnContainer) {
        contactBtnContainer.classList.remove('show');
    }

    // bring menu back
    setTimeout(() => {
        if (contactCon) contactCon.style.display = 'none';

        document.querySelectorAll('#container > *').forEach(el => {
            el.style.transition = 'opacity 1s ease';
            el.style.opacity = '1';
        });

        setMainMenuInteractivity(true);

        if (wrapper) {
            const span = wrapper.querySelector('span');
            if (span) span.style.opacity = '1';
            wrapper.style.removeProperty('transform');
            wrapper.style.opacity = '1';
        }

        setTimeout(() => {
            animating = false;
        }, 600);
    }, 500);
}

// wire contact button in main menu
const contactButton = document.querySelector('.triangle-7-btn');
if (contactButton) contactButton.addEventListener('click', contactTransition);


//Projects

function projects() {
    if (animating || currentView === "projects") return;
    animating = true;
    currentView = "projects";
    setMainMenuInteractivity(false);

    const wrapper = document.querySelector('.triangle-2-wrapper');
    const span = wrapper.querySelector('span');
    const projectsCon = document.getElementById('ProjectsContainer');
    const projectsSection = document.getElementById('Projects-Wrapper');
    const title = projectsSection.querySelector('.projTitle');
    const projectsBtn = document.querySelector('.Projects-Button-Container');

    projectsCon.style.display = 'block';
    projectsCon.style.opacity = '0';

    // main menu

    document.querySelectorAll('#container > *').forEach(el => {
        if (el !== wrapper) {
            el.style.transition = 'opacity 0.8s ease';
            el.style.opacity = '0';
        }
    });


    //Project button animation (transfrom at the opposite direction to where the longest edge is facing, while also scaling up without rotating)
    wrapper.style.transition = 'transform 6.9s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.4s ease';
    wrapper.style.transform = 'translate(-420%, -200%) scale(1.8)';

    // Project Title
    setTimeout(() => {
        projectsCon.style.transition = 'opacity 0.4s ease';
        projectsCon.style.opacity = '1';

        title.style.transition = 'none';
        title.style.opacity = '0';
        title.style.transform = 'translateX(-120%) scale(0.3)';
        title.offsetHeight;
        title.style.transition = 'transform 0.8s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.5s ease';
        title.style.transform = 'translateX(0) scale(1)';
        title.style.opacity = '1';

        projectsSection.style.transition = 'none';
        projectsSection.style.transform = 'scale(0.5)';
        projectsSection.style.opacity = '0';
        projectsSection.offsetHeight;

        projectsSection.style.transition = 'transform 0.8s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.5s ease';
        projectsSection.style.transform = 'scale(1)';
        projectsSection.style.opacity = '1';

        requestAnimationFrame(() => {
            if (projectsBtn) projectsBtn.classList.add('show');
        });

        setTimeout(() => {
            if (span) span.style.opacity = '0';
            wrapper.style.opacity = '0';
            animating = false;
        }, 300);
    }, 500);
}

function returnProjects() {
    if (animating || currentView === 'menu') return;
    animating = true;
    currentView = 'menu';

    const wrapper = document.querySelector('.triangle-2-wrapper');
    const span = wrapper.querySelector('span');
    const projectsCon = document.getElementById('ProjectsContainer');
    const projectsSection = document.getElementById('Projects-Wrapper');
    const title = projectsSection.querySelector('.projTitle');
    const projectsBtn = document.querySelector('.Projects-Button-Container');

    projectsSection.style.transition = 'transform 0.8s ease, opacity 0.5s ease';
    projectsSection.style.transform = 'scale(0.3)';
    projectsSection.style.opacity = '0';

    title.style.transition = 'transform 0.8s ease, opacity 0.5s ease';
    title.style.transform = 'scale(0.3)';
    title.style.opacity = '0';

    projectsCon.style.transition = 'opacity 0.6s ease';
    projectsCon.style.opacity = '0';

    wrapper.style.transition = 'none';
    wrapper.style.removeProperty('transform');
    wrapper.style.opacity = '0';
    wrapper.offsetHeight;

    setTimeout(() => {
        if (projectsCon) projectsCon.style.display = 'none';

        document.querySelectorAll('#container > *').forEach(el => {
            el.style.transition = 'opacity 1s ease';
            el.style.opacity = '1';
        });

        setMainMenuInteractivity(true);

        if (span) span.style.opacity = '1';
        if (projectsBtn) projectsBtn.classList.remove('show');

        setTimeout(() => {
            animating = false;
        }, 600);
    }, 500);
}


const list = document.getElementById("projectList");
const thumb = document.querySelector(".project-thumb");

function updateThumb() {

    const maxScroll =
        list.scrollHeight - list.clientHeight;

    const maxThumb =
        500 - thumb.offsetHeight;

    const ratio =
        list.scrollTop / maxScroll;

    thumb.style.top =
        ratio * maxThumb + "px";
}

list.addEventListener("scroll", updateThumb);
updateThumb();

let dragging = false;

thumb.addEventListener("mousedown", () => {
    dragging = true;
});

document.addEventListener("mouseup", () => {
    dragging = false;
});

document.addEventListener("mousemove", e => {

    if(!dragging) return;

    const track =
        document.querySelector(".project-scrollbar");

    const rect =
        track.getBoundingClientRect();

    let y =
        e.clientY - rect.top;

    const max =
        track.offsetHeight - thumb.offsetHeight;

    y = Math.max(0, Math.min(y, max));

    thumb.style.top = y + "px";

    const ratio = y / max;

    list.scrollTop =
        ratio *
        (list.scrollHeight - list.clientHeight);
});