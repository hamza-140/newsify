# Newsify Web App

![screenshot newsify](https://github.com/hamza-140/newsify/assets/80567400/89bad7ab-dd54-4aa7-ba9f-312d25608eda)

A simple React news feed app that fetches top headlines from the News API and displays them in a grid layout.

## 🚀 Features

- 📰 Fetches and displays top headlines from the News API.
- 📖 Pagination to navigate through news articles.
- 🎨 Responsive design using Tailwind CSS.
- 📸 Instagram link button included.

## 🛠 Technologies Used

- **React**: Frontend library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **News API**: API for fetching news headlines.

## 📦 Installation

### Prerequisites

- Node.js (v14.x or newer)
- npm or yarn

### Steps

1. **Clone the repository**:

    ```bash
    git clone https://github.com/hamza-140/newsify.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd newsify
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

## ⚙️ Configuration

1. **Get your API key** from [News API](https://newsapi.org/).
2. **Replace `import.meta.env.VITE_NEWS_API_KEY`** in `App.js` with your actual API key:

    ```javascript
    const apiKey = "YOUR_API_KEY";
    ```

## 🏃‍♀️ Running the App

```bash
npm run dev
```
