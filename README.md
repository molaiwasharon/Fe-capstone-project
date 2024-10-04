Overview
This React-based weather application allows users to search for the current weather of any city by integrating the OpenWeather API. It provides weather details such as temperature, weather condition, and other key information in a user-friendly interface. The app also displays the current date and time.

Features
City Search: Users can search for the current weather of any city using a search bar.
Weather Data Display: The weather data includes temperature, condition, and other key metrics.
Dynamic Date and Time: The app displays the current date and time in a dynamic format, updating every minute.
Error Handling: The app provides an error message if the city cannot be found or weather data cannot be fetched.
Responsive Design: The application is responsive and adjusts its layout across devices.
Technologies Used
React: Main framework for building the application interface.
Axios: For making API calls to fetch weather data from OpenWeather API.
CSS: Used for styling the app's interface.
OpenWeather API: Used to fetch live weather data.
Getting Started
Prerequisites
Before running the application, ensure that you have the following installed:

Node.js
npm (Node Package Manager)
Installation
Clone the Repository:

bash
Copy code
git clone <repository_url>
cd <repository_folder>
Install Dependencies: Install the required dependencies by running:

bash
Copy code
npm install
Set OpenWeather API Key: Replace the placeholder OpenWeather API key in the fetchWeatherData function with your actual API key:

js
Copy code
const apiKey = "your_openweather_api_key";
Run the Application: To start the development server, run:

bash
Copy code
npm start
The app should now be running at http://localhost:3000.

File Structure
src/
App.jsx: Main component that handles app state and logic.
Components/
SearchBar.jsx: Allows users to enter a city name to fetch weather data.
WeatherCard.jsx: Displays weather information in a card format.
ErrorMessage.jsx: Renders error messages when necessary.
Footer.jsx: Displays footer content for the application.
style.css: Contains styling for the app components.
Usage
Search for a City: Enter a city name in the search bar and click "Search" or press "Enter". The app will display the current weather details for the specified city.
View Weather Data: Once a valid city is entered, the weather information is displayed, including temperature, conditions, and the current date and time.
Error Handling: If the city is not found or there is an issue fetching data, an error message will be displayed.
Customization
Change Default City: To change the default city displayed on app load, modify the initial state of the city variable in App.js:

License
This project is licensed under the MIT License - see the LICENSE file for details.
