# 💸 Modern Expense Tracker

A sleek and interactive expense tracking application built with vanilla HTML, CSS, and JavaScript. Track your income and expenses with real-time balance calculations and persistent data storage.

---

## 📋 Project Overview

This expense tracker application allows users to:
- Add income and expense transactions
- View a running total balance
- Filter transactions by type (All, Income, Expense)
- Delete individual transactions
- Persist data using browser localStorage

---

## 📁 File Structure & Components

### **index.html** - Application Structure
The HTML file provides the complete UI framework:

**Header Section:**
- Application title: "💸 Expense Tracker"
- Balance display box showing current total balance in large, prominent text
- Real-time balance updates with color coding (green for positive, red for negative)

**Form Section:**
- Description input field for transaction labels (e.g., "Coffee", "Salary", "Groceries")
- Amount input field for transaction values with decimal precision
- Type selector dropdown to choose between "Expense" and "Income"
- "Add to Ledger" button to submit new transactions

**Filter Navigation:**
- Three filter buttons: "All", "Income", and "Expense"
- Active state highlighting for current filter selection
- Allows users to view transactions by category

**Transaction List:**
- Dynamic list display area for all transactions
- Shows transaction description, category, amount, and delete button
- Empty state message when no transactions exist

### **script.js** - Application Logic
Handles all interactive functionality and data management:

**Data Management:**
- Loads transactions from browser localStorage on startup (`user_data`)
- Automatically saves all changes to persistent storage
- Maintains array of transaction objects with properties: id, text, amount, category

**Event Handlers:**
- Form submission: Captures user input and creates new transaction entries with unique ID (timestamp)
- Delete button: Removes transactions from array and updates display
- Filter buttons: Switches between viewing all transactions or specific types

**Core Functions:**
- `render()` - Renders transaction list based on current filter, applying conditional styling
- `calculateBalance()` - Computes total balance by summing income and subtracting expenses
- `syncData()` - Saves data to localStorage and triggers re-render
- `changeView()` - Updates active filter and refreshes display

**Visual Feedback:**
- Income items styled in green (#limegreen)
- Expense items styled in red (#red)
- Balance text color changes based on positive/negative value
- Smooth animations on all interactions

### **style.css** - Design & Styling
Creates a modern, vibrant user interface with smooth animations:

**Animations:**
- `gradientShift` - Animated background gradient cycling through colors
- `slideIn` - Smooth entrance animation for new transaction items
- `pulse` - Subtle scaling effect for hover states

**Color Scheme:**
- Primary: Slateblue and Purple gradients
- Accents: Pink, Crimson, Gold, Turquoise
- Income: Lime Green (#limegreen)
- Expense: Red (#red)
- Background: Animated multi-color gradient

**Layout:**
- Centered responsive card-based design (max-width: 420px)
- Flexbox for flexible component arrangement
- CSS Grid for input fields side-by-side layout
- Border-based styling with bold black outlines (3px)
- Drop shadow effects for depth and visual hierarchy

**Interactive Elements:**
- Input fields: Gradient background on focus with smooth transitions
- Buttons: 3D shadow effect with transform on hover/active states
- Transaction items: Hover effects with translation and shadow enhancement
- Filter buttons: Active state highlighted with gold gradient

**Typography:**
- Font: Segoe UI (system font stack fallback)
- Bold uppercase labels for form fields
- Gradient text for header title
- Varied font weights for visual hierarchy

---

## 🚀 How to Use

1. **Open** `index.html` in a web browser
2. **Enter** a transaction description (e.g., "Morning Coffee")
3. **Input** the amount (e.g., "5.50")
4. **Select** whether it's Income or Expense
5. **Click** "Add to Ledger" to add the transaction
6. **View** your total balance at the top (green if positive, red if negative)
7. **Filter** transactions using the All/Income/Expense buttons
8. **Delete** any transaction using the "Del" button
9. **Refresh** the page - your data persists in localStorage

---

## 💾 Data Storage

All transactions are automatically saved to the browser's **localStorage** under the key `user_data`. Data persists between browser sessions and survives page refreshes.

---

## ✨ Features

✅ Add income and expense transactions  
✅ Real-time balance calculation  
✅ Filter transactions by type  
✅ Delete individual transactions  
✅ Persistent data storage (localStorage)  
✅ Beautiful gradient animations  
✅ Responsive mobile-friendly design  
✅ Color-coded transaction types  
✅ Smooth hover and interaction effects  
✅ Empty state messaging

---

## 🎨 Design Highlights

- Modern glassmorphism-inspired card design
- Vibrant gradient backgrounds with animation
- Bold black borders and drop shadows for retro-modern aesthetic
- Smooth transitions and hover effects throughout
- Fully responsive layout for desktop and mobile devices
- Accessible form controls with focus states
