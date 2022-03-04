const { expect } = require("chai");
const db = require("../models");
const Post = db.post;

describe("Post Service Unit Tests", function () {
    describe("Save Post functionality", function () {
      it("should successfully add a post in the database", async function () {
        const senderID = "2";
        const description = "new post";
        const type = "RESTORATION";

        Post.create({
            senderID: senderID,
            description: description,
            type: type
        }).then((data) => {
            expect(data.senderID).to.equal(senderID);
            expect(data.description).to.equal(description);
            expect(data.type).to.equal(type);
        })
      });
    });
  });