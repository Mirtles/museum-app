function doesNotPassAllValidations(name, msg) {
    if (!name) {
        if (!msg) {
            alert("You forgot to fill in your name and message!");
            return true;
        } else {
            alert("You forgot to fill in your name!");
            return true;
        }
    } else if (!msg) {
        alert("You forgot to fill in your message!");
        return true;
    } else if (msg.length > 10) {
        alert("Your comment is longer than we can handle :(");
        return true;
    } else {
        return false;
    }
}

function submitComment() {
    const inputField = document.getElementById('name');
    const name = inputField.value;
    const textArea = document.getElementById('msg');
    const msg = textArea.value;
    if (doesNotPassAllValidations(name, msg) === true) {
        return null
    }
    const comment = document.createElement("section");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    h3.innerHTML = `${name} said:`;
    p.innerHTML = `"${msg}"`;
    comment.classList.add("comment")
    comment.appendChild(h3);
    comment.appendChild(p);
    const commentSection = document.getElementById("comments");
    commentSection.appendChild(comment);
    inputField.value = null;
    textArea.value = null;
}