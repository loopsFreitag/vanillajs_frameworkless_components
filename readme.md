# Vanilla JS Web Component - Counter App

This project demonstrates how to create a simple web application using vanilla JavaScript to implement custom web components. The application includes three custom components, CountButton, SubtractButton, and Wrapper, that allow the user to increment and decrement a counter value displayed on the webpage.

# Components
### CountButton
The CountButton component is a custom web component that displays a button. When the button is clicked, it emits a custom event ('increment-clicked') to indicate that the count should be incremented.

### SubtractButton
The SubtractButton component is another custom web component that displays a button. When the button is clicked, it emits a custom event ('decrement-clicked') to indicate that the count should be decremented.

### Wrapper
The Wrapper component acts as a wrapper for the CountButton and SubtractButton components. It demonstrates how to include one component inside another.

# Run
Start the Node.js server:
```
node server.js
```

# Acknowledgments
This project is inspired by the concept of web components, providing a way to encapsulate functionality and create reusable components for web applications using vanilla JavaScript.