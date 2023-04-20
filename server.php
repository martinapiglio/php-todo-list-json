<?php

$todos = json_decode(file_get_contents('./todos.json'));

header('Content-type: application/json');

echo json_encode($todos);

?>