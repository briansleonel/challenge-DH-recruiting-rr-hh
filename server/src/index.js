const app = require("./app")

const PORT = process.env.PORT || 3004;
const HOSTNAME = process.env.HOSTNAME || "localhost";

app.listen(PORT, HOSTNAME, () => {
    console.log(`🌐 Server started: http://${HOSTNAME}:${PORT}`);
})