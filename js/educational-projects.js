document.addEventListener("DOMContentLoaded", function() {
    const projectDetails = {
        "learn_and_play_for_kids": {
            title: "Learn and Play for Kids",
            image: "img/learn_and_play_for_kids.jpg",
            description: "Bachelor's thesis project for creating educational software for children."
        },
        "image_reconstruction": {
            title: "Image Reconstruction in Cybersecurity",
            image: "img/image_reconstruction.jpg",
            description: "Master's thesis focusing on techniques in artificial intelligence for image reconstruction."
        }
    };

    // Extract project parameter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project'); 

    // Check if the projectId exists in projectDetails
    if (projectDetails[projectId]) {
        const project = projectDetails[projectId];
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-image').src = project.image;  // Set correct image path
        document.getElementById('project-description').textContent = project.description;
    } else {
        // If no matching project is found, display error/fallback information
        document.getElementById('project-title').textContent = "Project Not Found";
        document.getElementById('project-image').src = "img/default.jpg";  // Fallback image
        document.getElementById('project-description').textContent = "Sorry, the project you're looking for doesn't exist.";
    }
});
