<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>WebSocket Example</title>
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/css.css">
</head>
<body>

<h2>PHP demon</h2>
<form action="" name="messages" class="form-group col-md-4">
  <div class="row form-group">Name: <input class="form-control" type="text" name="fname"></div>
  <div class="row form-group">Message: <input class="form-control" type="text" name="msg"></div>
  <div class="row"><input class="btn-primary" type="submit" value="Send"></div>
</form>
<div id="status"></div>

<script>

  window.onload = function () {
    //let socket = new WebSocket("ws://echo.websocket.org");
    let socket = new WebSocket("ws://localhost:8080");
    let status = document.querySelector("#status");
    console.log(socket);

    socket.onopen = function () {
      status.innerHTML = "Connected<br>";
    };

    socket.onclose = function (event) {
      if (event.wasClean) {
        status.innerHTML = 'Connection closed';
      } else {
        status.innerHTML = 'Connection lost';
      }
      status.innerHTML += '<br>code: ' + event.code + ' reason: ' + event.reason;
    };

    socket.onmessage = function (event) {
      let message = JSON.parse(event.data);
      status.innerHTML += `<b>${message.name}</b>: ${message.msg}<br>`;
    };

    socket.onerror = function (event) {
      status.innerHTML = "Error " + event.message;
    };
    document.forms["messages"].onsubmit = function () {
      let message = {
        name: this.fname.value,
        msg: this.msg.value
      };
      socket.send(JSON.stringify(message));
      return false;
    }


  }

</script>

</body>
</html>