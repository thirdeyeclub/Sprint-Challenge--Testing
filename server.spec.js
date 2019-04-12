const server = require("./server");
const request = require("supertest");

var data = {
    title: "Half-Life",
    genre: "FPS",
    releaseYear: 1998
}

var nodata = {
    title: "",
    genre: "",
}

describe("SERVER", () => {
    //Post Test 1

    it("should return status 201", async () => {
        let res = await request(server)
        .post("/games")
        .send(data);
        expect(res.status).toBe(201);
        });
        //Post test 2
        // it("404 if bad info", async () => {
        //     let res = await request(server)
        //     .post("/games")
        //     .send(nodata);
        //     expect(res.status).toBe(404);
        // });
        //Post test 3
       
        it("returns successfully", async () => {
            let res = await request(server)
            .post("/games")
            .send(data);
        expect(res.body).toEqual({ message: "Half-Life added to library." })
        });
        
    //Get Test 1
    it('GET /games 2oo OK!', () => {
        return request(server)
        .get('/games')
        .then(res=>{
            expect(res.status).toBe(200)        })
    });
    //Get test 2

    //Get test 3
});
