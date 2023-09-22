function fibonacci(n) {
    if (n < 0) {
      throw new Error("n must be a non-negative integer");
    }

    if (n === 0 || n === 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }

  function count_fibo() {
    const number = document.getElementById("v_fibo").value;

    const count_fibo = [];

    for (let i = 0; i <= number; i++) {
      count_fibo.push(fibonacci(i));
    }

    document.getElementById("out_fibo").innerHTML = count_fibo.join(", ");
  }

  function toggleDimensionInputs() {
    const shapeSelect = document.getElementById("shape-select");
    const dimensionInput2 = document.getElementById("input-2");
    const dimensionInput3 = document.getElementById("input-3");

    if (shapeSelect.value === "cube") {
      dimensionInput2.classList.add("hidden");
      dimensionInput3.classList.add("hidden");
    } else {
      dimensionInput2.classList.remove("hidden");
      dimensionInput3.classList.remove("hidden");
    }
  }

  document.getElementById("shape-select").addEventListener("change", toggleDimensionInputs);

  function calculateVolume() {
    const shape = document.getElementById("shape-select").value;
    const dimensions = [
      document.getElementById("input-1").value,
      document.getElementById("input-2").value,
      document.getElementById("input-3").value,
    ];

    let volume;

    switch (shape) {
      case "cube":
        volume = dimensions[0] ** 3;
        break;
      case "cylinder":
        volume = Math.PI * dimensions[0] ** 2 * dimensions[1];
        break;
      case "cone":
        volume = (1 / 3) * Math.PI * dimensions[0] ** 2 * dimensions[1];
        break;
      case "sphere":
        volume = (4 / 3) * Math.PI * dimensions[0] ** 3;
        break;
      default:
        throw new Error("Invalid shape");
    }

    document.getElementById("result").innerHTML = `The volume of the ${shape} is ${volume}.`;
  }