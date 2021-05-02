const request = require("supertest")("http://eacodingtest.digital.energyaustralia.com.au/api/v1");
const expect = require("chai").expect;
const assert = require("chai").assert;


import {reArrangeJson} from './RearrangeJson.js';
import {writeToFile} from './FileOperation.js';


describe("Get API Call Sorting", function () {

  it("Sorting of /festivals API json result", async function () {

    const response = await request.get("/festivals");
    expect(response.status).to.eql(200);

    let jsonResponse = response.body;
    jsonResponse = JSON.stringify(response.body);

    writeToFile("OriginalResponse.json", jsonResponse);


    jsonResponse = JSON.parse(jsonResponse);
    let size = jsonResponse.length;

    if(size > 0)
      {
        const reArrangedJson = reArrangeJson(jsonResponse);
        writeToFile("ReArranged.json", reArrangedJson);
      }
    else
      assert.fail('Response body is empty');

  });

});