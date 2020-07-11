<?php
$val = implode(", ", $_GET);

if ($val == "test") {
    echo "success";
} else {
    echo "$val";
}

?>