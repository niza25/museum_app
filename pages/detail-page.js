function submitComment() {
    // gather data
    const inputField = document.getElementById('name');
    let name = inputField.value;
    const textAreaField = document.getElementById('msg');
    let msg = textAreaField.value;

    console.log(name);
    console.log(msg);

    if (doesNotPassAllValidations(name, msg)) {
        return null;
    } else {
        // create place for new data
        const comment = document.createElement('section');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');

        //assign the data
        h3.innerHTML = `${name} said:`;
        p.innerHTML = `${msg}`;
        comment.classList.add('comment');
        comment.appendChild(h3);
        comment.appendChild(p);

        // adding to the comment section
        const commentSection = document.getElementById('comments');
        commentSection.appendChild(comment);

        // empty the inputField
        inputField.value = null;
        textAreaField.value = null;
    }
}

function doesNotPassAllValidations(name, msg) {
    if (!name || !msg) {
        alert('You forgot your name or comment');
        return true;
    }

    if (msg.length > 280) {
        alert('Sorry, your comment is too long!');
        return true;
    }
    return false;
}
