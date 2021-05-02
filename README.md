# ApiTest

The project is based on Jest as the testing framework. supertest is used for making api call.

Only if statusCode = 200 for the API call, test will proceed. Else it will fail the test.

If statusCode = 200 and responseBody is empty, then also test will fail.



npm install  - To download all libraries

npm test - To run the test


If statusCode = 200 and responseBody =! empty then test will proceed with and execution two files will be created OriginalResponse.json and ReArranged.json

OriginalResponse.json  : Orginal Response from API call

ReArranged.json : Rearranged Json

Execution will start in Rearrange.test.js. 


