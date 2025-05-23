document.addEventListener("DOMContentLoaded", () => {
    const sections = {
        home: document.getElementById("home"),
        levels: document.getElementById("levels"),
        ready: document.getElementById("ready"),
        docs: document.getElementById("docs"),
        quiz: document.getElementById("quiz"),
        result: document.getElementById("result")
    };
  
    const startBtn = document.getElementById("start-btn");
    const levelButtons = document.querySelectorAll(".level-btn");
    const readyYesBtn = document.getElementById("ready-yes");
    const readyNoBtn = document.getElementById("ready-no");
    const backBtn = document.getElementById("back-to-levels");
    const questionText = document.getElementById("quiz-text");
    const choicesContainer = document.getElementById("quiz-choices");
    const resultText = document.getElementById("result-text");
  
    let currentLevel = null;
    let currentQuestion = 0;
    let correctAnswers = 0;
  
    const questions = {
        easy: [
            { 
                question: "What does HTML stand for?",
                choices: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
                correct: 0
            },
            {
                question: "What tag is used to create a hyperlink in HTML?",
                choices: ["<link>", "<a>", "<href>"],
                correct: 1
            },
            {
                question: "What tag inserts an image?",
                choices: ["<img>", "<image>", "<pic>"],
                correct: 0
            },
            {
                question: "What does CSS stand for?",
                choices: ["Cascading Style Sheets", "Computer Style Syntax", "Creative Style Sheets"],
                correct: 0
            },
            {
                question: "How do you select a class in CSS?",
                choices: [".classname", "#classname", "classname"],
                correct: 0
            },
            {
                question: "Which language runs in the browser?",
                choices: ["PHP", "JavaScript", "Python"],
                correct: 1
            },
            { 
                question: "Which CSS property changes text color?",
                choices: ["font", "color", "background"],
                correct: 1
            },
            { 
                question: "What tag defines a paragraph?",
                choices: ["<p>", "<para>", "<text>"],
                correct: 0
            },
            {
                question: "What tag links an external CSS file?",
                choices: ["<script>", "<style>", "<link>"],
                correct: 2
            },
            { 
                question: "What is the default display value of a div?",
                choices: ["inline", "block", "none"],
                correct: 1
            },
            { 
                question: "Which attribute shows a text when image fails?",
                choices: ["alt", "title", "src"],
                correct: 0
            },
            { 
                question: "How do you refer to an ID in CSS?",
                choices: ["#id", ".id", "$id"],
                correct: 0
            },
            { 
                question: "What’s the correct CSS syntax?",
                choices: ["body {color: black;}", "body: color = black;", "body = color black;"],
                correct: 0
            },
            {
                 question: "Which property sets the font family?",
                 choices: ["font-family", "font-type", "text-font"],
                 correct: 0
                },
            { 
                question: "JavaScript is used for?",
                choices: ["Styling", "Structure", "Interactivity"],
                correct: 2
            }
        ],

        medium: [
            { 
                question: "What is the correct syntax for a JS function?",
                choices: ["function = myFunc()", "function myFunc()", "func myFunc()"],
                correct: 1
            },
            { 
                question: "Which HTTP method is used to update data?",
                choices: ["GET", "PUT", "POST"],
                correct: 1
            },
            { 
                question: "Which of these is a backend language?",
                choices: ["HTML", "JavaScript", "Node.js"],
                correct: 2 },
            {
                question: "Which database is NoSQL?",
                choices: ["MySQL", "MongoDB", "PostgreSQL"],
                correct: 1
            },
            { 
                question: "How do you create a variable in JS?",
                choices: ["var name;", "let name;", "both"],
                correct: 2
            },
            { 
                question: "Which operator checks type and value?",
                choices: ["==", "===", "="],
                correct: 1
            },
            { 
                question: "What does DOM stand for?",
                choices: ["Document Object Model", "Data Object Map", "Dynamic Output Manager"],
                correct: 0
            },
            { 
                question: "What is Express used for?",
                choices: ["Frontend styling", "Server routing", "Authentication"],
                correct: 1
            },
            { 
                question: "How do you write a JSON object?",
                choices: ["{ key: 'value' }", "[ key: value ]", "<key>value</key>"],
                correct: 0
            },
            { 
                question: "Which HTTP status code means 'Not Found'?",
                choices: ["200", "404", "500"],
                correct: 1
            },
            { 
                question: "What is Node.js?",
                choices: ["A runtime for JS", "A browser", "A database"],
                correct: 0
            },
            { 
                question: "What command installs a package with npm?",
                choices: ["npm install", "npm get", "npm create"],
                correct: 0
            },
            { 
                question: "Which is a JS framework?",
                choices: ["React", "Laravel", "Django"],
                correct: 0
            },
            {
                question: "What’s the command to start an Express server?",
                choices: ["node server.js", "run express", "express start"],
                correct: 0
            },
            { 
                question: "How do you send JSON in a fetch POST?",
                choices: ["JSON.stringify(data)", "JSON(data)", "data.stringify()"],
                correct: 0
            },
            {
                question: "Which method fetches data in JS?",
                choices: ["get()", "fetch()", "request()"],
                correct: 1
            },
            { 
                question: "What is a promise in JS?",
                choices: ["A future value", "A loop", "A variable"],
                correct: 0
            },
            { 
                question: "What’s the default port of Express?",
                choices: ["3000", "80", "5000"],
                correct: 0
            },
            {
                question: "Which method deletes data in MongoDB?",
                choices: ["removeOne()", "deleteOne()", "dropOne()"],
                correct: 1
            },
            { 
                question: "What is middleware in Express?", 
                choices: ["A function", "A file", "A plugin"], 
                correct: 0 
            }
        ],

        hard: [
            { 
                question: "What is the time complexity of binary search?",
                choices: ["O(n)", "O(log n)", "O(n^2)"],
                correct: 1
            },
            { 
                question: "Which language is used for machine learning?",
                choices: ["Python", "HTML", "CSS"],
                correct: 0
            },
            { 
                question: "What is a foreign key in SQL?",
                choices: ["A column linking two tables", "A CSS property", "A JS method"],
                correct: 0
            },
            { 
                question: "Which of these is a compiled language?",
                choices: ["Java", "Python", "JavaScript"],
                correct: 0
            },
            { 
                question: "What does CDN stand for?",
                choices: ["Content Delivery Network", "Code Design Network", "Central Data Node"],
                correct: 0
            },
            { 
                question: "What port does HTTPS use?",
                choices: ["80", "443", "21"],
                correct: 1
            },
            { 
                question: "What is Docker mainly used for?",
                choices: ["Deployment", "Containerization", "Design"],
                correct: 1
            },
            { 
                question: "Which command lists files in Unix?",
                choices: ["ls", "dir", "list"],
                correct: 0
            },
            { 
                question: "What is a thread in computing?",
                choices: ["A network protocol", "A subprocess", "An encryption method"],
                correct: 1
            },
            { 
                question: "What is the role of a compiler?",
                choices: ["Execute code", "Interpret code", "Translate source code into binary"],
                correct: 2
            },
            { 
                question: "Which of these is not an operating system?",
                choices: ["Ubuntu", "Windows", "Oracle"],
                correct: 2
            },
            { 
                question: "What is the function of RAM?",
                choices: ["Permanent storage", "Temporary memory", "Network communication"],
                correct: 1
            },
            { 
                question: "What is the principle of recursion?",
                choices: ["Repetition with a base case", "Loop without exit", "Function outside scope"],
                correct: 0
            },
            { 
                question: "Which protocol is used to transfer files?",
                choices: ["HTTP", "FTP", "SMTP"],
                correct: 1
            },
            { 
                question: "What is the result of 2 ** 3 in Python?",
                choices: ["5", "6", "8"],
                correct: 2
            },
            { 
                question: "Which tool is used to monitor network traffic?", 
                choices: ["Wireshark", "Postman", "MongoDB"],
                correct: 0
            },
            { 
                question: "What is an API?",
                choices: ["Application Programming Interface", "App Public Interface", "Advanced Program Interaction"],
                correct: 0
            },
            { 
                question: "Which of these is a NoSQL database?",
                choices: ["MySQL", "MongoDB", "PostgreSQL"],
                correct: 1
            },
            {
                question: "Which of the following is a package manager for Node.js?",
                choices: ["npm", "pip", "apt"],
                correct: 0
            },
            {
                question: "What is REST?",
                choices: ["A server", "A frontend library", "An architectural style for APIs"],
                correct: 2
            },
            {
                question: "Which of these is a hash algorithm?",
                choices: ["SHA-256", "AES", "RSA"],
                correct: 0
            },
            {
                question: "What is latency?",
                choices: ["Time delay in communication", "Code repetition", "Network size"],
                correct: 0
            },
            {
                question: "What does SSH stand for?",
                choices: ["Secure Shell", "Safe Server Host", "Simple Shell"],
                correct: 0
            },
            {
                question: "What is the main purpose of indexes in databases?",
                choices: ["Speed up queries", "Store data", "Encrypt rows"],
                correct: 0
            },
            {
                question: "Which protocol secures web traffic?",
                choices: ["HTTP", "SSH", "HTTPS"],
                correct: 2
            },
            { 
                question: "What is the output type of typeof null in JavaScript?",
                choices: ["null", "object", "undefined"],
                correct: 1
            },
            { 
                question: "Which Python keyword handles exceptions?",
                choices: ["try", "catch", "error"],
                correct: 0
            },
            { 
                question: "Which command creates a Git branch?",
                choices: ["git branch", "git new", "git switch"],
                correct: 0
            },
            { 
                question: "What does MVC stand for?",
                choices: ["Model View Controller", "Main Value Component", "Module Version Code"],
                correct: 0
            },
            { 
                question: "Which company created the V8 engine?",
                choices: ["Google", "Mozilla", "Microsoft"],
                correct: 0
            }
        ],         
    };
  
    function showSection(name) {
        document.querySelectorAll("section").forEach((sec) => {
            sec.classList.remove("active");
    });

    const sectionToShow = document.getElementById(name);
        if (sectionToShow) {
            sectionToShow.classList.add("active");
            
            const elements = sectionToShow.querySelectorAll(".typewriter");
            elements.forEach((el) => launchTypewriter(el));
        }
    }

    function loadQuestion() {
        const q = questions[currentLevel][currentQuestion];
        questionText.innerHTML = "";
        questionText.classList.add("typewriter");

        questionText.textContent = q.question;
        launchTypewriter(questionText, 25, () => {
            choicesContainer.innerHTML = "";
            
            q.choices.forEach((choice, index) => {
                const btn = document.createElement("button");
                btn.textContent = choice;
                btn.className = "quiz-button";
                btn.onclick = () => checkAnswer(index);
                choicesContainer.appendChild(btn);
            });
        });
    }
  
    function checkAnswer(selected) {
        const correct = questions[currentLevel][currentQuestion].correct;
        if (selected === correct) correctAnswers++;
        currentQuestion++;
        
        if (currentQuestion < questions[currentLevel].length) {
            loadQuestion();
        } else {
            showSection("result");
            resultText.textContent = `You got ${correctAnswers} out of ${questions[currentLevel].length} correct!`;
        }
    }
  
    startBtn.addEventListener("click", () => showSection("levels"));
  
    levelButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            currentLevel = btn.dataset.level;
            showSection("ready");
        });
    });
  
    readyYesBtn.addEventListener("click", () => {
        showSection("quiz");
        currentQuestion = 0;
        correctAnswers = 0;
        loadQuestion();
    });
  
    readyNoBtn.addEventListener("click", () => {
        showSection("docs");
    });
  
    backBtn.addEventListener("click", () => {
        showSection("levels");
    });
    
    showSection("home");
});