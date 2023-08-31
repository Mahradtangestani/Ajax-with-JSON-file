var myBtn = document.querySelector(".myBtn");

function LoadUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users", true);

  xhr.onload = function () {
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);

      for (var i in users) {
        var li = document.createElement("li");
        var a1 = document.createElement("a");
        a1.setAttribute("href", users[i].html_url);
        a1.setAttribute("target", "_blank");


        var img = document.createElement("img");
        img.setAttribute("src", users[i].avatar_url);
        img.setAttribute("alt", users[i].login);


        a1.append(img);
        li.append(a1);


        var h3 = document.createElement("h3");
        var a2 = document.createElement("a");
        a2.setAttribute("href", users[i].html_url);
        a2.setAttribute("target", "_blank");
        a2.innerHTML = users[i].login;


        h3.append(a2);
        a1.after(h3);


        var hr = document.createElement("hr");
        h3.after(hr);

        
        document.querySelector(".my-list").append(li);

      }
    }
  };

  xhr.send();
  
}

myBtn.addEventListener("click", LoadUsers);
