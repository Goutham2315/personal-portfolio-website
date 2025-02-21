

    function downloadCV() {
        const link = document.createElement('a');
        link.href = 'Gowtham Minnela.docx'; // Replace with the actual path to your CV file
        link.download = 'Gowtham Minnela.docx'; // The name of the file to be downloaded
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    document.getElementById("hamburger").addEventListener("click", function() {
        const navItems = document.getElementById("nav-items");
        navItems.classList.toggle("show");
    });