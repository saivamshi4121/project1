import { db } from './firebase-config.js';
import { ref, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

document.getElementById('trigger-alert-btn').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const alertData = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                timestamp: new Date().toISOString()
            };

            // Save alert data to Firebase
            const alertsRef = ref(db, 'alerts');
            push(alertsRef, alertData);

            alert('Alert triggered! The traffic controller has been notified.');
        });
    } else {
        alert('Geolocation is not supported by your browser.');
    }
});
