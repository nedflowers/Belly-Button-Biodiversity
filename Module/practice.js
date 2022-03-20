/// MAP()
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);


var numbers = [0,2,4,6,8];
var five = numbers.map(function(num){
    return num + 5;
});
console.log(five);

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityPop = cities.map(function(city){
    return city.population;
});
console.log(cityPop);


// FILTER() ANON Func
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});
console.log(larger);


var familyAge = [2,3,39,37,9];
var olderThanFive = familyAge.filter(function(age){
    return age > 5;
});
console.log(olderThanFive);

// ARROW FUNCTIONS
// FILTER() string
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var onlyS = words.filter(word => word.startsWith("s")
);
console.log(onlyS);

// Map()
var numbers = [1,2,3,4,5];
var doubled = numbers.map(num => num * 2);
console.log(doubled);

//Sort()
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);
//Sort() same funct, diff var names
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);

//Sort(desc)
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement).reverse();
console.log(sortedAge);
// also desc
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => b - a);

// SLICE ()
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
console.log(slice1);

// SELECT FIRST 3 with slice
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var words1 = words.slice(0,3);
console.log(words1);
// SLice end
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice2 = words.slice(3,);
console.log(slice2);