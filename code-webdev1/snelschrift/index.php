<?php

$name = 'Wereld';
$greeting = 'Hallo, Mars!';
$greeting2 = "Hallo, ${name}!";
//var greeting2 = ´Hallo, ${name}!´;

# kardinaalteken / pound-sign

// dubbele forwardslash

/*
 Commentaar op meerdere regels
*/

/**
 * Dit is een docblok
*/


?>
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <title>Snelschrift</title>
</head>
<body>
    <p>Hallo, wereld!</p>
    <p><?php echo 'Hallo, wereld!' ?></p>
    <p><?php print 'Hallo, wereld!' ?></p>
    <p><?= 'Hallo, wereld!' ?></p>
    <p><?= $greeting ?></p>
    <p><?= $greeting2 ?></p>

</body>
</html>