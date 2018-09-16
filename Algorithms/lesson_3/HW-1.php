<?php

/* 1. Реализовать вывод меню на основе Clojure table. */

$connect = mysqli_connect("localhost","root","root","db2");
$result = mysqli_query($connect,"select * from categories as c
                                        join category_links as cl
                                        on c.id = cl.child_id");
if(mysqli_num_rows($result)>0){
    $cats = [];
    while($cat=mysqli_fetch_assoc($result)){
        //print_r($cat);
        //$cats_ID[$cat[id]][] = $cat;
        $cats[$cat[level]][$cat[child_id]]=$cat;
        //print_r($cats);
        //die();
    }
}
print_r($cats);
function build_tree($cats,$parent_id,$only_parent=false){
    if(is_array($cats) and isset($cats[$parent_id])){
        echo 'мы вошли в функцию';
        echo "<br>";

        $tree = "<ul>";
        if($only_parent==false){
            foreach($cats[$parent_id] as $cat){
                //print_r($cat);
                //die();
                $tree.="<li>".$cat[name];
                $tree.=build_tree($cats,$cat[id]);
                $tree.="</li>";
            }

        }
        elseif(is_numeric($only_parent)){
            $cat = $cats[$parent_id][$only_parent];
            $tree.="<li>".$cat[name];
            $tree.=build_tree($cats,$cat[id]);
            $tree.="</li>";
        }
        $tree.="</ul>";

    }
    else
        return null;
    return $tree;
}

echo build_tree($cats,0);