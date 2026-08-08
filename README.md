# 🧠 GyanPariksha — Interactive Quiz Web Application

<p align="center">
  <img src="assets/images/banner.png" alt="GyanPariksha Banner" width="100%">
</p>

<p align="center">
  <strong>Test Your Knowledge. Challenge Yourself. Improve Every Day.</strong>
</p>

<p align="center">
  A modern, interactive and responsive quiz application built with HTML, CSS and JavaScript.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Responsive-Design-8A2BE2?style=for-the-badge" alt="Responsive Design">
</p>

---

## 📌 About GyanPariksha

**GyanPariksha** is a modern browser-based quiz application designed to provide an engaging and interactive way to test general knowledge and improve learning through quizzes.

The application provides a clean interface where users can select quiz settings, answer questions, track their progress and view their final performance.

GyanPariksha is developed using **HTML5, CSS3 and Vanilla JavaScript**, making it lightweight, easy to understand and suitable for frontend web development projects.

---

## ✨ Features

### 🎯 Interactive Quiz

* Start and complete quizzes through an interactive interface
* Multiple-choice questions
* Instant answer selection
* Visual feedback for correct and incorrect answers
* Automatic question progression
* Question numbering and progress tracking

### ⚙️ Quiz Configuration

* Select quiz categories
* Select difficulty levels
* Configure quiz settings
* Start a customized quiz session

### ⏱️ Quiz Timer

* Real-time countdown timer
* Visual timer feedback
* Timer warning state
* Automatic handling of time-based quiz sessions

### 📊 Performance Tracking

After completing a quiz, users can view:

* Final score
* Correct answers
* Incorrect answers
* Accuracy
* Overall performance
* Best score

### 💾 Local Data Storage

GyanPariksha uses browser **Local Storage** to preserve selected application data.

This can be used for:

* Best score
* Quiz statistics
* Previous performance
* Recent application data

No database or backend server is required.

### 🎨 Modern User Interface

* Modern dashboard design
* Glassmorphism-inspired interface
* Interactive cards
* Smooth transitions
* Animated components
* Clean typography
* User-friendly navigation
* Responsive layout

### 📱 Responsive Design

GyanPariksha adapts to different screen sizes including:

* Desktop
* Laptop
* Tablet
* Mobile devices

The responsive layout is handled through a dedicated `responsive.css` file.

### ♿ Accessibility Considerations

The application includes accessibility-focused features such as:

* Keyboard interaction
* Reduced-motion support
* Appropriate interactive states
* Touch-friendly controls
* Responsive layouts

---

# 🖼️ Screenshots

> Replace the image paths below with your actual screenshots when they are available.

## 🏠 GyanPariksha Home Screen

<p align="center">
  <img src="assets/images/home1.png" alt="GyanPariksha Home Screen" width="100%">
</p>

---

## ⚙️ Quiz Configuration

<p align="center">
  <img src="assets/images/configuration.png" alt="GyanPariksha Configuration Screen" width="100%">
</p>

---

## ❓ Quiz Question Screen

<p align="center">
  <img src="assets/images/quiz.png" alt="GyanPariksha Quiz Screen" width="100%">
</p>

---

## 📊 Quiz Result Screen

<p align="center">
  <img src="assets/images/result.png" alt="GyanPariksha Result Screen" width="100%">
</p>

---

# 🛠️ Technologies Used

| Technology            | Purpose                                |
| --------------------- | -------------------------------------- |
| **HTML5**             | Application structure                  |
| **CSS3**              | Styling and visual design              |
| **JavaScript ES6+**   | Application logic and interactions     |
| **Local Storage API** | Client-side data persistence           |
| **CSS Animations**    | Interactive animations and transitions |
| **Responsive CSS**    | Multi-device compatibility             |

---

# 📂 Project Structure

