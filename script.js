
        function sendResponse(choice) {
            // Disable buttons to prevent multiple clicks
            document.getElementById("yes-btn").disabled = true;
            document.getElementById("no-btn").disabled = true;

            if (choice === "Yes") {
                Swal.fire({
                    title: "I love you.. ❤️",
                    text: "Thank you! ❤️",
                    icon: "success",
                    confirmButtonText: "Yay!"
                });
                document.getElementById("response").value = "Your crush accepted your proposal!";
            } else {
                Swal.fire({
                    title: "No problem ! 😊",
                    text: "But we are still friends ❤️❤️!",
                    icon: "info",
                    confirmButtonText: "Okay!"
                });
                document.getElementById("response").value = "Your crush did not accept the proposal, but you are still friends!";
            }

            // Send email notification after delay
            setTimeout(() =>{
                 document.getElementById("emailForm").submit();
             // Increased delay for better user experience
            },150000);
     }