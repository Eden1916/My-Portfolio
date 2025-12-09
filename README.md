Personal Portfolio Website — README

A modern, responsive, and theme-toggle portfolio website built with React and Tailwind CSS.
This portfolio showcases my skills, projects, experience, and contact information in a clean and visually appealing layout.

🚀 Live Demo
(coming soon)
🛠️ Tech Stack

React.js

Tailwind CSS

JavaScript (ES6+)

Vite

Responsive Design

✨ Features

Light / Dark Mode Toggle
Saves theme to localStorage so it stays consistent on reload.

Fully Responsive
Works on mobile, tablet, and desktop screens.

Smooth Navigation
Scroll-to-sections or routing-based navigation.

Project Showcase
Includes project images, descriptions, and links.

Contact Section
Includes a clickable email link and social icons.

Project Structure
portfolio/
├── src/
│   ├── components/
│   │   ├── Portfolio.jsx
│   │
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
└── package.json

⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/your-username/portfolio.git
cd portfolio


Install dependencies:

npm install


Start development server:

npm run dev


Build for production:

npm run build

Theme Toggle Logic:

const toggleTheme = () => {
  setTheme(prev => (prev === "light" ? "dark" : "light"));
};


Stored in localStorage:

useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  📬 Contact

📧 Email: eduedensahle@gmail.com

🌍 Portfolio: (coming soon)
💼 LinkedIn: (https://www.linkedin.com/in eden-sahlie-729b45357/)
🐙 GitHub: (https://github.com/Eden1916)