```text
GyanPariksha/
│
├── assets/
│   ├── icons/
│   ├── images/
│   │   ├── banner.png
│   │   ├── home.png
│   │   ├── configuration.png
│   │   ├── quiz.png
│   │   └── result.png
│   │
│   └── sounds/
│
├── css/
│   ├── style.css
│   ├── animations.css
│   └── responsive.css
│
├── js/
│   ├── app.js
│   ├── quiz.js
│   ├── ui.js
│   └── storage.js
│
├── index.html
├── README.md
└── LICENSE
```

---

# 🧩 Application Architecture

GyanPariksha follows a modular frontend architecture.

```text
                    ┌──────────────────┐
                    │    index.html    │
                    │   Application UI │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │      app.js      │
                    │ Main Controller  │
                    └────────┬─────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
       ┌────────────┐ ┌────────────┐ ┌──────────────┐
       │  quiz.js   │ │   ui.js    │ │ storage.js   │
       │ Quiz Logic │ │ UI Control │ │ LocalStorage │
       └────────────┘ └────────────┘ └──────────────┘
              │              │              │
              └──────────────┼──────────────┘
                             ▼
                    ┌──────────────────┐
                    │     Browser      │
                    │     Storage      │
                    └──────────────────┘
```

---

# 🧠 JavaScript Modules

## `app.js`

The main application controller.

Responsibilities include:

* Application initialization
* Connecting different modules
* Handling global events
* Loading saved statistics
* Keyboard interactions
* Application state management

---

## `quiz.js`

Responsible for the core quiz functionality.

Responsibilities include:

* Question management
* Answer validation
* Score calculation
* Question progression
* Timer handling
* Quiz completion

---

## `ui.js`

Responsible for the user interface.

Responsibilities include:

* Rendering questions
* Displaying answers
* Updating progress
* Showing quiz results
* Updating score information
* Handling loading and error states

---

## `storage.js`

Responsible for browser-based data persistence.

It manages:

* Best scores
* Quiz statistics
* Previous performance
* Local Storage operations

---

# 🎨 CSS Architecture

GyanPariksha separates its styling into three dedicated files.

### `style.css`

Contains the primary visual design:

* Layout
* Colors
* Typography
* Cards
* Buttons
* Forms
* Navigation
* Quiz components

### `animations.css`

Contains:

* Page transitions
* Button animations
* Answer animations
* Correct-answer effects
* Incorrect-answer effects
* Loading animations
* Progress animations
* Hover effects
* Result animations

### `responsive.css`

Contains responsive layouts for:

* Desktop
* Laptop
* Tablet
* Mobile
* Small-screen devices
* Landscape mobile
* Touch devices
* Accessibility preferences

---

# 🔄 Application Workflow

```text
                    User Opens GyanPariksha
                             │
                             ▼
                    Application Initializes
                             │
                             ▼
                    Select Quiz Settings
                             │
                 ┌───────────┴───────────┐
                 │                       │
                 ▼                       ▼
             Category                Difficulty
                 │                       │
                 └───────────┬───────────┘
                             ▼
                         Start Quiz
                             │
                             ▼
                     Display Question
                             │
                             ▼
                       Select Answer
                             │
                             ▼
                    Validate Answer
                             │
                 ┌───────────┴───────────┐
                 │                       │
                 ▼                       ▼
              Correct                 Incorrect
                 │                       │
                 └───────────┬───────────┘
                             ▼
                       Next Question
                             │
                             ▼
                       Quiz Completed
                             │
                             ▼
                       Calculate Score
                             │
                             ▼
                      Display Results
                             │
                             ▼
                    Save Best Statistics
```

---

# ⌨️ Keyboard Controls

GyanPariksha supports keyboard interaction for a faster quiz experience.

| Key     | Action                    |
| ------- | ------------------------- |
| `1`     | Select option 1           |
| `2`     | Select option 2           |
| `3`     | Select option 3           |
| `4`     | Select option 4           |
| `Enter` | Continue to next question |
| `Space` | Continue to next question |

Keyboard controls are disabled while the user is typing inside form elements.

---

# 💾 Data Persistence

