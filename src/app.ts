type ValidSymbol = "#" | "$";

function getRandomHash(symbol: ValidSymbol, length: number) {
  return (
    symbol +
    Math.random()
      .toString(36)
      .slice(length)
  );
}

function main(): void {
  const targetElement = document.getElementById("app");
  if (targetElement) {
    setInterval(() => {
      targetElement.innerText = getRandomHash("#", 7);
    }, 1000);
  }
}
main();
