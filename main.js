const buttons = document.querySelectorAll('button');

const description = document.getElementById('descNameInfo');

const descSlots = [
    document.querySelector('.descInfo1'),
    document.querySelector('.descInfo2'),
    document.querySelector('.descInfo3'),
    document.querySelector('.descInfo4'),
    document.querySelector('.descInfo5'),
    document.querySelector('.descInfo6'),
    document.querySelector('.descInfo7')
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
        'Who am I?',
        'What’s my story?',
        'What is my passion?',
        'What are my dreams?',
        'Memento Mori',
        'What is my role?',
        'What is my end goal?'
    ],
    'triangle-2-btn': [
        'What have I built?',
        'What is my best project?',
        'What technologies I use?',
        'What problems have I solved?',
        'What am I proud of?',
        'What am I currently working on?',
        'What want to work on next?'
    ],
    'triangle-3-btn': [
        'Where have I worked?',
        'What experience do I have?',
        'What skills did I gain?',
        'What challenges did I face?',
        'What did I learn?',
        'What roles have I had?',
        'How have I grown?'
    ],
    'triangle-4-btn': [
        'What am I studying?',
        'What are my best subjects?',
        'What have I achieved?',
        'What skills did school teach me?',
        'What are my academic goals?',
        'What certifications do I have?',
        'What am I learning next?'
    ],
    'triangle-5-btn': [
        'What’s on my GitHub?',
        'What code have I written?',
        'What are my top repos?',
        'How active am I?',
        'What languages do I use?',
        'What projects are public?',
        'All of my work'
    ],
    'triangle-6-btn': [
        'What do I do outside work?',
        'What are my hobbies?',
        'What activities am I in?',
        'What do I enjoy about learning?',
        'How do I spend my time?',
        'What are my interests?',
        'What makes me excited?'
    ],
    'triangle-7-btn': [
        'How can you reach me?',
        'My IP location?',
        'What’s my email?',
        'Am I on social media?',
        'When can you reach out?',
        'Connections',
        'Spotify???'
    ]
};

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
        description.textContent = title;

        descSlots.forEach((el, i) => {
            el.textContent = questions[i] || '';
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
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // DATE
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear().toString().slice(-2); // last 2 digits

    const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    const weekday = days[now.getDay()];

    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = `${day}/${month}/${year}-${weekday}`;

    document.getElementById("currentTime").innerHTML =
        `${timeString} <br> ${dateString}`;
}

setInterval(updateTime, 1000);
updateTime();