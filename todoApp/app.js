function saveTodo(){
    let text = $("#txtTodo").val();


if (text.length < 1) {
    alert("Todo text can not be empty");
    return; 
}


    $("#txtTodo").val("");



    //create a todo
    var syntax = "<div class='todo-item'>" + text + "</div>";

    $(".todo-list").append(syntax);
}

function init(){
  

    $("#btnSave").click(saveTodo);
    $("#txtTodo").keypress(function (e) {
        if(e.keyCode === 13) {
        saveTodo();
        }
    });
}



window.onload = init;
