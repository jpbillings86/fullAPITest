const request = require("supertest");

const { API_URL, USERNAME, PASSWORD } = require("../../tests/config");

async function getAuth(user,pw) {
    const response = await request(API_URL)
        .post("/auth")
        .send({ username: user, password: pw });
    return response;
}

async function generateAuthToken() {
    const response = await request(API_URL)
        .post("/auth")
        .send({ username: USERNAME, password: PASSWORD })
        .expect(200);
    const responseBody = JSON.parse(response.text);
    return responseBody.token;
}

module.exports = {
    getAuth,generateAuthToken
};