function moon() {
    var moon = document.getElementById('moon');
    if (moon) {
        // Toggle between two icon images
        if (moon.name.includes('sunny')) {
          moon.name = 'moon'; // Set to sunny icon        
            bodyx.style.backgroundColor = 'white';
        } else {
           bodyx.style.backgroundColor = "0e1525'';
            moon.name = 'sunny'; // Set back to moon icon
        }
    } else {
        console.log('Element with ID "moon" not found.');
    }
}



    function showPopup(popupId) {
        var popups = document.querySelectorAll('.whitepop');
        popups.forEach(function(popup) {
            popup.style.display = 'none';
        });

        var popup = document.getElementById(popupId);
        if (popup) {
            popup.style.display = 'block';
        }
    }

    function hidePopup() {
        var popups = document.querySelectorAll('.whitepop');
        popups.forEach(function(popup) {
            popup.style.display = 'none';
        });
    }





function toggleDropdown() {
  var dropdownContent = document.getElementById('dropdown-content');
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

function closeOverlay() {
  var overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
}

function showFullPhoto() {
  var profilePicture = document.querySelector('.profile-picture');
  var overlay = document.getElementById('overlay');
  var overlayImage = document.querySelector('.overlay-image');
  
  overlayImage.src = profilePicture.src;
  overlay.style.display = 'block';
}


 var link = "";

function val(id) {
    return document.getElementById(id).value;
}

function senddata(data) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", document.getElementById("webhookurl").value + data, true);
    xhr.send();
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".title").forEach(function (el) {
        el.innerHTML += "<br>";
    });

    document.querySelectorAll("button").forEach(function (el) {
        el.insertAdjacentHTML("beforebegin", "<br>");
    });

    document.querySelectorAll(".xy").forEach(function (el) {
        el.click();
    });

    document.getElementById("simple").click();
    
    document.querySelectorAll("iframe").forEach(function (el) {
        el.style.display = "none";
    });
});

document.querySelectorAll(".xy").forEach(function (el) {
    el.addEventListener("click", function () {
        document.querySelectorAll("section").forEach(function (section) {
            section.style.display = "none";
        });
        document.querySelectorAll("[type='button']").forEach(function (button) {
            button.classList.remove("selected");
        });
        document.getElementById("xy").style.display = "block";
        el.classList.add("selected");
    });
});

document.querySelectorAll(".text").forEach(function (el) {
    el.addEventListener("click", function () {
        document.querySelectorAll("section").forEach(function (section) {
            section.style.display = "none";
        });
        document.querySelectorAll("[type='button']").forEach(function (button) {
            button.classList.remove("selected");
        });
        document.getElementById("text").style.display = "block";
        el.classList.add("selected");
    });
});

document.querySelectorAll(".gesture").forEach(function (el) {
    el.addEventListener("click", function () {
        document.querySelectorAll("section").forEach(function (section) {
            section.style.display = "none";
        });
        document.querySelectorAll("[type='button']").forEach(function (button) {
            button.classList.remove("selected");
        });
        document.getElementById("gesture").style.display = "block";
        el.classList.add("selected");
    });
});

document.querySelectorAll(".id").forEach(function (el) {
    el.addEventListener("click", function () {
        document.querySelectorAll("section").forEach(function (section) {
            section.style.display = "none";
        });
        document.querySelectorAll("[type='button']").forEach(function (button) {
            button.classList.remove("selected");
        });
        document.getElementById("id").style.display = "block";
        el.classList.add("selected");
    });
});

document.getElementById("advanced").addEventListener("click", function () {
    document.getElementById("advancedvar").style.display = "block";
    document.getElementById("simplevar").style.display = "none";
});

document.getElementById("simple").addEventListener("click", function () {
    document.getElementById("simplevar").style.display = "block";
    document.getElementById("advancedvar").style.display = "none";
});

document.getElementById("websaver").addEventListener("click", function () {
    var webhookUrl = document.getElementById("webhookurl").value;
    if (webhookUrl) {
        link = webhookUrl;
        document.querySelector(".modalDialog").style.display = "none";
    } else {
        var warning = document.getElementById("warning");
        warning.style.color = "red";
        warning.style.textShadow = "0px 2px 4px red";
        warning.textContent = "Please Enter Webhook URL Before Proceeding...";
    }
});

    function showPopup(popupId) {
        var popups = document.querySelectorAll('.whitepop');
        popups.forEach(function(popup) {
            popup.style.display = 'none';
        });

        var popup = document.getElementById(popupId);
        if (popup) {
            popup.style.display = 'block';
        }
    }

    function hidePopup() {
        var popups = document.querySelectorAll('.whitepop');
        popups.forEach(function(popup) {
            popup.style.display = 'none';
        });
    }





