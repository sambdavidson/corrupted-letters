const corruptionSets = [
    ['a','á','ä','à','â','ā','ã'],
    ['c','ç','ĉ'],
    ['e','é','ë','è','ê','ē'],
    ['g','ĝ'],
    ['h','ĥ'],
    ['i','ī','î','ì','ï','í'],
    ['j','ĵ'],
    ['n','ñ'],
    ['o','õ','ō','ô','ò','ö','ó','ó'],
    ['s','š','§'],
    ['t','ť','ţ'],
    ['u','ū','û','ù','ü','ú'],
    ['y','ý','ÿ','ỳ','ŷ'],
];

function corruptString(str, corZeroToHundred) {
    let corruptedString = '';

    for (let c of str) {
        let doCorrupt = Math.random() < (corZeroToHundred / 100);

        if (!doCorrupt) {
            corruptedString += c;
            continue;
        }

        let foundMatch = false;
        for(s of corruptionSets) {
            if(s.includes(c)) {
                corruptedString += randomItem(s);
                foundMatch = true;
                break;
            }
        }

        if(!foundMatch) {
            corruptedString += c;
        }
    }
    return corruptedString;
}

function randomItem(items) {
    return items[Math.floor(Math.random()*items.length)];
}

window.addEventListener('load', function () {
    const corruptionInput = document.getElementById('corruption');
    const corruptionDisplay = document.getElementById('corruption-display');
    const speedInput = document.getElementById('speed');
    const speedDisplay = document.getElementById('speed-display');
    const textInput = document.getElementById('text');
    const result = document.getElementById('result');

    let corruption = corruptionInput.value;
    corruptionDisplay.innerText = corruptionInput.value;
    let speed = speedInput.value;
    speedDisplay.innerText = speedInput.value;

    const corruptionChange = () => {
    	corruption = corruptionInput.value;
    	corruptionDisplay.innerText = corruptionInput.value;
    }
    corruptionInput.addEventListener('input', corruptionChange);
    corruptionInput.addEventListener('change', corruptionChange);

    const speedChange = () => {
		speed = speedInput.value;
		speedDisplay.innerText = speedInput.value;
    }
    speedInput.addEventListener('input', speedChange);
    speedInput.addEventListener('change', speedChange);


    const textChange = () => {
    	result.innerText = textInput.value.toLowerCase();
    }
	textInput.addEventListener('input', textChange);
    result.innerText = textInput.value.toLowerCase();


    function frameLoop() {
        result.innerText = corruptString(result.innerText, corruption);
        setTimeout(frameLoop, 1000/speed);
    }
    frameLoop();
});