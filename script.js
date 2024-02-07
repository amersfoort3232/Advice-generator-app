async function getAdvice() {
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();
    console.log(data.slip);
    document.querySelector(".Advice-ID").innerHTML = "Advice #" + data.slip.id;
    document.querySelector(".Advice-text").innerHTML = '"' + data.slip.advice + '"';
};

getAdvice();

