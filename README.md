Ambulance Alert System
The Ambulance Alert System is a web-based application designed to send alerts to a Traffic Controller dashboard with real-time location tracking. It uses Firebase Realtime Database for storing alerts and traffic status, and integrates Leaflet.js to display interactive maps showing the location of alerts.

Features
Map Visualization: Displays the traffic location on an interactive map using Leaflet.js.
Send Alert: Allows users to send real-time location alerts.
Traffic Status: Shows traffic clearance status, updated in real-time from Firebase.
Alert Sound: Plays an alert sound whenever a new alert is detected.
Responsive Design: The application is fully responsive, working seamlessly on both desktop and mobile devices.
Technologies Used
Frontend:
HTML5, CSS3, JavaScript
Leaflet.js for map rendering and interactivity
Firebase for real-time data storage and retrieval
Responsive CSS for mobile and desktop compatibility
Backend:
Firebase Realtime Database (for storing alerts and traffic status)
Prerequisites
A modern web browser (Google Chrome, Firefox, etc.)
A Firebase project (with Realtime Database enabled) to use for the alerts and traffic status.
Setup and Installation
1. Clone the repository
bash
Copy code
git clone https://github.com/yourusername/ambulance-alert-system.git
2. Install dependencies
If you are using Firebase or any specific modules, make sure you have them correctly linked in your project.

bash
Copy code
npm install
3. Firebase Configuration
Ensure that the firebase-config.js file in the /scripts folder is correctly configured with your Firebase project credentials.

javascript
Copy code
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
4. Running the Application
To run the application locally, simply open the index.html file in a web browser.

For better performance and features, you can serve it with a local server like http-server.

bash
Copy code
npx http-server
Navigate to http://localhost:8080 in your browser to view the application.

How It Works
1. Sending an Alert
When the "Send Alert" button is clicked, the system uses the browser's geolocation API to retrieve the current position of the user.
The coordinates (latitude and longitude) are sent to Firebase Realtime Database under the "alerts" node.
2. Traffic Controller Dashboard
The dashboard retrieves and displays the alerts in real-time using Firebase listeners.
Each alert appears on the map at the specified location, helping traffic controllers visualize the emergency location.
3. Traffic Cleared Notification
When the "Traffic Cleared" button is clicked, the status is updated in Firebase and the map view and notifications are updated accordingly.
4. Alert Sound
Whenever a new alert is received, an alert sound plays to notify the traffic controller. The sound is stopped when the traffic is cleared.
Folder Structure
bash
Copy code
/ambulance-alert-system
    /assets
        alert-sound.wav           # Sound file for alerts
    /scripts
        firebase-config.js       # Firebase configuration file
    /styles
        styles.css               # Main styles for the project
    index.html                   # Home page for sending alerts
    dashboard.html               # Dashboard page for traffic controller
    README.md                    # Project documentation
