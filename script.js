
        function updateClock() {
            const now = new Date();

            let hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            const period = hours >= 12 ? "PM" : "AM";

            hours = hours % 12;
            hours = hours === 0 ? 12 : hours;

            const formattedHours = String(hours).padStart(2, '0');
            const formattedMinutes = String(minutes).padStart(2, '0');
            const formattedSeconds = String(seconds).padStart(2, '0');

            document.getElementById("clock").textContent =
                `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${period}`;

            document.getElementById("date").textContent =
                now.toLocaleDateString();
        }

        updateClock();
        setInterval(updateClock, 1000);
    
