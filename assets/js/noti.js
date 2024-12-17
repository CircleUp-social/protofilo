document.addEventListener("DOMContentLoaded", function() {
            // Show the notification
            const notification = document.getElementById("notification");
            setTimeout(() => {
                notification.classList.add("show");
            }, 500); // Delay before showing the notification

            // Redirect when the button is clicked
            document.getElementById("notification-btn").addEventListener("click", function() {
                window.location.href = "https://www.getfreedomains.circleup.top";  // Replace with the website you want to redirect to
            });

            // Hide the notification after 3 seconds
            setTimeout(() => {
                notification.classList.remove("show");
            }, 6000);  // The notification will disappear after 3 seconds
        });
