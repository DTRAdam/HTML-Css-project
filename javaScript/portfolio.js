const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let tyb = document.getElementById("contactusbutton");
    let name = document.getElementById("name").value;
    tyb.innerHTML = `Thank you ${name} for submitting the message`;
});