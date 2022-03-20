// take in samp
function buildMetadata(sample) {
  // lls in the entire dataset from json
  d3.json("samples.json").then((data) => {
    // array (data.metadata) is assigned the variable metadata
    var metadata = data.metadata;
    // filter for an objecty whose id property matches passed to buildMetadata()
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    // select first item in array and assign to var
    var result = resultArray[0];
    //  select demographic panel to put data
    var PANEL = d3.select("#sample-metadata");
    // clear demo info each time before geting new ID
    PANEL.html("");
    // append a H6 heading to the panel and print the location of the volunteer
      // grab the necessary demographic data data for the id and append the info to the panel
    Object.entries(result).forEach((key) => {   
    PANEL.append("h6").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
     });
  });
}
 
 // // create the function for the change event
 function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}

// create the function for the initial data rendering
function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
init();


