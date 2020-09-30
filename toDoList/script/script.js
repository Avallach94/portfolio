// add List

$("#addNewList").on("click", "#confirm", function() {
    $newListName = $('#newListName').val();
    $index = $('#list-group').children().length + 1;
    $newList = '<div>\
                    <a class="btn btn-outline-secondary btn-block mt-5" data-toggle="collapse" href="#newList'+ $index +'" role="button"><span>' + $newListName +
                    '<i class="fas fa-pencil-alt renameList"></i></span><i class="fas fa-trash deleteList"></i></a>\
                    <div class="collapse" id="newList'+ $index +'">\
                        <div class="row align-items-center flex-column mt-3">\
                        </div>\
                        <div class="row justify-content-center mt-3">\
                            <input type="text" class="form-control col-3" id="newTask">\
                            <button class="btn btn-outline-success" id="newTaskBtn">Dodaj</button>\
                        </div>\
                    </div>\
                </div>';
    $('#list-group').append($newList);
});

// rename List

$("#list-group").on("click", ".renameList", function() {
    $oldName = $(this).parent().text();
    $(this).parent().replaceWith('<row class="d-flex"><input type="text" class="form-control col-4" id="renameInput"></input><button class="btn btn-primary col-2" id="renameInputSuccess">Zmień</button><button class="btn btn-danger col-2" id="renameInputCancel">Anuluj</button></row>');
    $("#list-group").on("click", "#renameInputSuccess", function() {
        $(this).parent().replaceWith('<span>' + $('#renameInput').val() + '<i class="fas fa-pencil-alt renameList"></i></span>');
    });
    $("#list-group").on("click", "#renameInputCancel", function() {
        $(this).parent().replaceWith('<span>' + $oldName + '<i class="fas fa-pencil-alt renameList"></i></span>');
    });
});

// delete list

$("#list-group").on("click", ".deleteList", function() {
    $(this).parent().parent().remove();
});

// add Task

$("#list-group").on("click", "#newTaskBtn", function() {
    $newTaskLocation= '#' + $(this).parent().parent().attr('id') + ' .row';
    $inputLocation = '#' + $(this).parent().parent().attr('id') + ' #newTask';
    $newTaskName = $($inputLocation).val();
    $newTask = '<div class="card col-6 flex-row align-items-center mt-3">\
                    <input type="checkbox" aria-label="Checkbox for following text input">\
                    <p class="m-0 ml-2">' + $newTaskName + '<i class="fas fa-trash deleteTask"></i></p>\
                </div>';

    $($newTaskLocation).first().append($newTask);
});

// delete Task

$("#list-group").on("click", ".deleteTask", function() {
    $(this).parent().parent().remove();
});


