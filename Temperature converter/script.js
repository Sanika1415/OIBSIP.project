let count = 0;

// Theme toggle
function toggleTheme() {
    document.body.dataset.theme =
        document.body.dataset.theme === "dark" ? "light" : "dark";
}

// Convert temperature
function convertTemperature() {
    let input = document.getElementById("temperatureInput").value;
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;

    if (!input) return;

    let temp = parseFloat(input);
    let result;

    if (from === "c") {
        result = to === "f" ? (temp * 9/5) + 32 :
                 to === "k" ? temp + 273.15 : temp;
    }

    if (from === "f") {
        result = to === "c" ? (temp - 32) * 5/9 :
                 to === "k" ? ((temp - 32) * 5/9) + 273.15 : temp;
    }

    if (from === "k") {
        result = to === "c" ? temp - 273.15 :
                 to === "f" ? ((temp - 273.15) * 9/5) + 32 : temp;
    }

    document.getElementById("resultValue").innerText = result.toFixed(2);
    document.getElementById("resultUnit").innerText = to.toUpperCase();
    document.getElementById("result").classList.add("show");

    // update count
    count++;
    document.getElementById("conversionCount").innerText = count;

    addHistory(input, from, to, result);
}

// Swap
function swapUnits() {
    let from = document.getElementById("fromUnit");
    let to = document.getElementById("toUnit");
    [from.value, to.value] = [to.value, from.value];
}

// Clear
function clearInput() {
    document.getElementById("temperatureInput").value = "";
}

// Copy
function copyResult() {
    let text = document.getElementById("resultValue").innerText;
    navigator.clipboard.writeText(text);
    alert("Copied!");
}

// History
function addHistory(input, from, to, result) {
    let history = document.getElementById("history");

    let item = document.createElement("div");
    item.className = "history-item";
    item.innerText = `${input} ${from} → ${result.toFixed(2)} ${to}`;

    history.prepend(item);
}

// Particles (simple)
function createParticles() {
    const container = document.getElementById("particles");

    for (let i = 0; i < 30; i++) {
        let p = document.createElement("div");
        p.className = "particle";
        p.style.left = Math.random() * 100 + "vw";
        p.style.animationDuration = (10 + Math.random() * 20) + "s";
        container.appendChild(p);
    }
}

createParticles();
