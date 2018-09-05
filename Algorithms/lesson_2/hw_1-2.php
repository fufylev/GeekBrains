<?php
function ShellSort($elements)
{
    $k = 0;
    $length = count($elements); // = 5
    $gap [0] = ( int )($length / 2); // = 2

    $n = 0; // counter for Number of steps to execute the code
    $n1 = 0;
    $n2 = 0;
    $n3 = 0;
    $n4 = 0;


    $replace1 = 0; // count for array replacement on first level
    $replace2 = 0; // count for array replacement on second level inside the loop

    while ($gap [$k] > 1) { // ДЛЯ ЧЕГО ЭТО ???
        $k++;
        $gap [$k] = ( int )($gap [$k - 1] / 2);
        $n1++;
        // echo '$gap - ';
        // print_r($gap);
        // echo PHP_EOL;
        // echo '$k = ' . $k . PHP_EOL;
    }

    for ($i = 0; $i <= $k; $i++) { // $k = 1; so there 2 steps of this FOR
        $step = $gap [$i]; // 2 -> 1
        // echo '$step = ' . $step .PHP_EOL;
        $n2++;
        // echo '$n2 = ' . $n2 . PHP_EOL . '*';
        for ($j = $step; $j < $length; $j++) { //
            $temp = $elements [$j]; // array
            $p = $j - $step; //

            // echo '$p = ' . $p .PHP_EOL;
            // echo '$temp [\'price\'] = ' . $temp ['price'] .PHP_EOL;
            // echo 'elements [$p][\'price\'] = ' . $elements[$p]['price'] .PHP_EOL;

            while ($p >= 0 && $temp ['price'] < $elements [$p]['price']) {
                $elements [$p + $step] = $elements [$p];
                $replace2++;
                $p = $p - $step;
                $n4++;
                // echo '$n4 = ' . $n4 . PHP_EOL;
            }
            $elements [$p + $step] = $temp;
            $replace1++;
            $n3++;
            // echo '$n3 = ' . $n3 . PHP_EOL . '**';
            // print_r($elements);
        }
    }
    echo "SUMMARY:" . PHP_EOL;
    $replace = $replace1 + $replace2;
    echo 'The number of array replacement -  ' . $replace . PHP_EOL;
    echo "Estimation of algorithm complexity - " . "O($replace1(N) x $replace2(N))" . PHP_EOL;
    $n = $n1 + $n2 + $n3 + $n4;
    echo 'Number of steps to execute the code: ' . "$n1 + $n2 + $n3 + $n4 = " . $n . PHP_EOL;
    echo 'The result of code execution - ' . PHP_EOL;

    return $elements;
}

$prices = [
    [
        'price' => 21999,
        'shop_name' => 'Shop 1',
        'shop_link' => 'http://'
    ],
    [
        'price' => 21550,
        'shop_name' => 'Shop 2',
        'shop_link' => 'http://'
    ],
    [
        'price' => 21950,
        'shop_name' => 'Shop 2',
        'shop_link' => 'http://'
    ],
    [
        'price' => 21350,
        'shop_name' => 'Shop 2',
        'shop_link' => 'http://'
    ],
    [
        'price' => 21050,
        'shop_name' => 'Shop 2',
        'shop_link' => 'http://'
    ]
];

print_r(ShellSort($prices));