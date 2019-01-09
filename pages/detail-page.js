function submitComment(){
    // gather data
    const inputField = document.getElementById('name');
    let name = inputField.value;
    const textAreaField = document.getElementById('msg');
    let msg = textAreaField.value;
    
    console.log(name);
    console.log(msg);
    
    // create place for new darta
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    //assign the data
    h3.innerHTML = `${name} said:`;
    p.innerHTML = `${msg}`;
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);

    console.log(comment);
}