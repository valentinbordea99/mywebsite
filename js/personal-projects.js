document.addEventListener("DOMContentLoaded", function() {
    const projectDetails = {
        "project1": {
            title: "Project 1",
            image: "img/project1.jpg",
            description: "Description for personal project 1."
        },
        "project2": {
            title: "Project 2",
            image: "img/project2.jpg",
            description: "Description for personal project 2."
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');

    if (projectDetails[projectId]) {
        const project = projectDetails[projectId];
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-image').src = project.image;
        document.getElementById('project-description').textContent = project.description;
    } else {
        document.getElementById('project-title').textContent = "Project Not Found";
        document.getElementById('project-image').src = "img/default.jpg";
        document.getElementById('project-description').textContent = "Sorry, the project you're looking for doesn't exist.";
    }
});
