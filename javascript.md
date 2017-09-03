# JavaScript Notes

## My Notes for the ["JavaScript Basics"](https://classroom.udacity.com/courses/ud804) on Udacity

### 1. There are no classes in JS! Only Objects!

```JavaScript
var bio = {
  "name" :"James",
  "age": 32,
  "skills": skills
};
$('#main').append(bio.name);
```


### 2. Dot and Bracket Notation
```JavaScript
var work = {};
work.position = "web developer";
work["years"] = "2003 - 2005";
```

### 3. Literal notation - JSON (JavaScript Object Notation)
* Using https://jsonlint.com/ to validate json!
```JavaScript
var education = {
  "schools" : [
    {
      "name" : "Anhui University",
      "city" : "Hefei, China",
      "degree": "BS"
      "major" : "Applied Chemistry"
    },
    {
      "name" : "Washington University in St. Louis",
      "city" : "St. Louis, USA",
      "degree": "PhD"
      "major" : "Chemistry"
    }
  ],
  "onlineCourses":[
    {
      'title': 'JavaScript Basics',
      'school': 'Udacity',
      'dates': 'September 2017',
      'url': 'https://classroom.udacity.com/courses/ud804/'
    },
    {
      'title': '',
      'school': 'Wes Bos',
      'dates': 'November 2015',
      'url': 'https://reactforbeginners.com'
    }
  ]
}
```

### 4. evaluators : < , > , <=, >=, === (safer than ==), !=, ==

### 5. flow Control
* if statement
* while loop
* for-in loop (usually bad practice, better use standard for loop or forEach loop)
```JavaScript
for(item in object){
  console.log(item);
}
```

### 6. function
```JavaScript
//way1
var myFunc = function(para1, para2){
  //code goes here
}

//way2
function myFunc(para1, para2){
  //code goes here
}
```

### 7. collect click Locations
```JavaScript
$(document).click(function(loc)){
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});
```

### 8. Functions are objects! Everything in JS is an object!! Objects can encapsulate functions!
```JavaScript
project.display = function(){
  //display code goes here
}
```

### 9. Anonymous function

### 10. [D3 for visualization!!](https://d3js.org/)