GyanPariksha uses the browser's **Local Storage API**.

This allows the application to preserve information even after the browser page is refreshed.

Example data may include:

```text
Best Score
Total Quizzes
Correct Answers
Average Accuracy
Quiz Statistics
```

Because the data is stored locally, no user account or backend database is required.

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/yourusername/GyanPariksha.git
```

## 2. Navigate to the Project

```bash
cd GyanPariksha
```

## 3. Open the Project

Open the project using **Visual Studio Code**.

## 4. Run with Live Server

For the best development experience:

1. Install the **Live Server** extension.
2. Open `index.html`.
3. Right-click the file.
4. Select **Open with Live Server**.

GyanPariksha will then open in your default browser.

---

# 🌐 Browser Compatibility

GyanPariksha is designed for modern browsers that support:

* HTML5
* CSS3
* ES6 JavaScript
* Local Storage
* Modern DOM APIs

Recommended browsers:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari
* Opera

---

# 🔐 Privacy

GyanPariksha does not require users to create an account.

Application data such as scores and statistics can be stored locally in the user's browser.

No personal information is required to use the basic application.

---

# 🔮 Future Improvements

The project can be extended with the following features:

* [ ] 🌐 Online question database
* [ ] 🏆 Global leaderboard
* [ ] 👤 User authentication
* [ ] 📚 More quiz categories
* [ ] 🧠 Advanced difficulty system
* [ ] 📈 Detailed performance analytics
* [ ] 🕘 Quiz history
* [ ] ⭐ Favorite questions
* [ ] 🌙 Dark/Light theme
* [ ] 🔊 Sound effects
* [ ] 🎵 Background music
* [ ] 🏅 Achievement system
* [ ] 🌍 Multiplayer quiz mode
* [ ] 🤖 AI-generated questions
* [ ] 📱 Progressive Web App support

---

# 🤝 Contributing

Contributions are welcome.

If you would like to improve GyanPariksha:

### 1. Fork the Repository

Create your own fork of the project.

### 2. Create a Feature Branch

```bash
git checkout -b feature/new-feature
```

### 3. Make Your Changes

Implement and test your improvements.

### 4. Commit Your Changes

```bash
git add .
git commit -m "Add new feature"
```

### 5. Push the Branch

```bash
git push origin feature/new-feature
```

### 6. Create a Pull Request

Open a Pull Request and describe the changes you made.

---

# 🧪 Testing Checklist

Before committing changes, verify:

* [ ] Application loads correctly
* [ ] Quiz settings work
* [ ] Quiz starts correctly
* [ ] Questions display correctly
* [ ] Answer selection works
* [ ] Correct answers are identified
* [ ] Incorrect answers are identified
* [ ] Timer works correctly
* [ ] Progress indicator updates
* [ ] Next-question navigation works
* [ ] Final score is calculated
* [ ] Result screen displays correctly
* [ ] Best score is saved
* [ ] Page refresh preserves required data
* [ ] Responsive layout works
* [ ] No JavaScript errors appear in the console

---

# 📜 License

This project is licensed under the **MIT License**.

See the [`LICENSE`](LICENSE) file for more information.

---

# 👨‍💻 Author

## Samir Pokhrel

**B.Sc. CSIT Student**

Frontend Developer | Django Developer | Data Enthusiast

<p>
  <a href="https://github.com/pokhrelsamir">
    <img src="https://img.shields.io/badge/GitHub-pokhrelsamir-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
  <a href="https://www.linkedin.com/in/samirpokhrel/">
    <img src="https://img.shields.io/badge/LinkedIn-Samir%20Pokhrel-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn">
  </a>
</p>

---

# ⭐ Support

If you find **GyanPariksha** useful, consider giving the repository a ⭐ on GitHub.

Your feedback, suggestions, and contributions are always appreciated.

---

<p align="center">
  <strong>🧠 GyanPariksha</strong>
  <br>
  Test Your Knowledge. Challenge Yourself. Improve Every Day.
</p>
