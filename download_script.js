document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    params.forEach((value, key) => {
        if (key.startsWith('file')) { // Assuming parameters are named file1, file2, etc.
            const link = document.createElement('a');
            link.href = value; // The value is expected to be the direct URL to the file
            link.download = ''; // Optional: You could parse the filename from the URL
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); // Clean up
        }
    });
});
