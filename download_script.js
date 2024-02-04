document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = 'https://boostagentur.slack.com/files';
    const fileUrls = [];

    const params = new URLSearchParams(window.location.search);
    params.forEach((value, key) => {
        if (key.startsWith('file')) {
            const fullPath = baseUrl + value; // Construct full URL
            fileUrls.push(fullPath); // Store for sequential redirect
        }
    });

    // Function to sequentially redirect to each URL
    function redirectToFilesSequentially(index) {
        if (index < fileUrls.length) {
            window.location.href = fileUrls[index];
            // Schedule next redirect after a delay to give user time to initiate download
            setTimeout(() => redirectToFilesSequentially(index + 1), 2000); // 2 seconds delay
        }
    }

    // Start redirecting process
    if (fileUrls.length > 0) {
        redirectToFilesSequentially(0);
    }
});
