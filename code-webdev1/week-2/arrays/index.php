<?php
    $a1 = [];

    $a1[] = 'Lorem';
    $a1[] = 'Ipsum';
    $a1[] = 1;

    var_dump($a1);

    echo count($a1), PHP_EOL;

    $count = count($a);
    for ($i = 0; $i < $count; ++$i) {
        echo $a1[$i], PHP_EOL;
    }

    foreach ($a1 as $arrayItem) {
        echo $arrayItem, PHP_EOL;
    }

    $a2 = [];
    $a2['one'] = [
        'NL' => 'één',
        'FR' => 'un',
        'DE' => 'eins'

    ];

    $a2['two'] = [
        'NL' => 'twee',
        'FR' => 'deux',
        'DE' => 'zwei'

    ];

    $a3 = [
        'one' => [
            'NL' => 'één',
            'FR' => 'un',
            'DE' => 'eins'
        ],
        'two' => [
            'NL' => 'twee',
            'FR' => 'deux',
            'DE' => 'zwei'
        ],
    ];

    var_dump($a2);

    echo $a2['two']['FR'], PHP_EOL;
    echo $a2['two']['FR'], PHP_EOL;

    foreach ($a3 as $word => $translations){
        foreach($translations as $iso => $translation){
            echo "Woord '${word}' is '${translation}' (${iso}).", PHP_EOL;
        }
    }

    foreach ($a3 as $word => $translations){
        foreach($translations as $iso => $translation){
            echo "Woord '${word}' is '${translation}'.", PHP_EOL;
        }
    }
?>