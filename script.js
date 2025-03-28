* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f0f8ff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    position: relative;
    overflow: hidden;
}

.container {
    text-align: center;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 2;
}

h1 {
    color: #333;
    margin-bottom: 20px;
}

.timer-settings input {
    font-size: 18px;
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.timer-display {
    font-size: 40px;
    font-weight: bold;
    color: #0078D4;
    margin: 20px 0;
}

.controls button, .work-rest-buttons button {
    font-size: 18px;
    padding: 10px 20px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:active {
    transform: scale(0.98);
}

button:hover {
    opacity: 0.9;
}

#start {
    background-color: #4CAF50;
    color: white;
}

#pause {
    background-color: #FF9800;
    color: white;
}

#reset {
    background-color: #f44336;
    color: white;
}

.work-rest-buttons button {
    background-color: #4CAF50;
    color: white;
}

.stats {
    margin-top: 20px;
    font-size: 18px;
    color: #333;
}

#dancing-animal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}

#dancing-animal img {
    width: 150px;
    animation: dance 1s infinite;
}

@keyframes dance {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
}
