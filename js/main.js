if (document.getElementById('index')) {
    document.getElementById('index').getElementsByTagName('img')[0].onclick = function clickEvent(e) {
        // e = Mouse click event.
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        console.log("Left? : " + x + " ; Top? : " + y + ".");

        if (x > 330 && x < 340 && y > 165 && y < 170) {
            window.location.href = "bienjoue.html"
        }

        if (x > 150 && x < 190 && y > 158 && y < 186) {
            window.location.href = "maljoue.html"
        }
    }
}

const redirection = {
    island: "jungle.html",
    jungle: "temple.html",
    temple: "closed.html",
    closed: "treasure.html"
}


if (document.getElementById('temple')) {
  var easter_egg = new Konami(function() { 
    document.getElementById('secondObject').innerHTML = '<p class="prompt">Question: Quel est le point cardinal le plus pauvre ?<br/>Réponse: Le Nord <br/>Pourquoi ? Car ... </p><input type="text" name="answer" id="answer"/>'
  });
}
const validateAnswer = page => {
    if (!document.getElementById(page)) {
        return;
    }

    document.getElementById(page).getElementsByTagName('form')[0].addEventListener("submit", async event => {
        event.preventDefault();

        const data = await fetch("http://894bc429bc7f.ngrok.io", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({page, answer: document.getElementById('answer').value})
        });

        const body = await data.json();

        window.location.href = body.gotIt ? redirection[page] : 'maljoue.html';
      });

}

validateAnswer("island")
validateAnswer("jungle")
validateAnswer("temple")
validateAnswer("closed")