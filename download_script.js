document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = 'https://files.slack.com';
    const params = new URLSearchParams(window.location.search);
    const downloadQueue = []; // Queue to hold all download URLs

    // Populate the download queue
    params.forEach((value, key) => {
        if (key.startsWith('file')) {
            const fullPath = baseUrl + value;
            downloadQueue.push(fullPath);
        }
    });

    function initiateDownload(url, delay) {
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = url;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, delay);
    }

    // Iterate over the download queue and initiate downloads with increasing delay
    downloadQueue.forEach((url, index) => {
        // Set a delay increment (e.g., 2000 milliseconds) for each file download
        const delayIncrement = 2000; // Adjust this value as needed
        initiateDownload(url, index * delayIncrement);
    });
});



