function shuffleText(element, finalText, speed = 50, delay = 0) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let iterations = 0;
    const totalIterations = finalText.length;
  
    setTimeout(() => {
        const interval = setInterval(() => {
            const displayed = finalText
            .split("")
            .map((char, i) => {
                if (i < Math.floor(iterations / 2)) {
                    return finalText[i];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");
    
            element.textContent = displayed;
    
            if (iterations++ >= totalIterations * 2) {
                clearInterval(interval);
                element.textContent = finalText;
            }
        }, speed);
    }, delay);
}
    

    window.addEventListener("DOMContentLoaded", () => {
        const el = document.querySelector(".shuffle-text");
        if (el) {
            shuffleText(el, el.textContent);
    }
});