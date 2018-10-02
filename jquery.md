# jQuery

## My notes for "Intro to jQuery" on Udacity

1. jQuery is a library of JavaScript! (a function also a object)

2. $ -> jQuery Collection

3. DOM -> like a family tree  
* (body -> div -> div -> (form -> input, ul->(li, li)))

4. hosting jQuery
* local <script src = 'js/jquery.min.js'></script>
* jQuery official <script src = '//code.jquery.com/jquery-1.11.1.min.js'></script>
* content delivery network(like google) <script src ='//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>

The last two are preferred. And "min" ensures pages are loaded much faster!

5. select by tags or class or id
* $('tags');
* $('.class');
* $('#id');

6. DOM Manipulations
```jQuery
$('#example').parent(selector)
$('#example').parents(selector)
$('#example').children(*)
$('#example').find(selector)
$('#example').sibling(selector)
```
