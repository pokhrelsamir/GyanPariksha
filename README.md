# 🧠 GyanPariksha — Interactive Quiz Web Application

<p align="center">
  <img
    src="https://github.com/user-attachments/assets/f64e74df-cb90-461c-ba9e-b1b56dd3c906"
    alt="GyanPariksha Banner"
    width="100%"
  />
</p>

<p align="center">
  <strong>ज्ञानसँगै अगाडि बढौँ — Learn, Challenge, Achieve.</strong>
</p>

<p align="center">
  A modern, interactive, and responsive quiz application designed to test knowledge, improve learning, and provide an engaging quiz experience.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Responsive-Design-8A2BE2?style=for-the-badge" alt="Responsive Design">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License">
</p>

---

## 📌 About GyanPariksha

**GyanPariksha** is a modern, browser-based interactive quiz application developed using **HTML5, CSS3, and Vanilla JavaScript**.

The application provides an engaging environment where users can configure a quiz, answer multiple-choice questions, track their progress, manage time, and evaluate their final performance.

GyanPariksha focuses on combining a clean user interface with interactive functionality, animations, responsive design, and client-side data persistence.

The project demonstrates practical frontend web development concepts while providing a simple and engaging quiz experience.

---

# ✨ Features

## 🧠 Interactive Quiz

* Multiple-choice quiz questions
* Interactive answer selection
* Correct and incorrect answer feedback
* Automatic question progression
* Question numbering
* Real-time quiz progress
* Final result calculation

---

## ⚙️ Quiz Configuration

Users can configure their quiz before starting.

Features include:

* Quiz category selection
* Difficulty selection
* Quiz customization
* Easy-to-use configuration interface

---

## ⏱️ Countdown Timer

GyanPariksha includes a real-time quiz timer.

Features include:

* Countdown timer
* Visual timer feedback
* Timer warning state
* Automatic handling of timed quizzes

---

## 📊 Performance Tracking

After completing a quiz, users can view their performance through a dedicated result screen.

Performance information can include:

* 🏆 Final score
* ✅ Correct answers
* ❌ Incorrect answers
* 📈 Accuracy
* 🎯 Quiz performance
* ⭐ Best score

---

## 💾 Local Storage

GyanPariksha uses the browser's **Local Storage API** for client-side data persistence.

This allows information such as quiz statistics and best scores to remain available after refreshing the page.

No database or traditional backend server is required for the core application.

---

## 🎨 Modern User Interface

The application features a modern and visually engaging interface including:

* Glassmorphism-inspired design
* Modern cards
* Gradient elements
* Smooth transitions
* Interactive buttons
* Animated components
* Clean typography
* Visual feedback
* User-friendly navigation

---

## 📱 Responsive Design

GyanPariksha is designed to adapt to different screen sizes:

* 💻 Desktop
* 💻 Laptop
* 📟 Tablet
* 📱 Mobile devices

Responsive behavior is handled through a dedicated `responsive.css` file.

---

## ♿ Accessibility

The application includes accessibility-oriented considerations such as:

* Keyboard interaction
* Touch-friendly controls
* Reduced-motion support
* Responsive layouts
* Clear interactive states

---

# 🖼️ Screenshots

## 🏠 GyanPariksha Home Screen

<p align="center">
  <img
    src="https://github.com/user-attachments/assets/460f86d1-3ec8-4e76-845e-ab5c40630b4c"
    alt="GyanPariksha Home Screen"
    width="900"
  />
</p>

---

## ⚙️ Quiz Configuration

<p align="center">
  <img
    src="https://github.com/user-attachments/assets/15f6afc7-baaa-4248-9121-a2ce23c9d169"
    alt="GyanPariksha Quiz Configuration"
    width="900"
  />
</p>

---

## ❓ Quiz Question Screen

<p align="center">
  <img
    src="https://github.com/user-attachments/assets/e1ed317f-e522-481c-82c9-df7d04b20d36"
    alt="GyanPariksha Quiz Question Screen"
    width="900"
  />
</p>

---

## 📊 Quiz Result Screen

<p align="center">
  <img
    src="https://github.com/user-attachments/assets/6573eb25-7e71-4a3b-a713-6aa570383789"
    alt="GyanPariksha Quiz Result Screen"
    width="900"
  />
</p>

---

# 🛠️ Technologies Used

| Technology            | Purpose                            |
| --------------------- | ---------------------------------- |
| **HTML5**             | Application structure              |
| **CSS3**              | Styling and visual design          |
| **JavaScript ES6+**   | Application logic and interactions |
| **Local Storage API** | Client-side data persistence       |
| **CSS Animations**    | Animations and transitions         |
| **Responsive CSS**    | Multi-device compatibility         |
| **Browser DOM API**   | Dynamic interface manipulation     |

---

# 📂 Project Structure

```text
GyanPariksha/
│
├── assets/
│   ├── icons/
│   │
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

GyanPariksha follows a modular frontend architecture where application logic, UI management, quiz functionality, and storage operations are separated into dedicated JavaScript modules.

```text
                    ┌────────────────────┐
                    │     index.html     │
                    │   Application UI   │
                    └─────────┬──────────┘
                              │
                              ▼
                    ┌────────────────────┐
                    │       app.js       │
                    │  Main Controller   │
                    └─────────┬──────────┘
                              │
              ┌───────────────┼───────────────┐
              │               │               │
              ▼               ▼               ▼
       ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
       │   quiz.js   │ │    ui.js    │ │ storage.js  │
       │  Quiz Logic │ │ UI Control  │ │ Local Data  │
       └─────────────┘ └─────────────┘ └─────────────┘
              │               │               │
              └───────────────┼───────────────┘
                              ▼
                    ┌────────────────────┐
                    │      Browser       │
                    │   Local Storage    │
                    └────────────────────┘
