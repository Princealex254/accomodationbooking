// Simple Node.js server for local development with clean URLs
// Run with: node server.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from current directory
app.use(express.static(__dirname));

// Handle clean URLs - remove .html extension
app.get('/:page', (req, res, next) => {
    const page = req.params.page;
    
    // List of valid pages (add more as needed)
    const validPages = [
        'index', 'login', 'register', 'listings', 'property', 
        'booking', 'profile', 'about', 'contact', 'admin', 'mobile-test'
    ];
    
    if (validPages.includes(page)) {
        res.sendFile(path.join(__dirname, `${page}.html`));
    } else {
        next(); // Let express handle 404
    }
});

// Root route - serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 404 handler
app.use((req, res) => {
    res.status(404).send(`
        <html>
            <head><title>Page Not Found - Prince Alex Airbnb</title></head>
            <body style="font-family: Arial; text-align: center; padding: 50px;">
                <h1>🏨 Page Not Found</h1>
                <p>Sorry, the page you're looking for doesn't exist.</p>
                <a href="/" style="color: #d4af37; text-decoration: none;">← Return to Home</a>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`🏨 Prince Alex Airbnb server running at:`);
    console.log(`   Local:   http://localhost:${PORT}`);
    console.log(`   Network: http://192.168.1.x:${PORT}`);
    console.log(`\n📝 Clean URLs enabled:`);
    console.log(`   http://localhost:${PORT}/admin (instead of admin.html)`);
    console.log(`   http://localhost:${PORT}/login (instead of login.html)`);
    console.log(`   http://localhost:${PORT}/booking (instead of booking.html)`);
    console.log(`\n🛑 To stop server: Ctrl+C`);
});
