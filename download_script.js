document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = 'https://files.slack.com';
    const params = new URLSearchParams(window.location.search);
    const downloadQueue = [];

    // Populate the queue
    params.forEach((value, key) => {
        if (key.startsWith('file')) {
            downloadQueue.push(baseUrl + value);
        }
    });

    function downloadFile(url) {
        const link = document.createElement('a');
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function processQueue() {
        if (downloadQueue.length > 0) {
            const url = downloadQueue.shift(); // Get the first URL from the queue
            downloadFile(url);

            // Wait for a short period before downloading the next file
            setTimeout(processQueue, 1000); // Adjust delay as needed
        }
    }

    processQueue();
});



