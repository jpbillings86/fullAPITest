const request = require("supertest");
const { API_URL, USERNAME, PASSWORD } = require("../../tests/config");
const { generateAuthToken } = require("../auth/auth");

async function getBooking() {
    const response = await request(API_URL)
        .get("/booking");
    return response;
}

module.exports = {
    getBooking  
};