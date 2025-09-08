# Alaa Cafe - Digital Menu

A modern, responsive web application for displaying a cafe menu with QR code functionality. Perfect for restaurants and cafes looking to provide a digital menu experience to their customers.

## Features

- 🎨 **Modern Design**: Beautiful, responsive design that works on all devices
- 📱 **Mobile-First**: Optimized for mobile devices with touch-friendly interface
- 🔍 **Search Functionality**: Customers can search for specific menu items
- 🏷️ **Category Filtering**: Filter menu by beverages, food, desserts, or view all
- 📊 **QR Code Generation**: Generate QR codes for easy menu sharing
- ⚡ **Fast Loading**: Optimized for quick loading and smooth animations
- 🎯 **Accessibility**: Keyboard shortcuts and screen reader friendly

## Quick Start

1. **Open the Application**: Simply open `index.html` in any modern web browser
2. **View Menu**: Browse through different categories using the navigation buttons
3. **Search Items**: Use the search bar to find specific menu items
4. **Generate QR Code**: Click the "Show QR Code" button to generate a QR code for sharing

## File Structure

```
alaa-cafe-menu/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality and menu data
└── README.md           # This documentation file
```

## Menu Categories

### Beverages
- Espresso, Cappuccino, Latte
- Iced Coffee, Frappuccino
- Green Tea, Chai Latte, Hot Chocolate

### Food
- Avocado Toast, Eggs Benedict
- Caesar Salad, Chicken Panini
- Quinoa Bowl, Beef Burger

### Desserts
- Chocolate Cake, Tiramisu
- Cheesecake, Ice Cream Sundae
- Macarons, Fruit Tart

## Customization

### Adding New Menu Items

To add new menu items, edit the `menuData` object in `script.js`:

```javascript
{
    id: 21,
    name: "New Item Name",
    price: 9.99,
    description: "Description of the item",
    category: "beverages", // or "food", "desserts"
    tags: ["tag1", "tag2"],
    icon: "🍕" // Emoji icon
}
```

### Modifying Styling

Edit `styles.css` to customize:
- Colors and themes
- Fonts and typography
- Layout and spacing
- Animations and effects

### Updating Contact Information

Edit the footer section in `index.html` to update:
- Phone number
- Email address
- Physical address
- Opening hours

## Keyboard Shortcuts

- **Q**: Show QR code modal
- **Escape**: Close modal

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## QR Code Usage

1. Click the "Show QR Code" button
2. The QR code will display the current page URL
3. Customers can scan the QR code to access the menu
4. Perfect for table tents, posters, or digital displays

## Mobile Features

- Touch-friendly navigation
- Swipe gestures support
- Responsive grid layout
- Optimized for small screens

## Future Enhancements

- Online ordering system
- Customer reviews and ratings
- Menu item images
- Multi-language support
- Admin panel for menu management
- Integration with POS systems

## Support

For questions or support, please contact:
- Email: info@alaacafe.com
- Phone: +1 (555) 123-4567

## License

© 2024 Alaa Cafe. All rights reserved.
