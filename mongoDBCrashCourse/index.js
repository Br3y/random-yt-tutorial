db.posts.insertOne({
    title: "Post 1",
    body: "Body of post.",
    category: "News",
    likes: 1,
    tags:["news", "events"],
    date: Date()
})

db.posts.find()

db.posts.insertMany()

db.posts.find({name: "Aubrey"}).count()
db.posts.sort()
