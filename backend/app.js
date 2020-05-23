const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = 3000;
const usersRouter = require('./routes/users/users')
const postsRouter = require('./routes/posts/posts')
const likesRouter = require('./routes/likes/likes')
const commentsRouter = require('./routes/comments/comments')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", usersRouter)
app.use("/posts", postsRouter)
app.use("/likes", likesRouter)
app.use("/comments", commentsRouter)

app.listen(PORT, () => console.log("listening"));
