# 🌤️ React Native Weather App

A simple yet scalable React Native Weather App that fetches and displays real-time weather information using the OpenWeatherMap API. Built with performance, maintainability, and clean architecture in mind.

---

## 📱 Features

- 🔍 Search weather by city
- 🌡️ Display temperature, weather condition, and icon
- ⚠️ Error message if the city is not found
- 🔄 Loading state while fetching data
- 🗂️ State management with Redux Toolkit
- 🧠 Clean architecture with separation of concerns
- 🌙 Dark mode toggle
- 🧪 Unit tests

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- Yarn or npm
- OpenWeatherMap API Key

### 1. Clone the repository

```bash
git clone https://github.com/dhruvjain1800/weather-app.git
cd weather-app
```

### 2. Install dependencies

```bash
yarn
# or
npm install
```

### 3. Run the app

```bash
yarn android
# or
npm run android
```

---

## 🧱 Project Structure

```
src/
│
├── assets/               # Icons, images, fonts
├── components/           # Reusable UI components
├── config/               # Constants and configuration
├── modals/               # Data Modals
├── redux/                # Redux slices and store setup
├── screens/              # App screens (e.g., HomeScreen)
├── services/             # API client and endpoints
├── styles/               # Global styles
├── utils/                # Utility/helper functions
├── theme/                # Theme
└── App.tsx               # Entry point
```

---

## 🧠 Architectural Decisions

- **Redux Toolkit** is used for predictable, centralized state management.
- **Axios** is used with a general API client (`apiClient.ts`) to centralize config and simplify API calls.
- **Feature separation**: Components, screens, logic, and styling are separated by responsibility.
- **Single Responsibility Principle**: Every component does one thing only.

---

## 🧪 Testing

- Unit tests written using **Jest** and **@testing-library/react-native**.
- Run tests with:

```bash
yarn test -u
# or
npm run test -u
```
