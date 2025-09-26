export function initGame() {
  const canvas = document.getElementById("pongCanvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;

  if (!ctx) {
	throw new Error("Canvas introuvable");
	return;
}

  // Exemple : dessine une balle
  let x1 = canvas.width / 2;
  let y1 = canvas.height / 2;
  let x2 = canvas.width / 2;
  let y2 = canvas.height / 2;
  let dx = 7;
  let dy = 7;
  const radius = 10;

  function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x1 , y1, radius, 0, Math.PI * 2);
    ctx.arc(x2 , y2, radius, 0, Math.PI * 2);
	// ctx.fillStyle = "#44403c";
	// ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(162, 71, 214, 1)";
    ctx.fill();
    ctx.closePath();

    x1 += dx;
    y1 += dy;

    x2 -= dx;
    y2 -= dy;

    if (x1 + radius > canvas.width || x1 - radius < 0) dx = -dx;
    if (y1 + radius > canvas.height || y1 - radius < 0) dy = -dy;

    if (x2 + radius > canvas.width || x2 - radius < 0) dx = +dx;
    if (y2 + radius > canvas.height || y2 - radius < 0) dy = +dy;
  }

  setInterval(drawBall, 16);
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}
