const alertButton = () => {
    alert('Tomi vallo na ')
}

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