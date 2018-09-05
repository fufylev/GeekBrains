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
<h2>Book details</h2>
<table>
    <tr>
        <td><strong>Title</strong></td>
        <td>{{ book.title }}</td>
    </tr>
    <tr>
        <td><strong>Author</strong></td>
        <td>{{ book.author }}</td>
    </tr>
    <tr>
        <td><strong>Publisher</strong></td>
        <td>{{ book.publisher }}</td>
    </tr>
    <tr>
        <td><strong>Pages</strong></td>
        <td>{{ book.pages }}</td>
    </tr>
    <tr>
        <td><strong>Category</strong></td>
        <td>{{ book.category }}</td>
    </tr>
</table>
</body>
</html>