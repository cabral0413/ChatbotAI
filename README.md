
# Chatbot Application

This is a simple chatbot application built using HTML, CSS, and JavaScript, with a backend server in Node.js to handle API requests securely.

## Table of content


- Introduction
- Features
- Installation
- Usage
- Folder Structure
- Dependencies
- Environment Variables
- Contributing
- License

## Introduction

This project is a chatbot application that uses the OpenAI GPT-3.5-turbo model to generate responses. The frontend is built with HTML, CSS, and JavaScript, and the backend server is built with Node.js, Express, and Axios to securely manage API requests.
## Features

- Chatbot interface with a toggler button.
- Secure backend server to handle API requests.
- User-friendly UI with a gradient background and custom fonts.
- Responsive design for different screen sizes.



## Installation


To set up this project locally, follow these steps:

#### 1. Clone the repository:

```bash
git clone https://github.com/your-username/chatbot-application.git
cd chatbot-application
```

#### 2. Install dependencies:

Ensure you have Node.js and npm installed, then run:

```bash
npm install
```

#### 3. Set up environment variables:
Create a .env file in the root directory and add your OpenAI API key:

```bash
API_KEY=your_openai_api_key_here
```
#### 4. Run the server:

```bash
node server.js
```

#### 5. Open index.html in your browser:
You can use a live server extension in VSCode or any static server to serve the HTML file.


## Usage

- Click the chatbot toggler button at the bottom right to open the chatbot.
- Type your message in the input area and press Enter or click the send button to send the message.
- The chatbot will respond with a message generated using the OpenAI API.

## Folder Structure


```bash
.
├── images/
│   └── file.png
    |__ chatbot.jpg
├── node_modules/
├── .env
├── index.html
├── package.json
├── script.js
├── server.js
├── style.css
└── README.md

```
## Dependencies 

- Express
- Axios
- Cors
- Dotenv

To install these dependencies, run:

``` bash
npm install express axios cors dotenv

```
## Environment Variables

This project requires an environment variable for the OpenAI API key. Create a .env file in the root directory with the following content:

``` bash

API_KEY=your_openai_api_key_here

```

## Contributing

Contributions are always welcome!


Please fork the repository and create a pull request with your changes. Make sure to follow the coding standards and write clear commit messages.

