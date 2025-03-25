document.addEventListener("DOMContentLoaded", function() {
    const projectDetails = {
        "TikTokGame": {
            title: "TikTok Interactive Game",
            image: "img/triviaquizloading.jpg",
            description: "API-based TikTok Live Trivia Game."
        },
        "RFIDsecurity": {
            title: "RFID Security Project",
            image: "img/rfid125khz.jpg",
            description: "Exploring Android NFC for 13.56 MHz RFID card emulation."
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');

    if (projectDetails[projectId]) {
        const project = projectDetails[projectId];
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-description').textContent = project.description;
    } else {
        document.getElementById('project-title').textContent = "Project Not Found";
        document.getElementById('project-description').textContent = "Sorry, the project you're looking for doesn't exist.";
    }
});
