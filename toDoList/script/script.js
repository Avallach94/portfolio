// add List

$("#addNewList").on("click", "#confirm", function() {
    $newListName = $('#newListName').val();
    $index = $('#list-group').children().length + 1;
    $newList = '<div>\
                    <a class="btn btn-block btn-lg mt-5 list" data-toggle="collapse" href="#newList'+ $index +'" role="button" aria-expanded="true">\
                        <div class="row justify-content-between">\
                            <span class="ml-3">' + $newListName +
                            '<i class="fas fa-pencil-alt renameList ml-3"></i>\
                            </span><i class="fas fa-trash deleteList mt-1 mr-3"></i>\
                        </div>\
                    </a>\
                    <div class="collapse" id="newList'+ $index +'">\
                        <div class="row align-items-center flex-column mt-3">\
                        </div>\
                        <div class="row justify-content-center mt-3">\
                            <input type="text" class="form-control col-3" id="newTask">\
                            <button class="btn" id="newTaskBtn"><i class="fas fa-chevron-up"></i></button>\
                        </div>\
                    </div>\
                </div>';
    $('#list-group').append($newList);
});

// rename List 

$("#list-group").on("click", ".renameList", function() {
    $oldName = $(this).parent().text();
    $(this).parent().replaceWith('<row class="d-flex"><input type="text" class="form-control col-8" id="renameInput"><button class="btn" id="renameInputSuccess"><i class="fas fa-check"></i></button><button class="btn" id="renameInputCancel"><i class="fas fa-times"></i></button></row>');
    $("#list-group").on("click", "#renameInputSuccess", function() {
        $(this).parent().replaceWith('<span class="ml-3">' + $('#renameInput').val() + '<i class="fas fa-pencil-alt renameList ml-3"></i></span>');
    });
    $("#list-group").on("click", "#renameInputCancel", function() {
        $(this).parent().replaceWith('<span class="ml-3">' + $oldName + '<i class="fas fa-pencil-alt renameList ml-3"></i></span>');
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
    $newTask = '<div class="col-8 d-flex flex-row align-items-center justify-content-between mt-3 task">\
                    <span class="d-flex flex-row align-items-center m-1">\
                        <input class="mr-3" type="checkbox">' + $newTaskName + '</span>\
                        <i class="fas fa-trash deleteTask"></i>\
                </div>';

    $($newTaskLocation).first().append($newTask);
});

// delete Task

$("#list-group").on("click", ".deleteTask", function() {
    $(this).parent().remove();
});


