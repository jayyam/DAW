<?php
function getdb() {
    $db =pg_connect('host=172.20.254.152 
                                    port=5432 
                                    dbname=cierva 
                                    user=pepito 
                                    password=cierva 
                                    connect_timeout=8') or die('connection failed');
    return $db;
}
echo getdb();
phpinfo();
?>