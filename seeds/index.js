const mongoose = require('mongoose');
const titles = require('./titles');
const Blog = require('../models/blog');

mongoose.connect('mongodb://localhost:27017/blog-post', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Blog.deleteMany({});
    for (let i = 0; i < 25; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const blog = new Blog({
           author: '62320e876250fce404bf9c8a', 
           title: `${sample(titles)}`,
           image: 'https://www.emergingedtech.com/wp/wp-content/uploads/2018/04/blogging.jpg',
           content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        })
        await blog.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})