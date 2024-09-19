function calculateDates() {
    const inputDate = new Date(document.getElementById('inputDate').value);
    const today = new Date();

    // Calculate the difference in years
    const yearsDifference = today.getFullYear() - inputDate.getFullYear();
    
    //Create Variables for 3 & 5 Years
    const thirdYear = new Date(new Date(inputDate).setFullYear(new Date(inputDate).getFullYear() + 3)).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.');
    const fifthYear = new Date(new Date(inputDate).setFullYear(new Date(inputDate).getFullYear() + 5)).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.');
    
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
    // const totalDifference = yearsDifference * 12 + (today.getMonth() - inputDate.getMonth()); // Total months difference
    let warrantyStatus;

    if (yearsDifference <= 3) {
        warrantyStatus = "In-Warranty All " + "<br>Parts only as of " + thirdYear; 
    } else if (yearsDifference > 3 && yearsDifference < 5) {
        warrantyStatus = "In-Warranty Parts " + "<br>Expires on" + fifthYear;
    } else {
        warrantyStatus = "Out of Warranty " + "<br>Expired on " + fifthYear;
    }
    warrantyStatus.replace("\n", "<br>")
    console.log(warrantyStatus)
    // Display the warranty status
    document.getElementById('results').innerHTML = `
        <div class="results-item"><strong>${warrantyStatus}</div>
    `;

    const element = document.getElementById("results");
    element.style.display = "flex";
    element.style.justifyContent = "center";
    element.style.textAlign = "center";
    element.style.backgroundColor = "yellow";
    

}

