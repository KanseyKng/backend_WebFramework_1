import express from 'express';
import cors from 'cors';
import routes from './routes/index';

export const app = express(); // <--- Wajib 'export const app'

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ success: true, message: 'Backend Todo Praktikum Berjalan Mulus!' });
});

app.use('/api', routes);

// 404 Handler
app.use((req, res) => {
    res.status(404).json({ success: false, message: `Route ${req.method} ${req.url} tidak ditemukan!` });
});

// Global Error Handler
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Terjadi error:', err.message);
    res.status(500).json({ success: false, message: 'Terjadi kesalahan pada server.' });
});