const request = require("supertest");

const { API_URL } = require("../../tests/config");

async function generateAuthToken(user,pw) {
    const response = await request(API_URL)
        .post("/auth")
        .send({ username: user, password: pw });
    return response;
}

module.exports = {
    generateAuthToken  
};