// scripts/dashboard.js
import { db } from './firebase-config.js';
import { ref, onChildAdded } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the map
    const map = L.map('map').setView([12.9716, 77.5946], 13); // Default view

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Placeholder for the ambulance marker
    let marker = null;

    // Listen for real-time updates from Firebase
    const alertsRef = ref(db, 'alerts');
    onChildAdded(alertsRef, (snapshot) => {
        const alert = snapshot.val();
        const position = [alert.latitude, alert.longitude];

        // Update the marker position
        if (!marker) {
            marker = L.marker(position).addTo(map);
        } else {
            marker.setLatLng(position);
        }

        // Center the map on the new marker
        map.setView(position, 13);
    });
});
