import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import { YSocketIO } from "y-socket.io/dist/server";

const app = express();

app.use(express.static("public"));

const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

const ySocketIO = new YSocketIO(io);
ySocketIO.initialize();

// app.get("/", (req, res) => {
//     res.status(200).json({
//         message: "Hello World",
//         success: true
//     })
// });

app.get("/health", (req, res) => {
    res.status(200).json({
        message: "OK",
        success: true
    })
});

httpServer.listen(3000, () => {
    console.log("Server connected to port 3000");
})