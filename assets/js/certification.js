// Get the query parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const cert = urlParams.get('cert'); // Get 'cert' parameter from URL

// Define certification details
const certifications = {
    bitcoin: {
        title: "Introduction to Bitcoin",
        img: "img/Introduction_to_Bitcoin.jpg",
        description: "Certification on the fundamentals of Bitcoin and cryptocurrency."
    },
    cybersecurity: {
        title: "Introduction to Cybersecurity",
        img: "img/Introduction_to_cybersecurity.jpg",
        description: "Basic understanding of cybersecurity principles and practices."
    }
};

// Display the appropriate certification details
if (certifications[cert]) {
    // Find the certification section in the HTML and update it
    const certificationSection = document.querySelector('.certification-detail');
    
    certificationSection.innerHTML = `
        <h2>${certifications[cert].title}</h2>
        <img src="${certifications[cert].img}" alt="${certifications[cert].title}">
        <p>${certifications[cert].description}</p>
    `;
}
