document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = 'https://files.slack.com';
    const params = new URLSearchParams(window.location.search);
    let delay = 0; // Delay in milliseconds
    params.forEach((value, key) => {
        if (key.startsWith('file')) {
            setTimeout(() => {
                const fullPath = baseUrl + value;
                const link = document.createElement('a');
                link.href = fullPath;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }, delay);
            delay += 2000; // Increase delay for each file
        }
    });
});


