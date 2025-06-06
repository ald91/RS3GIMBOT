    

    
    function ThalmundGET() {
    // Define the API URL
    thalmundSore = getThalmund();
    
    // Make a GET request
    fetch(thalmundSore)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {

            // app takes data from stringified API reading
            var thalmund_string = parse.json(data.text["*"]);

           




        .catch(error => {
            console.error('Error:', error);
        });
