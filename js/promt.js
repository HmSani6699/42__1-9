//alert button
const alertButton = () => {
    alert('Tomi vallo na ')
}

//confirm button
const confirmButton = () => {
    const result = confirm('ami ki bari jabo ?');
    // console.log(result);
    if (result === true) {
        alert('tomi bari jhole jaw')
    }
    else {
        console.log('tomar aske kono choti nai');
    }
}

//prompt button
const promptButton = () => {
    const result = prompt();
    if (result === null) {
        alert('tomar name koi')
    }
    else {
        console.log(result);
    }
}