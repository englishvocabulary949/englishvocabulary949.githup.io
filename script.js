const questions = [
    { question: "Across?", answer: "diseberang" },
    { question: "Between?", answer: "diantara" },
    { question: "Around?", answer: "disekitar" },
    { question: "at the corner of?", answer: "disudut" },
    { question: "behind?", answer: "dibelakang" },
    { question: "beside?", answer: "disebelah" },
    { question: "among?", answer: " diantara " },
    { question: "in front of?", answer: "didepan" },
    { question: "next to?", answer: "disebelah" },
    { question: "near?", answer: "dekat" },
    { question: "opposite?", answer: "berlawanan" },
    { question: "cross?", answer: "menyebrang" },
    { question: "face?", answer: "menghadapi" },
    { question: "go straight?", answer: "jalan lurus" },
    { question: "overtake?", answer: "menyalip" },
    { question: "pass?", answer: "melewati" },
    { question: "turn back?", answer: "putar balik" },
    { question: "turn left?", answer: "belok kiri" },
    { question: "turn right?", answer: "belok kanan" },
    { question: "alley?", answer: "gang" },
    { question: "bend?", answer: "tikungan" },
    { question: "cross road?", answer: "simpang 4" },
    { question: "deat end street?", answer: "jalan buntu" },
    { question: "downhill?", answer: "turunan" },
    { question: "five intersection?", answer: "simpang 5" },
    { question: "highway?", answer: "jalan tol" },
    { question: "one way traffic?", answer: "jalan searah" },
    { question: "overpass?", answer: "jembatan penyeberangan" },
    { question: "shortcut?", answer: "jalan  pintas" },
    { question: "sidewalk?", answer: "trotoar" },
    { question: "speed bump?", answer: "polisi tidur" }, 
    { question: "street?", answer: "jalan" },
    { question: "t junction?", answer: "simpang 3" },
    { question: "take a round trip?", answer: "pulang pergi" }, 
    { question: "tiny path?", answer: "gang kecil" },
    { question: "traffic jam?", answer: "macet" },
    { question: "traffic light?", answer: "lampu lalin" },
    { question: "tunnel?", answer: "terowongan" },
    { question: "zebra crossing?", answer: "jelur penyeberangan" },
    { question: "misguided?", answer: "tersesat" },
];

let currentQuestionIndex;
let wrongAttempts = 0;

function getRandomQuestionIndex() {
    return Math.floor(Math.random() * questions.length);
}

function displayQuestion() {
    currentQuestionIndex = getRandomQuestionIndex();
    document.getElementById('question').innerText = questions[currentQuestionIndex].question;
    document.getElementById('answer').value = '';
    document.getElementById('message').innerText = '';
    document.getElementById('message').className = 'message'; // Reset class
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        document.getElementById('message').innerText = "Correct!!!!";
        document.getElementById('message').className = 'message correct'; // Add correct class
        wrongAttempts = 0; // Reset attempts
        setTimeout(displayQuestion, 1000); // Tampilkan pertanyaan baru setelah delay
    } else {
        wrongAttempts++;
        document.getElementById('message').innerText = "Wrong ???";
        document.getElementById('message').className = 'message wrong'; // Add wrong class
        if (wrongAttempts >= 3) {
            wrongAttempts = 0; // Reset attempts
            setTimeout(displayQuestion, 1000); // Tampilkan pertanyaan baru setelah delay
        }
    }
    document.getElementById('message').style.opacity = 1; // Show message
    document.getElementById('answer').focus();
}

function passQuestion() {
    wrongAttempts = 0; // Reset attempts
    displayQuestion(); // Tampilkan pertanyaan baru
}

window.onload = displayQuestion;
