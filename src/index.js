function displayRecipe(response) {
    new Typewriter("#recipe", {
      strings: response.data.answer, 
      autoStart: true,
      Delay: 1,
      cursor: "",
    });
}

function generateRecipe(event) {
  event.preventDefault();
let instructionsInput = document.querySelector("#user-input");
  let apiKey = "43008a6ae95edac1643c1odtb4f58d13";
  let prompt=`User instructions:Generate a recipe about ${instructionsInput.value}`;
  let context="You are a chef that knows a lot of recipes and love to prepare dishes that are quick to make.Your mission is to generate a very quick recipe in simple HTML. Do not include the word html into your response.Organize the recipe into ingredients and Method and include these as labels.Make sure to follow the user instructions."; 
  let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement=document.querySelector("#recipe"); 
  recipeElement.classList.remove("hidden"); 
   recipeElement.innerHTML = `
                <div class="message">
                    <div class="spinner"></div>
                    <span>Generating the recipe for you using ${instructionsInput.value} 👨‍🍳</span>
                </div>
            `;
  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
