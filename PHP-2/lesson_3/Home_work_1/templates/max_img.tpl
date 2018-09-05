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
    <div class="wrapper">
        <div class="home">
            <a href="index.php"><h2>Home</h2></a>
        </div>
        <div class="image">
            <h2>Image {{ image.id }} </h2>
        </div>
        <div class="likes">
            <h2><i class="far fa-eye"></i> {{ image.looks}} </h2>
        </div>
    </div>
    <div class="max">
        <img src="{{ image.max_img_path }}">
    </div>
</div>
</body>
</html>
