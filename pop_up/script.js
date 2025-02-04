function showHackMessage(event) {
    event.preventDefault(); // Prevent form submission
    alert("You Are Hacked!");
    document.body.innerHTML = '<h1 style="color: red; font-size: 50px;">YOU ARE HACKED!</h1>';
    return false;
}