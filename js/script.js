{
    const helloWorld = () => {
        console.log("Hej! Życzę miłego przeglądania kodu :)");
    };

    const onBrokePageClick = () => {
        const body = document.querySelector(".body");
        const buttonText = document.querySelector(".js-buttonText");
        body.classList.toggle("body__broken");
        buttonText.innerText = body.classList.contains("body__broken") ? "Napraw" : "Zepsuj";
    }

    const init = () => {
        const brokePage = document.querySelector(".js-brokePage");
        brokePage.addEventListener("click", onBrokePageClick);
        helloWorld();
    }
    init();
}