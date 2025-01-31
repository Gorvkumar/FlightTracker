Flight Status Application - Project Assignment
This project is designed to display and manage flight information in a user-friendly manner. It includes essential features like a flight table, detailed view of individual flights, and error handling to provide a smooth user experience while interacting with flight data. The application is built using React, TypeScript, and Axios, with additional focus on testing and styling.

Deployed On Netlify - Website Link
Deployed on Github As well - Repository Link
Features
1. Flight Table: The application fetches and displays a list of flights in a table with the following columns: Flight Number, Airline, Origin, Destination, Departure Time, and Status. Every 'x' seconds, fresh data is fetched from the API to update the displayed flight statuses.
2. Detail View: Clicking on a row (or a link within a row) navigates the user to a detailed view of that flight. In the detailed view, comprehensive data for the selected flight is fetched and displayed.
3. Navigation: React Router is used to handle navigation between the main flight board and the detailed flight view.
4. Error Handling: The application provides feedback to the user in case of: - Issues fetching data (e.g., network error, API limit exceeded). - Requested flight details being unavailable.
5. Styling: The design is clear and user-friendly, ensuring that the flight board is easy to read and interact with.
API Details
1. Base API URL for Flight Data: https://flight-status-mock.core.travelopia.cloud/flights
2. Endpoint for Detailed Flight Information: https://flight-status-mock.core.travelopia.cloud/flights/:id
Technical Requirements
Language: TypeScript
Framework: React
HTTP Client: Axios or Fetch API to make HTTP requests.
Testing
The project includes unit tests using Jest, Vitest, and React Testing Library. These tests ensure that application logic and API interactions are thoroughly covered.

Deployment & Organization
Deployment: The application is deployed on Netlify, providing easy access for users and ensuring fast load times through automatic continuous deployment.
Version Control & Code Management: The project is hosted on GitHub, ensuring version control, collaboration, and proper code organization. The repository follows standard practices with clear commits, branch management, and README documentation for easy navigation.



