
function submitComment() {
    // declare variables
    const inputField = document.getElementById('name');
    const name = inputField.value;
    const nameCap = name[0].toUpperCase() + name.slice(1);
    const textArea = document.getElementById('msg');
    const msg = textArea.value;

    //  check if allowed
    if (doesNotPass(name, msg) === true) {
        return null
    }

    // create, fill and place elements
    const comment = document.createElement("section");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    h3.textContent = `${nameCap} said:`;
    p.textContent = `"${msg}"`;
    comment.classList.add("comment")
    comment.appendChild(h3);

    // style bad words
    if (hasBadWords(msg) > 0) {
        p.classList.add("bad-word");
        const p2 = document.createElement("p");
        const msgBad = "Warning: the following comment has been flagged as offensive!"
        p2.textContent = msgBad;
        comment.appendChild(p2);
    }

    comment.appendChild(p);
    const commentSection = document.getElementById("comments");
    commentSection.appendChild(comment);
    

    // empty form
    inputField.value = null;
    textArea.value = null;
}

// check for bad words
function hasBadWords(message) {
    let badArr = ["bad", "ugly", "terrible", "x"]
    let str = message.toLowerCase()
    let bad = 0
    for (let i=0; i<badArr.length;i++) {
        if (str.includes(badArr[i])) {
            bad++;
        }
    }
    return bad
}
    

// check and alert if not allowed
function doesNotPass(name, msg) {
    if (!name) {
        if (!msg) {
            alert("You forgot to fill in your name and message :(");
            return true;
        } else {
            alert("You forgot to fill in your name :(");
            return true;
        }
    } else if (!msg) {
        alert("You forgot to fill in your message :(");
        return true;
    } else if (msg.length > 280) {
        alert("Your comment is longer than we can handle :(");
        return true;
    } else {
        return false;
    }
}