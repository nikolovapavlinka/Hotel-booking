document.addEventListener('DOMContentLoaded', function () {
    var loginBtn = document.getElementById('login_btn');
    var loginForm = document.getElementById('l_form');
    
    loginBtn.addEventListener('click', function () {
        loginForm.style.display = 'block';
        document.getElementById('page_mask').style.display = 'block';
    });

    document.getElementById('page_mask').addEventListener('click', function () {
        loginForm.style.display = 'none';
        document.getElementById('page_mask').style.display = 'none';
    }); 
});


document.addEventListener('DOMContentLoaded', function () {
    var signupBtn = document.getElementById('signup_btn');
    var signupForm = document.getElementById('s_form');
    
    signupBtn.addEventListener('click', function () {
        signupForm.style.display = 'block';
        document.getElementById('page_mask').style.display = 'block';
    });

    document.getElementById('page_mask').addEventListener('click', function () {
        signupForm.style.display = 'none';
        document.getElementById('page_mask').style.display = 'none';
    }); 
});


document.addEventListener("DOMContentLoaded", function () {
    var openButton = document.getElementById("open_btn");
    var infoPopup = document.getElementById("info_popup");
    var closeButton = document.getElementById("close_btn");

    openButton.addEventListener("click", function () {
        infoPopup.classList.remove("hidden");
    });

    closeButton.addEventListener("click", function () {
        infoPopup.classList.add("hidden");
    });
});

function toggleSelection(box1) {
    var box = document.getElementById(box1);
    box.classList.toggle("selected");
}










