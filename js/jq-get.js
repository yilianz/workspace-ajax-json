
var keys = '<p id="keys">Your Key</p>';
$('#content').append(keys);

$('#name').blur(function(){
    // get the file and append the data
    var requestData = "username="+$(this).val();
    $.get('checkUserName.php',requestData).done( function(data){
            $('#keys').html(data);
    }).fail(function(){
        alert("get request failed");
    });
         

});
        
    
    

