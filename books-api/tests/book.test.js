const request = require("supertest");
const app = require("../server"); // Import your Express app
const mongoose = require("mongoose");
const { expect } = require("chai");

describe("Books API", function () {
  this.timeout(10000); // Increase timeout for database operations

  // Before all tests, ensure database connection
  before(async function () {
    if (mongoose.connection.readyState !== 1) {
      try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(" MongoDB connected for testing.");
      } catch (error) {
        console.error(" MongoDB connection error:", error);
        throw error;
      }
    }
  });

  // After all tests, properly close the database connection
  after(async function () {
    try {
      await mongoose.disconnect(); // Fully close all DB connections
      console.log("MongoDB connection closed after testing.");
    } catch (error) {
      console.error("Error closing MongoDB connection:", error);
    }
  });

  it("should return all books", async function () {
    const res = await request(app).get("/books");

    // Debugging output
    console.log("Response Body:", res.body);

    // Check HTTP status
    expect(res.status).to.equal(200);

    // Check that response is an array
    expect(res.body).to.be.an("array");
  });
});
