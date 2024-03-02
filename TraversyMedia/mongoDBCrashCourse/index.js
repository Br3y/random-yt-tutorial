db.createCollection("posts");

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

db.posts.find().limit(2)

db.posts.findOne() //return first match

$gt, $lt, $lte, $gte

updateOne({title: "{Post 1"}, {likes: 2})

$set

$upset //update if found

$inc // increment

updateMany({})

db.sales.drop() // delete collection

aggregate()

close()

$limit, $match

toArray()