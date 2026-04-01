function openLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}

window.onclick = function(event) {
    let modal = document.getElementById("loginModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function searchFood() {
    let input = document.getElementById("searchInput").value;

    if (input === "") {
        alert("Please enter something to search!");
    } else {
        alert("You searched for: " + input);
    }
}
