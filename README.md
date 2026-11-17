# Button Label Animations Lab

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/button-label-animations-lab/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable, responsive HTML/CSS/JavaScript recreation of the supplied 5.2-second screen recording.

## Run
1. Extract `button-label-animations-lab.zip`.
2. Open `index.html` in Chrome, Edge, Firefox or Safari.
3. No npm, build step, dependencies or server are required.

Optional local server:
```bash
python3 -m http.server 8000
```

## What appears in the video

Title: **Button Label Animations**

A pale lavender rounded demo panel on a near-black page contains three pill buttons:
- **Jumping** — saturated blue solid button
- **Smoke** — charcoal contrast button
- **Drive** — white surface button with blue lettering

The screen also displays the credit `@_code_and_chill_` and three code panels labelled `index.html`, `app.css`, and `app.js`.

## Recreated interactions
- Hover or tap each button to run its own label motion.
- Jumping: staggered letters hop up and settle.
- Smoke: letters rise, blur and fade before returning.
- Drive: letters stretch into a directional smear, disappear in a stepped transition and re-enter.
- The direction of the stagger is based on which half of the button the pointer entered.
- A running animation is not restarted mid-flight.
- Keyboard focus and reduced-motion preferences are supported.

## Source fragments visible in the video

The HTML panel shows three buttons with shared `gbtn` classes and separate `data-fx` values: `jump`, `smoke`, and `drive`. It comments that the plain text remains in markup so the buttons remain labelled and working without the script.

The CSS panel shows:
- `.gbtn.is-go .g` with a calculated animation delay using `--step`, `--rev`, `--n`, and `--i`.
- A `g-drive` keyframe at 42% using `translateX(-1.5em)`, `scaleX(2.3)`, `blur(.1em)`, `opacity: 0`, and `steps(1, end)`.

The JavaScript panel shows `play(btn, fromRight)`:
- Return if `btn.dataset.busy` is set.
- Set the `--rev` custom property.
- Add `.is-go`.
- Get descendant animations with `btn.getAnimations({ subtree: true })`.
- Filter named animations.
- Mark the button busy.
- Use `Promise.allSettled(runs.map(a => a.finished))`.
- Remove `.is-go` and the busy flag when all animations settle.

The source panels in this project reproduce the legible snippets and explanatory comments visible in the recording. The complete runnable implementation is authored in `index.html`, `app.css`, and `app.js`; it is not claimed to be the original unseen repository.

## Project files
- `index.html` — demo UI and source excerpt panels
- `app.css` — button styles, stagger timing and three keyframe animations
- `app.js` — text wrapping and animation orchestration
- `README.md` — setup and extraction notes

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
