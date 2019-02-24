import { Universe } as wasm from "wasm-game-of-life";

const pre = document.getElementByid("game-of-life-canvase");
const universe = Universe.new();
const renderLoop = () => {
  pre.textContent = universe.render();
  universe.tick();

  requestAnimationFrame(renderLoop);
}