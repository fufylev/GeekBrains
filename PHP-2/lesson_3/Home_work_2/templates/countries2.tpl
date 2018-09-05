<html>
<head>
    <style type="text/css">
        table {
            border-collapse: collapse;
        }
        tr.heading {
            font-weight: bolder;
        }
        td {
            border: 1px solid black;
            padding: 0 0.5em;
        }
    </style>
</head>
<body>
<h2>Countries and capitals</h2>
<table>
    <tr class="heading">
        <td>Country</td>
        <td>Region</td>
        <td>Population</td>
        <td>Capital</td>
        <td>Language</td>
    </tr>
    {% for d in data %}
    <tr>
        <td>{{ d.name|escape }}</td>
        <td>{{ d.region|escape }}</td>
        <td>{{ d.population|escape }}</td>
        <td>{{ d.capital|escape }}</td>
        <td>{{ d.language|escape }}</td>
    </tr>
    {% endfor %}
</table>
</body>
</html>