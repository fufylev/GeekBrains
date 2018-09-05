<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Gallery</title>
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <script defer src="js/font-awesome/fontawesome-all.min.js"></script>
</head>
<body>
<div id="main">
    <div><h2>GALLERY</h2></div>
    <div class="gallery">

        {% for item in gallery %}
        <a rel='gallery' class='photo' href='max_img.php?id={{ item.id  }}'>
            <img src='{{ item.min_img_path }}' width="300" height="170">
            <div class="looks">
                <i class="far fa-eye"></i> {{ item.looks}}
            </div>
        </a>
        {% endfor %}

    </div>
</div>
</body>
</html>
