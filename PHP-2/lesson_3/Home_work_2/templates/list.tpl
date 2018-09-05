<html>
<head></head>
<body>
<h2>Shopping list</h2>
<ul>
    {% for item in items %}
    <li>{{ item }}</li>
    {% endfor %}
</ul>
</body>
</html>