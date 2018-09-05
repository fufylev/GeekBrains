<html>
<head></head>
<body>
<h2>Seasons</h2>
{% if month > 0 and month <= 3 %}
Spring is here, watch the flowers bloom!
{% elseif month > 3 and month <= 6 %}
Summer is here, time to hit the beach!
{% elseif month > 6 and month <= 9 %}
Autumn is here, watch the leaves slowly fall!
{% elseif month > 9 and month <= 12 %}
Winter is here, time to hit the slopes!
{% endif %}
</body>
</html>