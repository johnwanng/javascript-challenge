 // Get a reference to the table body
var tbody = d3.select("tbody");

// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Select the input element and get the raw HTML node
var dateElement = d3.select("#datetime");
  

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form and the button
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value property of the date element
    var dateValue = dateElement.property("value");

    console.log(dateValue);
    
    // Clear the table body
    tbody.html('');
    // Use the form input to filter the data by date
    var matchedDateData = tableData.filter(record => record.datetime == dateValue);

    // Loop through each matching record and populate the table row and cell
    matchedDateData.forEach((ufoData) => 
        { 
            var row = tbody.append("tr");
            Object.entries(ufoData).forEach(([key,value]) =>
                {
                    row.append("td").text(value);
                });
        });
};