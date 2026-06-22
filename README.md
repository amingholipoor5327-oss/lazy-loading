# 🚀 Infinite Scroll Blog Posts

A modern blog posts viewer built with Next.js that implements Infinite Scrolling using the Intersection Observer API. Posts are fetched from the JSONPlaceholder API and loaded dynamically as the user scrolls.

## 📸 Preview

Features a clean UI with:
* Dynamic post loading
* Infinite scrolling
* Loading indicator
* Post counter
* Responsive card layout
* Navigation back to Home

---

## ✨ Features

* Built with Next.js App Router
* Client-side data fetching
* Infinite Scroll implementation
* Intersection Observer API
* CSS Modules styling
* Responsive design
* Loading state indicator
* Dynamic post counter
* Clean and modern UI

---

## 🛠️ Technologies Used

* Next.js 15
* React
* JavaScript (ES6+)
* CSS Modules
* Fetch API
* Intersection Observer API
* JSONPlaceholder API

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-repository.git
```

Move into the project directory:

```bash
cd your-repository
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🔗 API Source

The application fetches data from:

```text
https://jsonplaceholder.typicode.com/posts
```

---

## 🧠 How Infinite Scroll Works

1. The application fetches all posts from the API.
2. Initially, only the first 5 posts are displayed.
3. An Intersection Observer watches the bottom loader element.
4. When the loader enters the viewport, 5 more posts are appended.
5. The process repeats until all posts are loaded.
6. A completion message is displayed when no more posts remain.

---

## 🎯 Learning Goals

This project was created to practice:

* Next.js fundamentals
* React Hooks
* useState
* useEffect
* API integration
* Infinite scrolling
* State management
* Responsive UI development
* Component lifecycle handling

---

## 📈 Future Improvements

* Search functionality
* Category filtering
* Skeleton loading cards
* Server-side fetching
* Pagination support
* Dark mode
* TypeScript migration

---

## 👨‍💻 Author

Developed as a frontend practice project focused on mastering Next.js, React Hooks, API consumption, and Infinite Scroll implementation.
