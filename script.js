function calculateDates() {
    const inputDate = new Date(document.getElementById('inputDate').value);
    const today = new Date();

    // Calculate the difference in years
    const yearsDifference = today.getFullYear() - inputDate.getFullYear();
    
    //Create Variables for 3 & 5 Years
    const thirdYear = new Date(inputDate);
    thirdYear.setDate(inputDate.getFullYear() + 3);
    
    // let fifthYear = inputDate.setDate(inputDate.getDate() + 60);

    // Check if the date is valid
    if (isNaN(inputDate)) {
        document.getElementById('results').innerText = "Please enter a valid date.";
        return;
    }

    // Calculate future dates (commented out for now)
    // const oneYear = new Date(inputDate);
    // oneYear.setFullYear(inputDate.getFullYear() + 1);
    // ... (similar for three, five, and twenty-five years)

    // Calculate warranty status
    const totalDifference = yearsDifference * 12 + (today.getMonth() - inputDate.getMonth()); // Total months difference
    let warrantyStatus;

    if (totalDifference < 36) {
        warrantyStatus = "In-Warranty All"; // inputDate + 3 Years
    } else if (totalDifference >= 36 && totalDifference < 60) {
        warrantyStatus = "In-Warranty Parts";
    } else {
        warrantyStatus = "Out of Warranty";
    }

    // Display the warranty status
    document.getElementById('results').innerHTML = `
        <div class="results-item"><strong>${warrantyStatus} Expires ${thirdYear}</div>
    `;

    const element = document.getElementById("results");
    element.style.display = "flex";
    element.style.justifyContent = "center";
    element.style.alignItems = "center";
    element.style.backgroundColor = "yellow";
}

