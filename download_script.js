document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = 'https://files.slack.com';
    const params = new URLSearchParams(window.location.search);
    params.forEach((value, key) => {
        if (key.startsWith('file')) { // Assuming parameters are named file1, file2, etc.
            const fullPath = baseUrl + value; // Prepend base URL to the file path
            const link = document.createElement('a');
            link.href = fullPath;
            link.download = ''; // Optional: You could parse the filename from the URL
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); // Clean up
        }
    });
});



