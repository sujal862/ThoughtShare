# ThoughtShare

ThoughtShare is a simple yet elegant web application that allows users to share their thoughts, ideas, and insights with the community. Built with Node.js, Express, and EJS, it provides a clean interface for creating, reading, updating, and deleting posts.

## ✨ Features

- Create, read, update, and delete posts
- Clean, responsive interface
- Character counter for posts
- Real-time post updates

## 🛠️ Tech Stack

- Node.js
- Express.js
- EJS Templates
- CSS3

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/sujal862/ThoughtShare
```

2. Navigate to the project directory:
```bash 
cd ThoughShare
```

3. Install dependencies:
```bash
npm install
```

4. Start the server:
```bash
node index.js
```

5. Visit `http://localhost:8080/posts` in your browser

## 🔧 Dependencies

```json
{
  "express": "^4.17.1",
  "ejs": "^3.1.6",
  "method-override": "^3.0.0",
  "uuid": "^8.3.2"
}
```

## 📁 Project Structure

```
thoughtshare/
│
├── index.js                # Main application file
├── package.json           # Project dependencies
│
├── public/               # Static files
│   └── style.css        # Stylesheet
│
├── views/               # EJS templates
│   ├── edit.ejs        # Edit post page
│   ├── index.ejs       # Home page
│   ├── new.ejs         # Create post page
│   └── show.ejs        # Single post view
│
└── README.md           # Project documentation
```

## 🚦 Routes

| Method | Path | Description |
|--------|------|-------------|
| GET | /posts | Display all posts |
| GET | /posts/new | Show new post form |
| POST | /posts | Create new post |
| GET | /posts/:id | Show specific post |
| GET | /posts/:id/edit | Show edit form |
| PATCH | /posts/:id | Update post |
| DELETE | /posts/:id | Delete post |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 👏 Acknowledgments

- Inspired by social platforms like Twitter and Reddit
- Built as a learning project for web development

## 📧 Contact



