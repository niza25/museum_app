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
        h3.innerHTML = `${name.charAt(0).toUpperCase() + name.slice(1)} said:`;
        if (doesNotPassSwearWordsValidation(msg)) {
            p.innerHTML = `Warning - strong language: ${msg}`;
        } else {
            p.innerHTML = `${msg}`;
        }
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
    if (!name) {
        alert('You forgot your name');
        return true;
    }

    if (!msg) {
        alert('You forgot your comment');
        return true;
    }

    if (msg.length > 280) {
        alert('Sorry, your comment is too long!');
        return true;
    }
    return false;
}

// swear word validation function
function doesNotPassSwearWordsValidation(text) {
    let swearWords = new Array("fuck", "fucking", "shit");
    let alertCount = 0;

    for (let i = 0; i < swearWords.length; i++) {
        for (let j = 0; j < (text.length); j++) {
            if (swearWords[i] == text.
                substring(j, (j + swearWords[i].length)).toLowerCase()) {
                alertCount++;
            }
        }
    }
    if (alertCount >= 1) {
        console.log(alertCount);
        return true;
    }
    return false;
}

