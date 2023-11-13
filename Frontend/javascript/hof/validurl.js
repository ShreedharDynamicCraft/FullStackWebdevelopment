function validateURL(url) {
    const pattern = /^(http|https):\/\/[\w\d\-._~:/?#@!$&'()*+,;=]+$/;
    
    if (pattern.test(url)) {
        return "Valid URL";
    } else {
        return "Invalid URL";
    }
}

// Test cases
const urls = [
    "http://www.example.com",
    "https://www.example.com",
    "http://123.example.com",
    "https://example.com/path",
    "ftp://invalid.com",
];

urls.forEach(url => {
    const result = validateURL(url);
    console.log(`${url}: ${result}`);
});
