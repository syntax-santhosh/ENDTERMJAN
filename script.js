// Load saved transactions from localStorage or start with empty array
let transactions = JSON.parse(localStorage.getItem("user_data")) || [];

// Keeps track of which filter is active (all / income / expense)
let currentFilter = "all";

// Get references to important DOM elements
const form = document.getElementById("tracker-form");
const list = document.getElementById("transaction-list");
const balance = document.getElementById("total-balance");

const descInput = document.getElementById("desc-input");
const amtInput = document.getElementById("amt-input");
const typeInput = document.getElementById("type-input");


// Handle form submission (adding a new transaction)
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop page refresh

    // Create a new transaction object
    const entry = {
        id: Date.now(),                // Unique ID using timestamp
        text: descInput.value,         // Description
        amount: parseFloat(amtInput.value), // Convert amount to number
        category: typeInput.value      // income or expense
    };

    // Add new entry to array
    transactions.push(entry);

    // Save and re-render UI
    save();

    // Clear form fields
    form.reset();
});


// Handle delete button using event delegation
list.addEventListener("click", function (e) {
    if (e.target.classList.contains("del-btn")) {
        const id = Number(e.target.dataset.id);

        // Remove transaction with matching ID
        transactions = transactions.filter(t => t.id !== id);

        // Save and update UI
        save();
    }
});


// Render transactions on the screen
function render() {
    list.innerHTML = "";

    // Apply filter (all / income / expense)
    const filtered = transactions.filter(t =>
        currentFilter === "all" || t.category === currentFilter
    );

    // Show empty message if no records
    if (filtered.length === 0) {
        list.innerHTML = `<div class="empty-state">No records found</div>`;
        updateBalance();
        return;
    }

    // Create list items for each transaction
    filtered.forEach(t => {
        const li = document.createElement("li");
        li.className = `entry-item ${t.category}-type`;

        li.innerHTML = `
            <div>
                <div class="entry-title">${t.text}</div>
                <div class="entry-category">${t.category}</div>
            </div>
            <div class="entry-right">
                <b style="color: ${t.category === 'income' ? 'green' : 'red'}">
                    ${t.category === "income" ? "+" : "-"}$${t.amount.toFixed(2)}
                </b>
                <button class="del-btn" data-id="${t.id}">Remove</button>
            </div>
        `;

        list.appendChild(li);
    });

    // Update total balance
    updateBalance();
}


// Calculate and display total balance
function updateBalance() {
    let total = 0;

    // Add income, subtract expenses
    transactions.forEach(t => {
        total += t.category === "income" ? t.amount : -t.amount;
    });

    // Show formatted balance
    balance.textContent =
        (total < 0 ? "-$" : "$") + Math.abs(total).toFixed(2);
}


// Save data to localStorage and re-render
function save() {
    localStorage.setItem("user_data", JSON.stringify(transactions));
    render();
}


// Change filter view (called by filter buttons)
function changeView(type, btn) {
    currentFilter = type;

    // Remove active class from all buttons
    document.querySelectorAll(".filter-btn")
        .forEach(b => b.classList.remove("active"));

    // Add active class to clicked button
    btn.classList.add("active");

    // Re-render with new filter
    render();
}


// Initial render when page loads
render();
