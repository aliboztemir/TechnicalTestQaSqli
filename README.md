# TechnicalTestQaSqli

## 📌 Project Overview

This is a **Playwright-based automation project** for **UI and API testing**.  
The project includes:
- **Web UI tests** (Google Search & Wikipedia validation)
- **API tests** (PetStore API)
- **Data handling in API responses**
- **Environment variable handling (`.env` integration)**

---

## 📂 Project Structure

```
TechnicalTestQaSqli/
│── src/
│   ├── api/                   # API-related classes
│   │   ├── PetStoreAPI.ts      # API wrapper for PetStore endpoints
│   │
│   ├── models/                 # Data models
│   │   ├── UserModel.ts        # User model for API requests
│   │
│   ├── pages/                  # Page Objects for UI Testing
│   │   ├── GoogleSearchPage.ts # Page Object for Google Search
│   │   ├── WikipediaPage.ts    # Page Object for Wikipedia
│
│   ├── tests/                  # Test cases
│   │   ├── api/                # API Tests
│   │   │   ├── createUser.test.ts        # User creation test
│   │   │   ├── getUser.test.ts           # Retrieve user data test
│   │   │   ├── getSoldPets.test.ts       # Get sold pets data
│   │   │   ├── countSoldPetsByName.test.ts  # Count occurrences of pet names
│   │   │
│   │   ├── ui/                 # UI Tests
│   │   │   ├── webAutomation.test.ts   # UI test for Google & Wikipedia
│
│   ├── utils/                   # Utility classes
│   │   ├── PetCounter.ts         # Helper class for counting pet names
│
│── .env                          # Environment variables file
│── .gitignore                     # Ignored files/folders
│── package.json                   # Node.js dependencies
│── playwright.config.ts            # Playwright configuration
│── tsconfig.json                   # TypeScript configuration
│── test-results/                   # Playwright test result outputs
```

---

## 🚀 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/aliboztemir/TechnicalTestQaSqli.git
cd TechnicalTestQaSqli
```

### **2️⃣ Install Dependencies**
```sh
npm install
npx playwright install
```

### **3️⃣ Setup Environment Variables**
Create a `.env` file in the root directory and add the following:
```
GOOGLE_URL=https://www.google.com
PETSTORE_API_TEST_BASE_URL=https://petstore.swagger.io/v2
```

---

## ✅ Running Tests

### **🔹 Run All Tests**
```sh
npx playwright test
```

### **🔹 Run UI Tests Only**
```sh
npx playwright test --project="UI Tests"
```

### **🔹 Run API Tests Only**
```sh
npx playwright test --project="API Tests"
```

---

### **Clear Node Modules & Reinstall (if necessary)**
```sh
rm -rf node_modules package-lock.json  # Linux/Mac
Remove-Item -Recurse -Force node_modules package-lock.json  # PowerShell
npm install
```

---

## 📜 Features Implemented
✅ **Playwright-based UI testing**  
✅ **Page Object Model (POM) for UI tests**  
✅ **API Testing with Playwright’s `request` API**  
✅ **Environment variable handling via `.env`**  
✅ **Data-driven testing for API responses**  
✅ **Parallel test execution with Playwright**

---

## 🔥 Notes
- The project is structured to **separate UI and API tests** for better maintainability.
- **Page Object Model (POM)** is used for **UI tests**.
- **API abstraction layer** (`PetStoreAPI.ts`) is created to handle API interactions.
- **Environment variables** are used to manage URLs dynamically.

---
