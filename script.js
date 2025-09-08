// Menu data
const menuData = {
    beverages: [
        {
            id: 1,
            name: "Espresso",
            price: 3.50,
            description: "Rich, full-bodied coffee with a perfect crema",
            category: "beverages",
            tags: ["hot", "strong"],
            icon: "☕"
        },
        {
            id: 2,
            name: "Cappuccino",
            price: 4.25,
            description: "Espresso with steamed milk and foam",
            category: "beverages",
            tags: ["hot", "milk"],
            icon: "☕"
        },
        {
            id: 3,
            name: "Latte",
            price: 4.75,
            description: "Smooth espresso with steamed milk and light foam",
            category: "beverages",
            tags: ["hot", "milk", "mild"],
            icon: "☕"
        },
        {
            id: 4,
            name: "Iced Coffee",
            price: 3.95,
            description: "Cold brew coffee served over ice",
            category: "beverages",
            tags: ["cold", "refreshing"],
            icon: "🧊"
        },
        {
            id: 5,
            name: "Frappuccino",
            price: 5.50,
            description: "Blended coffee drink with ice and whipped cream",
            category: "beverages",
            tags: ["cold", "sweet", "dessert"],
            icon: "🥤"
        },
        {
            id: 6,
            name: "Green Tea",
            price: 2.95,
            description: "Premium green tea with antioxidants",
            category: "beverages",
            tags: ["hot", "healthy", "vegan"],
            icon: "🍵"
        },
        {
            id: 7,
            name: "Chai Latte",
            price: 4.50,
            description: "Spiced tea with steamed milk",
            category: "beverages",
            tags: ["hot", "spiced", "milk"],
            icon: "☕"
        },
        {
            id: 8,
            name: "Hot Chocolate",
            price: 3.75,
            description: "Rich, creamy hot chocolate with marshmallows",
            category: "beverages",
            tags: ["hot", "sweet", "chocolate"],
            icon: "🍫"
        }
    ],
    food: [
        {
            id: 9,
            name: "Avocado Toast",
            price: 8.95,
            description: "Smashed avocado on sourdough with cherry tomatoes",
            category: "food",
            tags: ["vegetarian", "healthy", "breakfast"],
            icon: "🥑"
        },
        {
            id: 10,
            name: "Eggs Benedict",
            price: 12.50,
            description: "Poached eggs on English muffin with hollandaise",
            category: "food",
            tags: ["breakfast", "eggs"],
            icon: "🍳"
        },
        {
            id: 11,
            name: "Caesar Salad",
            price: 9.95,
            description: "Fresh romaine with parmesan and croutons",
            category: "food",
            tags: ["vegetarian", "healthy", "lunch"],
            icon: "🥗"
        },
        {
            id: 12,
            name: "Chicken Panini",
            price: 11.95,
            description: "Grilled chicken with mozzarella and pesto",
            category: "food",
            tags: ["lunch", "grilled"],
            icon: "🥪"
        },
        {
            id: 13,
            name: "Quinoa Bowl",
            price: 10.95,
            description: "Quinoa with roasted vegetables and tahini dressing",
            category: "food",
            tags: ["vegan", "healthy", "gluten-free"],
            icon: "🥙"
        },
        {
            id: 14,
            name: "Beef Burger",
            price: 13.95,
            description: "Grass-fed beef with lettuce, tomato, and special sauce",
            category: "food",
            tags: ["lunch", "dinner", "meat"],
            icon: "🍔"
        }
    ],
    desserts: [
        {
            id: 15,
            name: "Chocolate Cake",
            price: 6.95,
            description: "Rich chocolate cake with ganache frosting",
            category: "desserts",
            tags: ["chocolate", "sweet"],
            icon: "🍰"
        },
        {
            id: 16,
            name: "Tiramisu",
            price: 7.50,
            description: "Classic Italian dessert with coffee and mascarpone",
            category: "desserts",
            tags: ["coffee", "italian", "sweet"],
            icon: "🍰"
        },
        {
            id: 17,
            name: "Cheesecake",
            price: 6.75,
            description: "New York style cheesecake with berry compote",
            category: "desserts",
            tags: ["cheese", "sweet", "vegetarian"],
            icon: "🧀"
        },
        {
            id: 18,
            name: "Ice Cream Sundae",
            price: 5.95,
            description: "Vanilla ice cream with chocolate sauce and nuts",
            category: "desserts",
            tags: ["cold", "sweet", "nuts"],
            icon: "🍨"
        },
        {
            id: 19,
            name: "Macarons",
            price: 8.95,
            description: "Assorted French macarons in various flavors",
            category: "desserts",
            tags: ["french", "sweet", "colorful"],
            icon: "🍪"
        },
        {
            id: 20,
            name: "Fruit Tart",
            price: 6.25,
            description: "Fresh seasonal fruits on a buttery pastry shell",
            category: "desserts",
            tags: ["fruits", "fresh", "vegetarian"],
            icon: "🥧"
        }
    ]
};

