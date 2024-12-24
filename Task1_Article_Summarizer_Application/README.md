# Article Summarizer Web Application

## Overview

**Task 1** of my **CODEXINTERN Front-End Web Development Internship** is a Article Summarizer Web Application is designed to provide a summarized version of any article or webpage. By inputting a URL of an article or website, users can quickly obtain a concise summary of the content. This feature is implemented using **RapidAPI**, which provides powerful tools for text analysis and summarization.

## Features

- **URL Input:** Users can input the URL of any article or webpage.
- **Automated Summarisation:** The application processes the content and generates a concise summary.
- **RapidAPI Integration:** Utilises RapidAPI to handle summarisation tasks efficiently.

## Technology Stack

- **Frontend:** HTML, CSS, JavaScript
- **Framework:** React, Tailwind CSS
- **API Integration:** RapidAPI

## Prerequisites

To run this application locally, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/user-name/Article_Summarizer_Application.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Article_Summarizer
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the application:

   ```bash
   npm start
   ```

2. Open your web browser and navigate to:

   ```
   http://localhost:5173
   ```

3. Use the application to:

   - Input the URL of an article or webpage.
   - Click on "Click" button to generate a summary.

## API Configuration

The application uses **RapidAPI** for summarization. To configure the API:

1. Create an account on [RapidAPI](https://rapidapi.com).
2. Subscribe to a suitable summarization API.
3. Obtain your API key and add it to the application's configuration file (e.g., `.env`).

Example `.env` file:

```
REACT_APP_RAPIDAPI_KEY=your-api-key
```

## Licence

This project is licensed under the [MIT Licence](LICENSE).

## Acknowledgements

- **RapidAPI** for providing summarisation services.
- The CODEXINTERN team for providing this learning opportunity.

---

