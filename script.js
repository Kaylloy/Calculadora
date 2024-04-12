const displayIpt = document.querySelector("#resultado");
const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener('click', () => {
  displayIpt.value = "";
});


function insertOperator(operator) {
  displayIpt.value += operator;
}

function insertNumber(num) {
  displayIpt.value += num;
};
function back() {
  let currentValue = displayIpt.value;
  displayIpt.value = currentValue.slice(0, -1);
};
function calculate() {
  try {
    displayIpt.value = eval(displayIpt.value);
  } catch (error){
    window.alert("Erro na expressão");
}
}