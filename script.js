var currentvalue="";
var displayscreen=document.getElementById("display");
const boxElement = document.querySelector('#whole');


function display(num)
{
  displayscreen.style.background="#D3D3D3";
  boxElement.style.background="#32DD7D";
  boxElement.style.transform = 'scale(1)';
  currentvalue+=num;
  displayscreen.innerHTML='';

  const line = document.createElement('div');
  line.textContent = currentvalue;
  displayscreen.appendChild(line);

  // Auto-scroll to bottom
  displayscreen.scrollTop = displayscreen.scrollHeight;
  adjustFontSize();
}

function clearscreen()
{
    displayscreen.style.background="#D3D3D3";
    boxElement.style.background="#32DD7D";
    boxElement.style.transform = 'scale(1)';
    currentvalue = '';
    displayscreen.innerHTML = currentvalue;
}

function fact(num) {
  displayscreen.style.background = "#D3D3D3";
  boxElement.style.background = "#32DD7D";
  boxElement.style.transform = 'scale(1)';
  
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  
  currentvalue = result.toString();
  displayscreen.innerHTML = currentvalue;
  return result;
}

function equals() {
  let text = currentvalue;
  let lastChar = text.slice(-1); // Last character
  //let firstChar = text.charAt(0); // First character

  // Factorial logic
  if (lastChar === "!") {
    let num = parseInt(text.slice(0, -1));
    if (!isNaN(num)) {
      fact(num);
    } else {
      displayscreen.innerHTML = "ERROR";
    }
    return;
  }

  // Square root logic
  if (firstChar === "√") {
    let num = parseFloat(text.slice(1));
    if (!isNaN(num)) {
      currentvalue = Math.sqrt(num).toString();
      displayscreen.innerHTML = currentvalue;
    } else {
      displayscreen.innerHTML = "ERROR";
    }
    return;
  }

  // Default eval logic
  try {
    displayscreen.style.background = "#D3D3D3";
    boxElement.style.transform = 'scale(1.2)';
    currentvalue = eval(currentvalue);
    displayscreen.innerHTML = currentvalue;
  } catch (error) {
    displayscreen.innerHTML = "ERROR";
    boxElement.style.background = "#FF2E2E";
    displayscreen.style.background = "#FF2E2E";
  }
}

function del() {
    currentvalue = currentvalue.slice(0, -1);
    displayscreen.innerHTML = currentvalue;// Hapus karakter terakhir
}

function rounds(){
  currentvalue= Math.round(currentvalue);
  displayscreen.innerHTML = currentvalue;

}

function adjustFontSize() {
    const display2 = document.getElementById('display');
    const textLength = display2.textContent.length;

    if (textLength > 30) {
      display2.style.fontSize = "18px"; // smallest
    } else if (textLength > 20) {
      display2.style.fontSize = "22px"; // medium
    } else {
      display2.style.fontSize = "28px"; // default
    }
}

function calculateSin(degrees) {
    if (isNaN(degrees)) {
        return "ERROR";
    }
    const radians = degrees * (Math.PI / 180);
    return Math.sin(radians);
}

function sin(){
  const degrees = parseFloat(currentvalue);

    // Hitung hasilnya
    const result = calculateSin(degrees);

    // Perbarui tampilan
    if (result !== "ERROR") {
        currentvalue = result.toString();
        displayscreen.innerHTML = currentvalue;
    } else {
        displayscreen.innerHTML = "ERROR";
    }
}

function calculateCos(degrees) {
    if (isNaN(degrees)) {
        return "ERROR";
    }
    const radians = degrees * (Math.PI / 180);
    return Math.cos(radians);
}

function cos(){
  const degrees = parseFloat(currentvalue);

    // Hitung hasilnya
    const result = calculateCos(degrees);

    // Perbarui tampilan
    if (result !== "ERROR") {
        currentvalue = result.toString();
        displayscreen.innerHTML = currentvalue;
    } else {
        displayscreen.innerHTML = "ERROR";
    }
}

function calculateTan(degrees) {
    if (isNaN(degrees)) {
        return "ERROR";
    }
    const radians = degrees * (Math.PI / 180);
    return Math.tan(radians);
}

function tan(){
  const degrees = parseFloat(currentvalue);

    // Hitung hasilnya
    const result = calculateTan(degrees);

    // Perbarui tampilan
    if (result !== "ERROR") {
        currentvalue = result.toString();
        displayscreen.innerHTML = currentvalue;
    } else {
        displayscreen.innerHTML = "ERROR";
    }
}
function calcabs() {
      //const input = document.getElementById('display').value;
      //const 
      currentvalue = Math.abs(currentvalue); // Menghitung nilai absolut
      displayscreen.innerHTML = currentvalue;
      //document.getElementById('result').innerText = `Nilai absolut: ${absoluteValue}`;
    }
function calclog(){
  displayscreen.innerHTML=Math.log10(currentvalue);
}