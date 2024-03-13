const request = require("supertest");
const { generateAuthToken } = require("../../endpoints/auth/auth");
const { USERNAME, PASSWORD, TEST_TIMEOUT } = require("../config");

describe("GET Auth Endpoint", () => {
    // Happy path test
    test.concurrent("GET Auth token with a valid username and password", async () => {
        const response = await generateAuthToken(USERNAME,PASSWORD);
        //Verify Auth token call returns a 200
        expect(response.statusCode).toEqual(200);
        //Parse the body of the response
        const responseBody = JSON.parse(response.text);
        //Verify response text has a token with a value
        expect(responseBody.token).not.toBeNull();
    },TEST_TIMEOUT);
    // Valid user but invalid password
    test.concurrent("Attempt to GET Auth token with a valid username but an invalid password", async () => {
        const response = await generateAuthToken(USERNAME,"invalidPassword");
        //Verify Auth token call returns a 200
        //NOTE: This should probably be a 401 by industry standards
        expect(response.statusCode).toEqual(200);
        //Parse the body of the response
        const responseBody = JSON.parse(response.text);
        //Verify response text has expected error
        expect(responseBody.reason).toEqual("Bad credentials");
    },TEST_TIMEOUT);
    // Valid user but null password
    test.concurrent("Attempt to GET Auth token with a valid username but a null password", async () => {
        const response = await generateAuthToken(USERNAME,null);
        //Verify Auth token call returns a 200
        //NOTE: This should probably be a 401 by industry standards
        expect(response.statusCode).toEqual(200);
        //Parse the body of the response
        const responseBody = JSON.parse(response.text);
        //Verify response text has expected error
        expect(responseBody.reason).toEqual("Bad credentials");
    },TEST_TIMEOUT);
    // Valid password but invalid username
    test.concurrent("Attempt to GET Auth token with a valid password but an invalid username", async () => {
        const response = await generateAuthToken("invalidUsername",PASSWORD);
        //Verify Auth token call returns a 200
        //NOTE: This should probably be a 401 by industry standards
        expect(response.statusCode).toEqual(200);
        //Parse the body of the response
        const responseBody = JSON.parse(response.text);
        //Verify response text has expected error
        expect(responseBody.reason).toEqual("Bad credentials");
    },TEST_TIMEOUT);
    // Valid password but null username
    test.concurrent("Attempt to GET Auth token with a valid password but an null username", async () => {
        const response = await generateAuthToken(null,PASSWORD);
        //Verify Auth token call returns a 200
        //NOTE: This should probably be a 401 by industry standards
        expect(response.statusCode).toEqual(200);
        //Parse the body of the response
        const responseBody = JSON.parse(response.text);
        //Verify response text has expected error
        expect(responseBody.reason).toEqual("Bad credentials");
    },TEST_TIMEOUT);
    // null username and password
    test.concurrent("Attempt to GET Auth token with a null username and password", async () => {
        const response = await generateAuthToken(null,null);
        //Verify Auth token call returns a 200
        //NOTE: This should probably be a 401 by industry standards
        expect(response.statusCode).toEqual(200);
        //Parse the body of the response
        const responseBody = JSON.parse(response.text);
        //Verify response text has expected error
        expect(responseBody.reason).toEqual("Bad credentials");
    },TEST_TIMEOUT);
    // Valid password but null username
    test.concurrent("Attempt to GET Auth token with a invalid username and password", async () => {
        const response = await generateAuthToken("invalidUsername","invalidPassword");
        //Verify Auth token call returns a 200
        //NOTE: This should probably be a 401 by industry standards
        expect(response.statusCode).toEqual(200);
        //Parse the body of the response
        const responseBody = JSON.parse(response.text);
        //Verify response text has expected error
        expect(responseBody.reason).toEqual("Bad credentials");
    },TEST_TIMEOUT);
});