// Get current page URL for QR code
const currentUrl = window.location.href;

// DOM elements
const menuGrid = document.getElementById('menuGrid');
const navBtns = document.querySelectorAll('.nav-btn');
const qrBtn = document.getElementById('qrBtn');
const qrModal = document.getElementById('qrModal');
const closeBtn = document.querySelector('.close');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    displayMenu('all');
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Navigation buttons
    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterMenu(category);
        });
    });

    // QR Code button
    qrBtn.addEventListener('click', function() {
        showQRCode();
    });

    // Close modal
    closeBtn.addEventListener('click', function() {
        qrModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === qrModal) {
            qrModal.style.display = 'none';
        }
    });
}

// Filter menu by category
function filterMenu(category) {
    // Update active button
    navBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });

    // Display filtered menu
    displayMenu(category);
}

// Display menu items
function displayMenu(category) {
    menuGrid.innerHTML = '';
    
    let itemsToShow = [];
    
    if (category === 'all') {
        // Show all items
        Object.values(menuData).forEach(categoryItems => {
            itemsToShow = itemsToShow.concat(categoryItems);
        });
    } else {
        // Show specific category
        itemsToShow = menuData[category] || [];
    }

    // Sort items by name
    itemsToShow.sort((a, b) => a.name.localeCompare(b.name));

    // Create menu item elements
    itemsToShow.forEach((item, index) => {
        const menuItem = createMenuItem(item, index);
        menuGrid.appendChild(menuItem);
    });
}

// Create individual menu item element
function createMenuItem(item, index) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.style.animationDelay = `${index * 0.1}s`;

    const tagsHtml = item.tags.map(tag => {
        const tagClass = getTagClass(tag);
        return `<span class="tag ${tagClass}">${tag}</span>`;
    }).join('');

    menuItem.innerHTML = `
        <div class="menu-item-image">
            ${item.icon}
        </div>
        <div class="menu-item-content">
            <div class="menu-item-header">
                <div>
                    <h3 class="menu-item-name">${item.name}</h3>
                </div>
                <div class="menu-item-price">$${item.price.toFixed(2)}</div>
            </div>
            <p class="menu-item-description">${item.description}</p>
            <div class="menu-item-tags">
                ${tagsHtml}
            </div>
        </div>
    `;

    return menuItem;
}

// Get CSS class for tag styling
function getTagClass(tag) {
    const tagMap = {
        'vegetarian': 'vegetarian',
        'vegan': 'vegan',
        'gluten-free': 'gluten-free',
        'spicy': 'spicy',
        'hot': '',
        'cold': '',
        'sweet': '',
        'healthy': '',
        'breakfast': '',
        'lunch': '',
        'dinner': ''
    };
    return tagMap[tag] || '';
}

// Show QR Code modal
function showQRCode() {
    qrModal.style.display = 'block';
    
    // Clear previous QR code
    const qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = '';
    
    // Generate QR code
    QRCode.toCanvas(qrContainer, currentUrl, {
        width: 200,
        height: 200,
        color: {
            dark: '#8B4513',
            light: '#FFFFFF'
        },
        margin: 2,
        errorCorrectionLevel: 'M'
    }, function (error) {
        if (error) {
            console.error('QR Code generation error:', error);
            qrContainer.innerHTML = '<p>Error generating QR code</p>';
        }
    });
}

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
function showLoading() {
    menuGrid.innerHTML = '<div class="loading">Loading menu...</div>';
}

// Add search functionality (bonus feature)
function addSearchFunctionality() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search menu items...';
    searchInput.className = 'search-input';
    searchInput.style.cssText = `
        width: 100%;
        padding: 1rem;
        margin-bottom: 2rem;
        border: 2px solid #e9ecef;
        border-radius: 25px;
        font-size: 1rem;
        outline: none;
        transition: border-color 0.3s ease;
    `;

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const menuItems = document.querySelectorAll('.menu-item');
        
        menuItems.forEach(item => {
            const name = item.querySelector('.menu-item-name').textContent.toLowerCase();
            const description = item.querySelector('.menu-item-description').textContent.toLowerCase();
            
            if (name.includes(searchTerm) || description.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Insert search input before menu grid
    menuGrid.parentNode.insertBefore(searchInput, menuGrid);
}

// Initialize search functionality
addSearchFunctionality();

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Press 'Q' to show QR code
    if (e.key.toLowerCase() === 'q' && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        showQRCode();
    }
    
    // Press 'Escape' to close modal
    if (e.key === 'Escape') {
        qrModal.style.display = 'none';
    }
});

// Add touch gestures for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could be used for future features
            console.log('Swipe up detected');
        } else {
            // Swipe down - could be used for future features
            console.log('Swipe down detected');
        }
    }
}
