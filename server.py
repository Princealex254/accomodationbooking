#!/usr/bin/env python3
"""
Simple Python server for local development with clean URLs
Run with: python server.py
"""

import http.server
import socketserver
import os
import urllib.parse
from pathlib import Path

class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Parse the URL
        parsed_path = urllib.parse.urlparse(self.path)
        path = parsed_path.path.lstrip('/')
        
        # Handle root path
        if not path or path == '/':
            path = 'index.html'
        
        # Valid pages (add more as needed)
        valid_pages = [
            'index', 'login', 'register', 'listings', 'property', 
            'booking', 'profile', 'about', 'contact', 'admin', 'mobile-test'
        ]
        
        # If path doesn't have extension and is a valid page, add .html
        if '.' not in path and path in valid_pages:
            path = f"{path}.html"
        
        # Check if file exists
        if os.path.exists(path):
            self.path = f"/{path}"
            return super().do_GET()
        else:
            # Send 404 for non-existent files
            self.send_error(404, f"Page '{parsed_path.path}' not found")

def run_server(port=3000):
    with socketserver.TCPServer(("", port), CleanURLHandler) as httpd:
        print(f"🏨 Prince Alex Airbnb server running at:")
        print(f"   Local:   http://localhost:{port}")
        print(f"   Network: http://192.168.1.x:{port}")
        print(f"\n📝 Clean URLs enabled:")
        print(f"   http://localhost:{port}/admin (instead of admin.html)")
        print(f"   http://localhost:{port}/login (instead of login.html)")
        print(f"   http://localhost:{port}/booking (instead of booking.html)")
        print(f"\n🛑 To stop server: Ctrl+C")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print(f"\n👋 Server stopped.")

if __name__ == "__main__":
    run_server()
