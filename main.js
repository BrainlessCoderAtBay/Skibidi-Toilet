const buttons = document.querySelectorAll('button');
const description = document.querySelector('.description');

const buttonDescriptions = {
    'triangle-1-btn': 'This is the first triangle. It represents my passion for coding and creativity.',
    'triangle-2-btn': 'This is the second triangle. It symbolizes my dedication to learning and growth.',
    'triangle-3-btn': 'This is the third triangle. It stands for my commitment to teamwork and collaboration.',
    'triangle-4-btn': 'This is the fourth triangle. It reflects my adaptability and problem-solving skills.',
    'triangle-5-btn': 'This is the fifth triangle. It signifies my enthusiasm for innovation and technology.',
    'triangle-6-btn': 'This is the sixth triangle. It represents my resilience and determination.',
    'triangle-7-btn': 'This is the seventh triangle. It embodies my passion for making a positive impact.'
};
/*
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {

        const key = Object.keys(buttonDescriptions).find(cls =>
            button.classList.contains(cls)
        );

        description.textContent = buttonDescriptions[key] || 'No description available.';
    });
});
*/  
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