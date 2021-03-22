 // Get a reference to the table body
 var tbody = d3.select("tbody");

 // from data.js
 var tableData = data;
 
 // Select the button
 var button = d3.select("#filter-btn");
 
 // Select the form
 var form = d3.select("#form");
 
 // Select the datetime element and get the raw HTML node
 var dateElement = d3.select("#datetime");

 // Select the city element and get the raw HTML node
 var cityElement = d3.select("#city");

 // Select the state element and get the raw HTML node
 var stateElement = d3.select("#state");

 // Select the country element and get the raw HTML node
 var countryElement = d3.select("#country");

  // Select the sphere element and get the raw HTML node
  var shapeElement = d3.select("#shape");

 
 // Create event handlers 
 button.on("click", runEnter);
 form.on("submit",runEnter);
 
 // Complete the event handler function for the form and the button
 function runEnter() {
 
     // Prevent the page from refreshing
     d3.event.preventDefault();
 
     // Get the value property of the date element
     var dateValue = dateElement.property("value");

     // Get the value property of the city element
     var cityValue = cityElement.property("value");

     // Get the value property of the state element
     var stateValue = stateElement.property("value");

     // Get the value property of the country element
     var countryValue = countryElement.property("value");

     // Get the value property of the shape element
     var shapeValue = shapeElement.property("value");

     //console.log(stateValue);

     // Clear the table body
     tbody.html('');
     // Use the form input to filter the data by date
     // Filter datetime only if date input is entered
     // Filter city only if city input is entered
     // Filter state only if state input is entered
     // Filter country only if country input is entered   
     // Filter shape only if shape input is entered 
     var matchedDateData = tableData.filter(record => record.datetime == (dateValue===''?record.datetime:dateValue)).filter(record => record.city == (cityValue ===''?record.city:cityValue)).filter(record => record.state == (stateValue===''?record.state:stateValue)).filter(record => record.country == (countryValue===''?record.country:countryValue)).filter(record => record.shape == (shapeValue===''?record.shape:shapeValue));
 
     console.log(matchedDateData);

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