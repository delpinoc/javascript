// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const measureKelvin = function () {
  const measureKelvin = {
    type: "temp",
    unit: "cels",

    // C) FIX THE PROBLEM
    // value: Number(prompt("Degrees celsius:")),

    value: 10,
  };

  // B) FIND THE PROBLEM
  // console.log(measureKelvin);
  // console.table(measureKelvin); // nos muestra el objeto en forma de tabla
  // console.error(typeof measureKelvin.value); pinta la linea de rojo
  // lo cual simula un error
  // console.warn(typeof measureKelvin.value); pinta la linea de amarillo
  // lo cual simula una advertencia

  const kelvin = 273 + measureKelvin.value;
  return kelvin;
};

// A) IDENTIFY THE PROBLEM
console.log(measureKelvin());

// Another bug

const calcTempAmplitudeBug = function (temps1, temps2) {
  const temps = temps1.concat(temps2);

  let min = temps[0];
  let max = temps[0];

  // let min = 0;
  // let max = 0;

  for (let i = 1; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (currentTemp < min) {
      min = currentTemp;
    }

    if (currentTemp > max) {
      max = currentTemp;
    }
  }

  const amplitude = max - min;
  return amplitude;
};

console.log(calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]));
