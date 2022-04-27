const express = require("express"),
        app = express(),
        cors = require("cors"),
        http = require('http').Server(app),
        { Server } = require("socket.io"),
        io = require('socket.io')(http);

// middleware

app.use(express.json());
app.use(cors());

// routes //

// register and login

app.use("/auth", require("./routes/jwtAuth"));

// dashboard

app.use("/dashboard", require("./routes/dashboard"));

// game session

app.use("/gameSession", require("./routes/gameSession"));

io.on('connection', (socket) => {
    socket.on('chat message', msg => {
      io.emit('chat message', msg);
    });
});
  
http.listen(3000, () => {
console.log(`Socket.IO server running at http://localhost:3000/`);
});

app.listen(5000, () => {
    console.log("server is running on port 5000");
});