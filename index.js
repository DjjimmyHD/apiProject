$(document).ready( function(){
    $.get('your api url goes here').then(
      function(data) {
        // type whatyou want to do with your data in bewteen these lines
        console.log(data);
      }
    )
})