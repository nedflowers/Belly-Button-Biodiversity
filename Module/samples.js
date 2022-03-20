// retrieve data
d3.json("samples.json").then(function(data){
    console.log(data);
});

// xtract only the wfreq, or the weekly belly button washing frequency, of each person into a new array.
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

// sort in desc
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
    console.log(wfreq); 
});

// sort asce
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
    person.wfreq).sort((a,b) => a - b);
    console.log(wfreq);
});

// filter for nulls
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});


// Return key val pairs
researcher1 = {
    name: 'Roza',
    age: 34,
    hobby: 'Hiking'
};

// key val pairs
console.log(Object.entries(researcher1));


// each trait and correspond
researcher1.forEach(([first, second]) => console.log(first
    + ": " + second));


// Use Object.entries() and forEach() to print all the metadata of the first person
d3.json("samples.json").then(function(data){
        firstPerson = data.metadata[0];
        Object.entries(firstPerson).forEach(([key, value]) =>
          {console.log(key + ': ' + value);});
});