document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = 'https://files.slack.com';
    const params = new URLSearchParams(window.location.search);
    const instructions = document.createElement('p');
    instructions.textContent = 'Click each link below to download the files:';
    document.body.appendChild(instructions);
    
    params.forEach((value, key) => {
        if (key.startsWith('file')) {
            const fullPath = baseUrl + value;
            const link = document.createElement('a');
            link.href = fullPath;
            link.textContent = `Download ${value.split('/').pop()}`; // Display filename as link text
            link.download = '';
            document.body.appendChild(link);
            document.body.appendChild(document.createElement('br')); // Add a line break for readability
        }
    });
});


