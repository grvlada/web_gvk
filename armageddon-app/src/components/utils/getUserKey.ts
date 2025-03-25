export const getUserKey = () => {
    let userKey = "";

    if (process.env.NODE_ENV === 'development') {
        return process.env.REACT_APP_API_KEY;
    }

    try {
        userKey = localStorage.getItem('API_KEY');
    } catch {
        userKey = 'DEMO_KEY';
    }

    if (!userKey) {
        userKey = 'DEMO_KEY';
    }
    return userKey;






};


