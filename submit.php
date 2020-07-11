<?php
$data = $_POST["data"];
$field = $_POST["field"];
$type = $_POST["type"];

$result = "success";

switch ($type) {
    case "string":
        if (strlen($data) < $_POST["minLength"]) {
            $result = "$field must be 5 charcters or more";
        }
        
        if (strlen($data) > $_POST["maxLength"]) {
            $result = "$field must be 10 charcters or fewer";
        }
    break;
    
    case "email":
        if (!filter_var($data, FILTER_VALIDATE_EMAIL)) {
            $result = "Not a properly formatted email address";
        }
    break;

    case "int":
        if (!filter_var($data, FILTER_VALIDATE_INT)) {
            $result = "Not a whole number";
        } else {

            $min = $_POST['min'];
            $max = $_POST["max"];

            if ($data < $min) {
                
                $result = "Age must be $min or over";
            }

            if ($data > $max) {
                $result = "Age must be $max or under";
            }

        }
    break;

}


echo $result;


//echo $type;


?>