let date_time = document.getElementById('date-time');

var today = new Date().toLocaleString().replace(",","").replace(/:.. /," ");

date_time!.textContent = today;

function addToTerminal(text) {
            const terminal = document.getElementById('inner-terminal');
            const newLine = document.createElement('div');
            newLine.textContent = text;
            terminal!.appendChild(newLine);
        }

        // Function to handle user input
        function handleInput() {
            const input = document.getElementById('command');
            const command =  (<HTMLInputElement>document.getElementById('command')).value.trim();
            // Add command to terminal
            addToTerminal('> ' + command);

            // Available commands
            if (command === 'help') {
                addToTerminal('Available commands:');
                addToTerminal('- help: Display available commands');
                addToTerminal('- date: Display current date');
                addToTerminal('- clear: Clear the terminal');
            } else if (command === 'date') {
                const currentDate = new Date().toLocaleString();
                addToTerminal(currentDate);
            } else if (command === 'clear') {
                const terminal = document.getElementById('inner-terminal');
                terminal!.innerHTML = '';
            } else {
                addToTerminal('Command not found: ' + command);
            }

            (<HTMLInputElement>document.getElementById('command')).value = '';
            input!.focus();
        }

        // Event listener for handling user input
        const input = document.getElementById('command');
        input!.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent default form submission behavior
                handleInput(); // Handle user input
            }
        });

        // Set focus to the input field when the page loads
        window.onload = function() {
            input!.focus();
        };
