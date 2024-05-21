// src/utils/csrf.js
export function getCSRFToken() {
    let csrfToken = null;
    if (document.cookie && document.cookie !== '') {
        document.cookie.split(';').forEach(cookie => {
            const parts = cookie.split('=');
            if (parts[0].trim() === 'csrftoken') {
                csrfToken = parts[1];
            }
        });
    }
    return csrfToken;
}
