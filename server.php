<?php

$todos = json_decode(file_get_contents('./todos.json'));

if(isset($_POST['newToDo'])) {

    $toDoObj = [
        "text" => $_POST['newToDo'],
        "done" => false
      ];

    $todos[] = $toDoObj;
    $newToDo = json_encode($todos);
    file_put_contents('./todos.json', $newToDo);

} else if (isset($_POST['deletedItem'])) {

    array_splice($todos,$_POST['deletedItem'], 1);
    $newToDo = json_encode($todos);
    file_put_contents('./todos.json', $newToDo);

} else {

    header('Content-type: application/json');
    echo json_encode($todos);

}

?>