function toggleDropdown() {
  var dropdownContent = document.getElementById('dropdown-content');
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

function closeOverlay() {
  var overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
}

function showFullPhoto() {
  var profilePicture = document.querySelector('.profile-picture');
  var overlay = document.getElementById('overlay');
  var overlayImage = document.querySelector('.overlay-image');
  
  overlayImage.src = profilePicture.src;
  overlay.style.display = 'block';
}


 var link = "";

function val(id) {
    return document.getElementById(id).value;
}

function senddata(data) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", document.getElementById("webhookurl").value + data, true);
    xhr.send();
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".title").forEach(function (el) {
        el.innerHTML += "<br>";
    });

    document.querySelectorAll("button").forEach(function (el) {
        el.insertAdjacentHTML("beforebegin", "<br>");
    });

    document.querySelectorAll(".xy").forEach(function (el) {
        el.click();
    });

    document.getElementById("simple").click();
    
    document.querySelectorAll("iframe").forEach(function (el) {
        el.style.display = "none";
    });
});

document.querySelectorAll(".xy").forEach(function (el) {
    el.addEventListener("click", function () {
        document.querySelectorAll("section").forEach(function (section) {
            section.style.display = "none";
        });
        document.querySelectorAll("[type='button']").forEach(function (button) {
            button.classList.remove("selected");
        });
        document.getElementById("xy").style.display = "block";
        el.classList.add("selected");
    });
});

document.querySelectorAll(".text").forEach(function (el) {
    el.addEventListener("click", function () {
        document.querySelectorAll("section").forEach(function (section) {
            section.style.display = "none";
        });
        document.querySelectorAll("[type='button']").forEach(function (button) {
            button.classList.remove("selected");
        });
        document.getElementById("text").style.display = "block";
        el.classList.add("selected");
    });
});

document.querySelectorAll(".gesture").forEach(function (el) {
    el.addEventListener("click", function () {
        document.querySelectorAll("section").forEach(function (section) {
            section.style.display = "none";
        });
        document.querySelectorAll("[type='button']").forEach(function (button) {
            button.classList.remove("selected");
        });
        document.getElementById("gesture").style.display = "block";
        el.classList.add("selected");
    });
});

document.querySelectorAll(".id").forEach(function (el) {
    el.addEventListener("click", function () {
        document.querySelectorAll("section").forEach(function (section) {
            section.style.display = "none";
        });
        document.querySelectorAll("[type='button']").forEach(function (button) {
            button.classList.remove("selected");
        });
        document.getElementById("id").style.display = "block";
        el.classList.add("selected");
    });
});

document.getElementById("advanced").addEventListener("click", function () {
    document.getElementById("advancedvar").style.display = "block";
    document.getElementById("simplevar").style.display = "none";
});

document.getElementById("simple").addEventListener("click", function () {
    document.getElementById("simplevar").style.display = "block";
    document.getElementById("advancedvar").style.display = "none";
});

document.getElementById("websaver").addEventListener("click", function () {
    var webhookUrl = document.getElementById("webhookurl").value;
    if (webhookUrl) {
        link = webhookUrl;
        document.querySelector(".modalDialog").style.display = "none";
    } else {
        var warning = document.getElementById("warning");
        warning.style.color = "red";
        warning.style.textShadow = "0px 2px 4px red";
        warning.textContent = "Please Enter Webhook URL Before Proceeding...";
    }
});



let scrollPercentage = () => {
    let scrollProgress = document.getElementById("progressstl");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round( pos * 100 / calcHeight);
    scrollProgress.style.background = `conic-gradient(#008fff ${scrollValue}%, #c0c0ff ${scrollValue}%)`;
    progressValue.textContent = `${scrollValue}%`;
}
window.onscroll = scrollPercentage;
window.onload = scrollPercentage;




var btn = $('#ontopx');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('visiv');
  } else {
    btn.removeClass('visiv');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

