(() => {
  const buttons = [...document.querySelectorAll(".gbtn")];
  const helper = document.querySelector("#helper");

  // Keep the words in HTML as plain text; enhance them only when JS is ready.
  for (const btn of buttons) {
    const label = btn.querySelector(".label");
    const word = label.textContent;
    label.textContent = "";
    [...word].forEach((char, index) => {
      const span = document.createElement("span");
      span.className = "g";
      span.textContent = char === " " ? "\u00a0" : char;
      span.style.setProperty("--i", index);
      label.append(span);
    });
    btn.style.setProperty("--n", [...word].length);
  }

  function play(btn, fromRight) {
    // A running animation is not restarted mid-flight.
    if (btn.dataset.busy) return;

    // Which half of the button the pointer crossed.
    btn.style.setProperty("--rev", fromRight ? 1 : 0);
    btn.classList.remove("is-go");
    // Force a style read so a completed animation can be replayed.
    void btn.offsetWidth;
    btn.classList.add("is-go");

    // A cancelled run rejects its finished promise, so use allSettled.
    const runs = btn.getAnimations({ subtree: true })
      .filter((animation) => animation.animationName);
    btn.dataset.busy = "1";

    Promise.allSettled(runs.map((animation) => animation.finished))
      .then(() => {
        btn.classList.remove("is-go");
        delete btn.dataset.busy;
      });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("pointerenter", (event) => {
      const rect = btn.getBoundingClientRect();
      play(btn, event.clientX > rect.left + rect.width / 2);
      helper.textContent = `${btn.textContent.trim()} · animation preview`;
    });
    btn.addEventListener("click", (event) => {
      const rect = btn.getBoundingClientRect();
      play(btn, event.clientX > rect.left + rect.width / 2);
    });
    btn.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        const rect = btn.getBoundingClientRect();
        play(btn, event.key === "ArrowRight" || event.clientX > rect.left + rect.width / 2);
      }
    });
  });
})();