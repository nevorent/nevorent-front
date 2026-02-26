// src/services/authService.js
const API_URL = 'https://api.nevorent.com/auth';
const MOCK_USERS = {
    "chirias@test.com": { password: "123", name: "Ioan Chiriașul", role: "tenant" },
    "owner@test.com": { password: "123", name: "Mihai Proprietarul", role: "owner" },
    "service@test.com": { password: "123", name: "Echipa Tehnică", role: "maintenance" }
};
export const loginUser = async (email, password) => {
    // aici trebuie sa introduc logica de login 
    // try {
    //     const response = await fetch(`${API_URL}/login`, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ email, password })
    //     });
    //     if (!response.ok) {
    //         const errorData = await response.json();
    //         throw new Error(errorData.message || "Eroare la autentificare");
    //     }
    //     return await response.json(); //astept token si user 
    // }
    // catch (error) {
    //     throw error.message || "Eroare la autentificare";
    // }
    //de testare 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const foundUser = MOCK_USERS[email];

            if (foundUser && foundUser.password === password) {
                //am salvat in token si rolul userului pentru a putea verifica ulterior
                const fakeToken = `token-secret-${foundUser.role}`;

                resolve({
                    token: fakeToken,
                    user: { name: foundUser.name, role: foundUser.role }
                });
            } else {
                reject("Email sau parolă incorectă!");
            }
        }, 1500);
    });
};
export const verifyToken = async (token) => {
    // const response = await fetch('URL_BACKEND/verify', {
    //     method: 'GET',
    //     headers: {
    //         'Authorization': `Bearer ${token}` // Trimitem token-ul pentru validare
    //     }
    // });

    // if (!response.ok) throw new Error('Token invalid');

    // return await response.json();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // verific rolul imi trebuie pentru anumite pagini 
            if (token.includes("tenant")) {
                resolve({ name: "Ioan Chiriașul", role: "tenant" });
            } else if (token.includes("owner")) {
                resolve({ name: "Mihai Proprietarul", role: "owner" });
            } else if (token.includes("maintenance")) {
                resolve({ name: "Echipa Tehnică", role: "maintenance" });
            } else {
                reject("Sesiune expirată!");
            }
        }, 800);
    });
};

