// app.js
import express from "express"
import morgan from 'morgan'

const app = express()

app.use(morgan('tiny'))

app.get('/', (req, res) => res.status(200).json({ status: 200, success: true, message: 'Welcome! The server is working properly' }));

// Error handler
app.use((req, res) => {
    const err = new Error('Route Not Found');
    const status = 404;
    res.status(status).json({ status, success: false, error: err.message });
});

app.use((err, res) => {
    const status = err.status || 500;
    res.status(status).json({
        status,
        success: false,
        error: err.message,
    });
});

export default app