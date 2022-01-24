const form = document.querySelector(".ferti-form");
const alert = document.querySelector(".alert");
const insertData = document.querySelector(".insertData");
const resetBtn = document.querySelector(".resetBtn");
const nValue = document.querySelector(".nValue");
const pValue = document.querySelector(".pValue");
const kValue = document.querySelector(".kValue");
const land = document.querySelector(".land");
const vermiValue = document.querySelector(".vermi");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    nValue.value &&
    pValue.value &&
    kValue.value &&
    land.value &&
    vermiValue.value
  ) {
    let vermiWeight = ((nValue.value * vermiValue.value) / 1.5).toFixed(2);
    let DAPWeight = ((pValue.value - vermiWeight * 0.01) / 0.46).toFixed(2);
    let MOPWeight = ((kValue.value - vermiWeight * 0.012) / 0.6).toFixed(2);
    let remainN =
      nValue.value - (nValue.value * vermiValue.value) / 100 - DAPWeight * 0.18;
    let UreaWeight = (remainN / 0.466).toFixed(2);
    insertData.innerHTML = `<p class="answer">
              With the dosage of N:P2O5:K2O = ${nValue.value}:${pValue.value}:${kValue.value}, in which ${vermiValue.value}% of N is to be
              supplied through Vermicopost in ${land.value}ha of land, we have to use
            </p>
            <div class="ansSheet">
              <article>
                <p>Vermicompost :</p>
                <p class="weight">${vermiWeight} kg</p>
              </article>
              <article>
                <p>DAP (P2O5) :</p>
                <p class="weight">${DAPWeight} kg</p>
              </article>
              <article>
                <p>MOP (K2O) :</p>
                <p class="weight">${MOPWeight} kg</p>
              </article>
              <article>
                <p>Urea :</p>
                <p class="weight">${UreaWeight} kg</p>
              </article>
            </div>`;
    displayAlert("Values generated", "success");
  } else {
    displayAlert("please enter all values", "danger");
  }
});

function displayAlert(message, type) {
  alert.classList.add(`alert-${type}`);
  alert.textContent = message;
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${type}`);
  }, 1000);
}

resetBtn.addEventListener("click", () => {
  nValue.value = "";
  pValue.value = "";
  kValue.value = "";
  vermiValue.value = "";
  land.value = "";
  displayAlert("all values have been reset", "success");
  insertData.innerHTML = null;
});
