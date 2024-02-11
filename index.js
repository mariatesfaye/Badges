// Function to fetch data from an API
const fetchData = async () => {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

// Function to display fetched data
const displayData = (data) => {
    data.forEach((item) => {
        console.log(`ID: ${item.id}, Name: ${item.name}, Description: ${item.description}`);
    });
};

// Main function
const main = async () => {
    try {
        // Fetch data from the API
        const data = await fetchData();

        // Display the fetched data
        displayData(data);
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

// Call the main function to start the application
main();
