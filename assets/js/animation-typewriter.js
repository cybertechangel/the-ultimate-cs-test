function launchTypewriter(el, speed = 30, callback) {
    const fullText = el.textContent;
    el.textContent = "";
    let i = 0;

    function type() {
        if (i < fullText.length) {
            el.textContent += fullText.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }

    type();
}

window.launchTypewriter = launchTypewriter;

window.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".typewriter");
  elements.forEach((el) => launchTypewriter(el));
});
