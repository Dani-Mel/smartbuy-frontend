function handleClick() {
    const button = document.getElementById('myButton');
    if (button) {
      button.innerHTML = 'Button Clicked!';
    }
  }
  
  // Create a button element
  const button = document.createElement('button');
  button.textContent = 'Click Me!';
  button.id = 'myButton';
  
  // Attach the click event handler
  button.addEventListener('click', handleClick);
  
  // Append the button to the body of the HTML document
  document.body.appendChild(button);