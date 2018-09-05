<?php

function mergeSort($arr) {
    if(count($arr) <= 1) {
        return $arr; // массив состоящий из одного элемента уже отсортирован))
    }
    else {
        $q = (int) (count($arr)/2); // находим середину входного массива
        /* mergeSort делит массив $arr до единичным массивов,
        а потом начинает работать функция merge, которая сливает все кусочки. */
        return merge(mergeSort(array_slice($arr, 0, $q)), mergeSort(array_slice($arr, $q)));
    }
}

function merge($leftArr, $rightArr) {
    $twoArrCount = count($leftArr)+count($rightArr);

    /* Формируем два массива
    При первой итерации выполнения это будут массивы из одного значения.
    Когда мы дойдем до конца одного из массивов, то значения из второго массива будут сравниваться с бесконечно большим числом*/
    $leftArr[] = INF; // подмассив слева от середины
    $rightArr[] = INF; // подмассив справа от середины

    // задаем курсоры индекса массива
    $left = 0;
    $right = 0;

    /* В цикле мы просто проверяем последовательно элементы массивов и наименьший записываем в $arr,
    увеличивая счетчик $left и $right. */
    for($i=0; $i<$twoArrCount; $i++) {
        if($leftArr[$left] <= $rightArr[$right]) {
            $arr[] = $leftArr[$left];
            $left++;
        }
        else {
            $arr[] = $rightArr[$right];
            $right++;
        }
    }

    return $arr;
}

$arr = [12, 15, 789, 789,753, 14, 16, 456, 89, 1347, 1, 0, 951, 159, 753, 159];
print_r(mergeSort($arr));