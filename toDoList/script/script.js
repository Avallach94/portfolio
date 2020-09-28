
$("#list-group").on("click", ".close", function() {
    alert("test");
})

$("#addNewList").on("click", "#confirm", function() {
    $newListName = $('#newListName').val();
    $index = $('#list-group').children().length + 1;
    $newList = '<div>\
                    <a class="btn btn-outline-secondary btn-block mt-5" data-toggle="collapse" href="#newList'+ $index +'" role="button">' + $newListName +
                    '</a>\
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

$("#list-group").on("click", "#newTaskBtn", function() {
    $newTaskLocation= '#' + $(this).parent().parent().attr('id') + ' .row';
    $inputLocation = '#' + $(this).parent().parent().attr('id') + ' #newTask';
    console.log($newTaskLocation);
    console.log($inputLocation);
    $newTaskName = $($inputLocation).val();
    $newTask = '<div class="card col-6 flex-row align-items-center mt-3">\
                    <input type="checkbox" aria-label="Checkbox for following text input">\
                    <p class="m-0 ml-2">' + $newTaskName + '</p>\
                </div>';

    $($newTaskLocation).first().append($newTask);
});

