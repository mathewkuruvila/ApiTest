# ApiTest

The project is based on Jest as the testing framework. supertest is used for making api call.

Only if statusCode = 200, test will proceed. Else it will fail the test.

If statusCode = 200 and responseBody is empty, then also test will fail.



npm install  - To download all libraries

npm test - To run the test


After execution two files will be created OriginalResponse.json and ReArranged.json

OriginalResponse.json  : Response from API call

ReArranged.json : Rearranged Json

Execution will start in Rearrange.test.js. 


