<?php
    if (isset($_POST['json'])) {
        // do user authentication as per your requirements
        // ...
        // ...
        // based on successful authentication
        echo json_encode(array('success' => 1));
    } else {
        echo json_encode(array('success' => 0));
    }
?>