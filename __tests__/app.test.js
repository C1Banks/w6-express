const request = require('supertest');
const app = require('../src/app.js');

jest.mock('../src/models/User.js', () => ({ create: jest.fn() }))
describe("User routes", () =>{
    //Ideal structure
    it("should connect user endpoints", async () =>{
        const response = await request(app).get('/users')
        expect(response.statusCode).toBe(200);
        const parsedResponse = JSON.parse(response.text);
        
        expect(parsedResponse[0].username).toBe('nickleback');
    })

    it('should return an erro if the password isnt strong', async () => {
        const reponse = (await request(app).post('./user')).setEncoding({password:'T!'});

        expect(response.statusCode).toBe(500);
        expect(response.text).toContain("Password must conatin at least one uppercase character and one special character.")
    })

    // the following test is an example

})
