<?php

$todos = [
    [
        "text" => "Allenarsi",
        "done"=> true
    ],
    [
        "text"=> "Fare la spesa",
        "done"=> true
    ],
    [
        "text"=> "Giardinaggio",
        "done"=> true
    ],
    [
        "text"=> "Leggere",
        "done"=> true
    ],
    [
        "text"=> "Dipingere",
        "done"=> true
    ],
    [
        "text"=> "Comprare scarpe",
        "done"=> false
    ]
];

header('Content-type: application/json');

echo json_encode($todos);

?>