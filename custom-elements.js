// Hello World Console Output Element
class HelloWorldConsole extends HTMLElement {
  constructor() {
    super();
    
    // Directly output "Hello World!" to the console
    console.log("Hello World!");
  }
}

// Define the new element
customElements.define('hello-world-console', HelloWorldConsole);