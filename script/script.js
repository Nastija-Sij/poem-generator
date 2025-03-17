function generatePoem(event) {
  event.preventDefault();

  alert("Generating poem...");

  new Typewriter("#generated-poem", {
    strings: "Your Poem",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
