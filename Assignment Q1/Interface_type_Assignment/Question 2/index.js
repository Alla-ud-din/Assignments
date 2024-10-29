"use strict";
let author = [{ id: 123, name: "Ali", bio: "Student" },
    { id: 456, name: "Muazam", bio: "Student" }, { id: 789, name: "Mukaram", bio: "Toddler" }];
let post1 = {
    id: author[0].id,
    title: "World cup",
    content: "Pakistan will win the world cup",
    author: author[0],
    comments: [{
            author: author[1],
            content: "Very difficult",
            timestamp: new Date
        }, {
            author: author[0],
            content: "Muazam, don't worry we will do best",
            timestamp: new Date
        }, {
            author: author[2],
            content: "InshaALLAH",
            timestamp: new Date
        }],
    timestamp: new Date,
};
let post2 = {
    id: author[1].id,
    title: "World cup",
    content: "Who will be the 4 semi finalists",
    author: author[1],
    comments: [{
            author: author[0],
            content: "Australia, India, England, Pakistan",
            timestamp: new Date
        }, {
            author: author[1],
            content: "Australia, India, England, South Africa",
            timestamp: new Date
        }],
    timestamp: new Date,
};
let post3 = {
    id: author[0].id,
    title: "World cup",
    content: "India is favourite",
    author: author[0],
    comments: [{
            author: author[1],
            content: "Lolx",
            timestamp: new Date
        }],
    timestamp: new Date,
};
const posts = [post1, post2, post3];
function post(post) {
    let sortedArray = post.slice().sort((post1, post2) => post1.comments.length - post2.comments.length);
    console.log("Posts ordered on the basis of time of post:", post);
    console.log("Sorted posts: ", sortedArray);
}
post(posts);
