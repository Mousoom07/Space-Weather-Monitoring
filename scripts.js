document.addEventListener('DOMContentLoaded', () => {
  const dotsButton = document.getElementById('dotsButton');
  const additionalDataPopup = document.getElementById('additionalDataPopup');

  // Toggle the visibility of the additional data popup when the dots button is clicked
  dotsButton.addEventListener('click', () => {
    additionalDataPopup.classList.toggle('show');
  });

  // Set up mock data for now
  const mockData = {
    solarWindSpeed: (Math.random() * 100 + 500).toFixed(2), // Random speed between 500-600 km/s
    magnetosphereDisturbance: (Math.random() * 50).toFixed(2), // Random disturbance between 0-50 nT
    solarIntensity: (Math.random() * 100 + 100).toFixed(2), // Random intensity between 100-200 W/m²
  };

  // Set up the Solar Intensity chart (using Chart.js)
  const ctx = document.getElementById('solarChart').getContext('2d');
  const solarChart = new Chart(ctx, {
    type: 'line', // Line chart for Solar Intensity
    data: {
      labels: ['1h ago', '30m ago', 'Now'], // Timestamps or intervals for the data
      datasets: [{
        label: 'Solar Intensity (W/m²)',
        data: [mockData.solarIntensity, mockData.solarIntensity * 1.2, mockData.solarIntensity * 1.5], // Mock data for Solar Intensity
        borderColor: '#fce94f',
        backgroundColor: 'rgba(252, 233, 79, 0.2)',
        borderWidth: 2,
        pointBackgroundColor: '#fce94f',
        pointBorderColor: '#fff',
        pointBorderWidth: 1,
        tension: 0.3, // Smooth the line for a better visual effect
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: '#f3f3f3', // Label color
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)', // Grid color for the Y-axis
          }
        },
        x: {
          ticks: {
            color: '#f3f3f3', // Label color
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)', // Grid color for the X-axis
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#f3f3f3', // Color for legend text
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Tooltip background
          titleColor: '#fce94f', // Tooltip title color
          bodyColor: '#f3f3f3', // Tooltip body color
        }
      }
    }
  });

  // Update data on the page
  document.getElementById('solar-wind-speed').textContent = `${mockData.solarWindSpeed} km/s`;
  document.getElementById('magnetosphere').textContent = `${mockData.magnetosphereDisturbance} nT`;
  document.getElementById('updateTime').textContent = new Date().toLocaleString();
});

// Function to update space weather data (using mock data for now)
async function fetchSpaceWeather() {
  try {
    // Update mock data on the page
    document.getElementById('solar-wind-speed').textContent = `${Math.random() * 100 + 500} km/s`;
    document.getElementById('magnetosphere').textContent = `${Math.random() * 50} nT`;

    // Update time
    document.getElementById('updateTime').textContent = new Date().toLocaleString();
  } catch (error) {
    console.error("Error fetching space weather data:", error);
  }
}

// Refresh data every 10 minutes (600000 ms)
setInterval(fetchSpaceWeather, 600000);

// Initial fetch
fetchSpaceWeather();
document.addEventListener('DOMContentLoaded', () => {
  const background = document.querySelector('.background');

  // Generate stars
  for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.classList.add('twinkle');
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDelay = Math.random() * 5 + 's';
    star.style.animationDuration = Math.random() * 3 + 2 + 's';
    background.appendChild(star);
  }
});
