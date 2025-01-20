const pages = {
    projects: `

    `,
    contact: `
        <div class="contact-page">
            <h2>Contact Me</h2>
            <form>
                <label for="name">Your Name:</label>
                <input type="text" id="name" placeholder="Enter your name" required>
                
                <label for="email">Your Email:</label>
                <input type="email" id="email" placeholder="Enter your email" required>
                
                <label for="message">Your Message:</label>
                <textarea id="message" rows="5" placeholder="Enter your message" required></textarea>
                
                <button type="submit">Send</button>
            </form>
        </div>
    `,
    about: `
        <div class="about-page">
            <h2>About Me</h2>
            <div class="about-content">
                <div class="about-image">
                    <img src="meme.png.jpg" alt="Your Name">
                </div>
                <div class="about-text">
                    <p>Hi there! I'm Shahd. I am a multidisciplinary student hailing from Jordan but currently based in Berlin. 
                    Enjoying all facets of Design with a new-found interest in branding and marketing.</p>
                </div>
            </div>
        </div>
    `,
    home: `
        <main class="gallery">
            <div class="item"><a href="project1.html"><img src="image 1.png" alt="Project 1"></a></div>
            <div class="item"><a href="project2.html"><img src="image 2.jpg" alt="Project 2"></a></div>
            <div class="item"><a href="project3.html"><img src="image 4.png" alt="Project 3"></a></div>
            <div class="item"><a href="project4.html"><img src="image 5.png" alt="Project 4"></a></div>
            <div class="item"><a href="project5.html"><img src="image 7.png" alt="Project 5"></a></div>
            <div class="item"><a href="project6.html"><img src="image 8.png" alt="Project 6"></a></div>
        </main>
    `
};

const content = document.getElementById('content');
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const page = this.getAttribute('data-page');
        content.innerHTML = pages[page];
    });
});


document.getElementById('home-link').addEventListener('click', function (e) {
    e.preventDefault();
    content.innerHTML = pages.home;
});

const snowflakes = 400;
const height = window.innerHeight; 
const width = window.innerWidth; 
let y = -1200;

function setup() {
    let myCanvas = createCanvas(width, height);
    myCanvas.parent('p5_sketch');
    frameRate(10);
}

function draw() {
    background('black');
    fill(255);
    noStroke();

    for (let s = 0; s < snowflakes; s++) {
        circle(random(width), y + random(1200), random(1, 6));
    }

    y += 20;

    if (y > 0) {
        y = -600;
    }
}