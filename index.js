const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json');
const course = require('./data/course.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('API running');
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/course', (req, res) => {
    res.send(course);
})

// app.get('/course/:id', (req, res) => {
//     const id = req.params.id;
//     const selectedCourse = course.find(n => n._id === id)
//     res.send(selectedCourse);
// })


// app.get('/courses/:id', (req, res) => {
//     const id = req.params.id;
//     const coursesCatagory = courses.filter(n => n.category_id === id)
//     res.send(coursesCatagory);
// })

app.listen(port, () => {
    console.log('Learners running on port: ', port)
})