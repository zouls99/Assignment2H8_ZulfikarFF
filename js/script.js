function show_form() {
    let form_el = document.querySelector("#form1");

    form_el.style.display = "block";

    document.getElementById("fnama").value = document.getElementById("nama").innerText;
    document.getElementById("frole").value = document.getElementById("role").innerText;
    document.getElementById("favail").value = document.getElementById("avail").innerText;
    document.getElementById("fage").value = document.getElementById("age").innerText;
    document.getElementById("floc").value = document.getElementById("loc").innerText;
    document.getElementById("fexp").value =  document.getElementById("exp").innerText;
    document.getElementById("femail").value = document.getElementById("email").innerText;
}

function hide_form() {
    let form_el = document.querySelector("#form1");
    form_el.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    // Function to update corresponding fields
    function updateFields() {
        document.getElementById("nama").innerText = document.getElementById("fnama").value;
        document.getElementById("role").innerText = document.getElementById("frole").value;
        document.getElementById("avail").innerText = document.getElementById("favail").value;
        document.getElementById("age").innerText = document.getElementById("fage").value;
        document.getElementById("loc").innerText = document.getElementById("floc").value;
        document.getElementById("exp").innerText = document.getElementById("fexp").value;
        document.getElementById("email").innerText = document.getElementById("femail").value;
    }

    // Event listener for submit button
    document.getElementById("submitButton").addEventListener("click", function (event) {
        event.preventDefault();
        updateFields();
        hide_form();
    });
});
