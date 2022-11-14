var data = 
fetch('./akc_data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));


var breed =    
d3.json("akc_data.json").then(function(data){
    breedtype = data[0];
    Object.entries(breedtype).forEach(([key, value]) =>
        {console.log(key + ': ' + value);});
});
var tbody = d3.select("tbody");

const tableData = data

function dogLoop(breed) {
    for(var i=0; i < data.length; i++){
        console.log(data[i])
    }
}


function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}