```

---

# 🧠 JavaScript Modules

## `app.js`

The main application controller.

Responsibilities include:

* Application initialization
* Connecting application modules
* Handling global events
* Managing application state
* Initializing saved data
* Managing user interactions

---

## `quiz.js`

Responsible for the core quiz functionality.

Responsibilities include:

* Question management
* Answer validation
* Score calculation
* Question progression
* Timer management
* Quiz completion
* Performance calculation

---

## `ui.js`

Responsible for managing the user interface.

Responsibilities include:

* Rendering questions
* Displaying answer options
* Updating progress indicators
* Showing correct and incorrect states
* Displaying quiz results
* Updating score information
* Managing loading and error states

---

## `storage.js`

Responsible for browser-based data persistence.

Responsibilities include:

* Saving best scores
* Loading stored statistics
* Managing Local Storage
* Maintaining client-side quiz data

---

# 🎨 CSS Architecture

GyanPariksha separates its styling into three dedicated CSS files.

## `style.css`

Contains the primary application design:

* Layout
* Colors
* Typography
* Cards
* Buttons
* Forms
* Navigation
* Quiz components
* Result components

---

## `animations.css`

Contains application animations and transitions:

* Page transitions
* Question animations
* Answer animations
* Correct-answer effects
* Incorrect-answer effects
* Button animations
* Progress animations
* Loading animations
* Result animations
* Hover effects

---

## `responsive.css`

Contains responsive behavior for:

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
                    Configure Quiz Settings
                              │
                 ┌────────────┴────────────┐
                 │                         │
                 ▼                         ▼
             Category                  Difficulty
                 │                         │
                 └────────────┬────────────┘
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
                 ┌────────────┴────────────┐
                 │                         │
                 ▼                         ▼
             Correct                   Incorrect
                 │                         │
                 └────────────┬────────────┘
                              ▼
                       Next Question
                              │
                              ▼
                        Quiz Complete
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

GyanPariksha can support keyboard interaction for faster quiz navigation.

| Key     | Action                        |
| ------- | ----------------------------- |
| `1`     | Select option 1               |
| `2`     | Select option 2               |
| `3`     | Select option 3               |
| `4`     | Select option 4               |
| `Enter` | Continue to the next question |
| `Space` | Continue to the next question |

Keyboard interactions are designed to avoid interfering with text input fields.

---

# 💾 Data Persistence

GyanPariksha uses the browser's **Local Storage API** for client-side persistence.

Depending on the application's configuration, stored information may include:

```text
Best Score
Quiz Statistics
Correct Answers
Total Quizzes
Accuracy
Previous Performance
```

All stored data remains within the user's browser.

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/pokhrelsamir/GyanPariksha.git
```

## 2. Navigate to the Project

```bash
cd GyanPariksha
```

## 3. Open the Project

Open the project folder using **Visual Studio Code**.

## 4. Run with Live Server

For the best development experience:

1. Install the **Live Server** extension in VS Code.
2. Open `index.html`.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

The application will open in your default browser.

---

# 🌐 Browser Compatibility

GyanPariksha is designed for modern browsers supporting:

* HTML5
* CSS3
* ECMAScript 6+
* Local Storage
* Modern DOM APIs
* CSS animations and transitions

Recommended browsers include:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari
* Opera

---

# 🔐 Privacy

GyanPariksha does not require users to create an account for the core quiz functionality.

The application can store quiz-related information locally using the browser's Local Storage API.

No personal information is required to use the basic application.

---

# 🔮 Future Improvements

Potential future enhancements include:

* [ ] 🌐 Online question database
* [ ] 🏆 Global leaderboard
* [ ] 👤 User authentication
* [ ] 📚 Additional quiz categories
* [ ] 🧠 Advanced difficulty system
* [ ] 📈 Detailed performance analytics
* [ ] 🕘 Quiz history
* [ ] ⭐ Favorite questions
* [ ] 🌙 Dark and light themes
* [ ] 🔊 Sound effects
* [ ] 🎵 Background music
* [ ] 🏅 Achievement system
* [ ] 🌍 Multiplayer quiz mode
* [ ] 🤖 AI-generated questions
* [ ] 📱 Progressive Web App support

---

# 🧪 Testing Checklist

Before committing changes, verify the following:

* [ ] Application loads correctly
* [ ] Quiz configuration works
* [ ] Quiz starts correctly
* [ ] Questions display correctly
* [ ] Answer selection works
* [ ] Correct answers are identified
* [ ] Incorrect answers are identified
* [ ] Timer works correctly
* [ ] Progress indicator updates
* [ ] Next-question navigation works
* [ ] Final score is calculated correctly
* [ ] Result screen displays correctly
* [ ] Best score is saved
* [ ] Stored data remains after refresh
* [ ] Responsive layout works
* [ ] Animations work correctly
* [ ] No JavaScript errors appear in the browser console

---

# 🤝 Contributing

Contributions are welcome and appreciated.

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

# 📜 License

This project is licensed under the **MIT License**.

See the [`LICENSE`](LICENSE) file for more information.

---

# 👨‍💻 Author

## Samir Pokhrel

**B.Sc. CSIT Student**

Frontend Developer | Django Developer | Data Enthusiast

<p align="left">
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

Feedback, suggestions, improvements, and contributions are always welcome.

---

<p align="center">
  <strong>🧠 GyanPariksha</strong>
  <br>
  ज्ञानसँगै अगाडि बढौँ — Learn, Challenge, Achieve.
</p>
