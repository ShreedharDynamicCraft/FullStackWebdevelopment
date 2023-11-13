function validateLinkedInProfileURL(url) {
    const pattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    if (pattern.test(url)) {
        return "Valid LinkedIn profile URL";
    } else {
        return "Invalid LinkedIn profile URL";
    }
}

// Test cases
const profileURLs = [
    "https://www.linkedin.com/in/johndoe",
    "https://www.linkedin.com/in/jane_doe",
    "https://www.linkedin.com/in/12345",
    "https://www.linkedin.com/in/my_profile-123",
    "https://www.linkedin.com/in/long_username_with_numbers_1234567890",
    "https://www.linkedin.com/in/invalid/extra_part",
    "https://www.linkedin.com/profiles/in/johndoe", // Invalid format
    "https://www.linkedin.com/in/username-with-extra-hyphen-", // Invalid format
];

profileURLs.forEach(url => {
    const result = validateLinkedInProfileURL(url);
    console.log(`${url}: ${result}`);
});
