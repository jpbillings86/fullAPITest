const request = require("supertest");
const { TEST_TIMEOUT } = require("../config");
const { getBooking } = require("../../endpoints/booking/booking");

describe("GET All Bookings Endpoint", () => {
    // Happy path test
    test.concurrent("GET All Bookings", async () => {
        const response = await getBooking();
        //Verify Auth token call returns a 200
        expect(response.statusCode).toEqual(200);
        //Parse the body of the response
        const bookings = JSON.parse(response.text);
        //Verify response has a booking id property for each item. 
        //NOTE: Don't do this. No really don't. This will cause your tests to timeout if you have a large data set. This is why I limited it to just 5 items as this returns over 2000 and times out the test.
        for (let i = 0; i <= 5; i++) {
            expect(bookings[i]).toHaveProperty("bookingid");
        }
    },TEST_TIMEOUT);
});