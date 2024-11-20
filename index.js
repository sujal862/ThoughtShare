const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
var methodOverride = require('method-override')
const {v4 : uuidv4} = require('uuid'); //uuidv4 is a func which will return a unique id

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method')); // it overrides POST method which have "?_method=PATCH" inside query string in action attribute of form

let posts = [
    {
        id: uuidv4(),
        username: "TechEnthusiast",
        content: "The best way to predict the future is to create it. Technology is just a tool - what matters is how we use it to make the world better."
    },
    {
        id: uuidv4(),
        username: "Mindfulness_Maven",
        content: "Take a moment today to appreciate the small things. Your morning coffee, a kind smile, the sunrise - these tiny moments make life beautiful."
    },
    {
        id: uuidv4(),
        username: "BookWorm",
        content: "Just finished reading 'Atomic Habits' by James Clear. Key takeaway: Tiny changes, when consistent, lead to remarkable results. Start small, stay consistent!"
    },
    {
        id: uuidv4(),
        username: "WanderlustDreamer",
        content: "Travel isn't just about seeing new places, it's about seeing life from different perspectives. Every journey teaches something new about yourself."
    },
    {
        id: uuidv4(),
        username: "GrowthMindset",
        content: "Remember: Every expert was once a beginner. Don't be afraid to start something new today. Your future self will thank you for beginning now."
    },
    {
        id: uuidv4(),
        username: "HealthGuide",
        content: "Health tip: The 20-20-20 rule for digital eye strain: Every 20 minutes, look at something 20 feet away for 20 seconds. Your eyes will thank you!"
    },
    {
        id: uuidv4(),
        username: "EcoWarrior",
        content: "Small eco-friendly reminder: Using a reusable water bottle saves an average of 156 plastic bottles annually. Every small action counts! 🌍"
    },
    {
        id: uuidv4(),
        username: "CreativeSpirit",
        content: "Creativity isn't about being 'the best' - it's about expressing yourself authentically. Don't compare your chapter 1 to someone else's chapter 20."
    },
    {
        id: uuidv4(),
        username: "ProductivityPro",
        content: "Pro tip: Use the Pomodoro Technique - 25 minutes of focused work followed by a 5-minute break. It's amazing how much you can accomplish!"
    },
    {
        id: uuidv4(),
        username: "MentalHealthMatters",
        content: "It's okay not to be okay. Taking care of your mental health is just as important as physical health. Reach out when you need support. 💚"
    }
];

app.get('/posts', (req,res)=>{
    res.render('index.ejs', {posts});
})

//new post
app.get('/posts/new', (req,res)=>{
    res.render('new.ejs');
})

//after form submit -> post request
app.post('/posts', (req,res) =>{
    let id = uuidv4();
    let {username, content} = req.body;
    posts.push({id, username, content});
    res.redirect('/posts');  
})

//find user by id
app.get('/posts/:id', (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id===p.id ); //returns a obj 
    res.render('show.ejs', {post});
})

//show the editing window
app.get('/posts/:id/edit', (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id===p.id );
    res.render('edit.ejs', {post});
})

//update the post using patch request
app.patch('/posts/:id', (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id===p.id );
    let newContent = req.body.content;
    post.content = newContent;
    res.redirect('/posts');
})

//delete the post
app.delete('/posts/:id', (req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p) => id!=p.id );
    res.redirect('/posts');
})

app.listen(port, (req,res) => {
    console.log(`Server running on port ${port}`);
});