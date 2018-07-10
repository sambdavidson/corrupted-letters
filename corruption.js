const corruptionMap = {
    'a': ['á','ä','à','â','ā','ã'],
    'c': ['ç','ĉ'],
    'e': ['é','ë','è','ê','ē'],
    'g': ['ĝ'],
    'h': ['ĥ'],
    'i': ['ī','î','ì','ï','í'],
    'j': ['ĵ'],
    'n': ['ñ'],
    'o': ['õ','ō','ô','ò','ö','ó','ó'],
    's': ['š','§'],
    't': ['ť','ţ'],
    'u': ['ū','û','ù','ü','ú'],
    'y': ['ý','ÿ','ỳ','ŷ'],
};

function corruptString(str, corZeroToHundred) {
    let corruptedString = '';

    for (let c of str) {
        let corruptedLetters = corruptionMap[c];
        let doCorrupt = Math.random() < (corZeroToHundred / 100);

        if (!corruptedLetters || !doCorrupt) {
            corruptedString += c;
            continue;
        }

        corruptedString += randomItem(corruptedLetters);

    }
    return corruptedString;
}

function randomItem(items) {
    return items[Math.floor(Math.random()*items.length)];
}

window.addEventListener('load', function () {
    const speedInput = document.getElementById('speed');
    const corruptionInput = document.getElementById('corruption');
    const textInput = document.getElementById('text');
    const result = document.getElementById('result');

    let speed = speedInput.value;
    let corruption = corruptionInput.value;

    speedInput.addEventListener('input', ()=>{speed = speedInput.value;});
    speedInput.addEventListener('change', ()=>{speed = speedInput.value;});
    corruptionInput.addEventListener('input', ()=>{corruption = corruptionInput.value;});
    corruptionInput.addEventListener('change', ()=>{corruption = corruptionInput.value;});

    function frameLoop() {
        result.innerText = corruptString(textInput.value.toLowerCase(), corruption);
        setTimeout(frameLoop, 1000/speed);
    }
    frameLoop();
});

