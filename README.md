# Chatbot App 🤖 (Powered by OpenAI)
Welcome to the Chatbot App! This is an interactive chatbot project developed with Angular, enabling conversations with a powerful language model via the OpenAI API.

# About the Project
This application serves as a simple yet powerful chatbot demonstration. The primary goals of this project are to showcase: 

Integration of an Angular application with backend services (using HttpClient).
Utilization of the OpenAI API to generate human-like responses.
Deployment of a Single Page Application (SPA) on GitHub Pages.
Features
Interactive Chat: Send messages and receive instant responses from the chatbot.
OpenAI Powered: Leverages the advanced capabilities of OpenAI's language models (such as GPT-3.5 or GPT-4, depending on API configuration) to generate relevant and coherent answers.
Intuitive User Interface: Clean and easy-to-use design.
Deployed on GitHub Pages: Accessible for viewing and use directly from your web browser.
How It Works
The application is built as an Angular SPA that communicates with a backend server responsible for mediating the interaction with the OpenAI API. When you send a message:

Your message is sent from the frontend Angular application to the backend server.
The backend server receives the message, adds it to the conversation context, and sends a request to the OpenAI API.
OpenAI processes the request and returns a response.
The backend server receives the response from OpenAI and relays it back to the Angular application.
The response is then displayed in the chat interface.
Important: The OpenAI API key is securely stored on the backend server and is not directly exposed on the client-side for security purposes.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
