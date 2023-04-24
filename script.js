function hitung() {
  const input1 = parseInt(document.getElementById("data1").value);
  const input2 = parseInt(document.getElementById("data2").value);
  const input3 = parseInt(document.getElementById("data3").value);
  const input4 = parseInt(document.getElementById("data4").value);
  const input5 = parseInt(document.getElementById("data5").value);
  const input6 = parseInt(document.getElementById("data6").value);
  const input7 = parseInt(document.getElementById("data7").value);
  const period = parseInt(document.getElementById("period").value);
  const method = document.getElementById("method").value;

  let data = [input1, input2, input3, input4, input5, input6, input7];
  let hasil = 0;

  const sma = (data, period) => {
    let newData = data.slice(data.length - period, data.length);
    let sum = newData.reduce((a, b) => a + b, 0);
    console.log(newData);
    return sum / newData.length;
  };

  const wma = (data, period) => {
    let newData = data.slice(data.length - period, data.length);
    let sum = 0;
    let totalBobot = 0;
    for (let i = 0; i < newData.length; i++) {
      let bobot = i + 1;
      totalBobot += bobot;
      sum += newData[i] * bobot;
    }
    console.log(newData);
    return sum / totalBobot;
  };

  const xma = (data, period) => {
    let firstxma = data.slice(0, period);
    let newData = data.slice(period, data.length);
    let prevxma = 0;
    let newxma;
    if (period == data.length) {
      return sma(data, period);
    }
    for (let element of newData) {
      if (prevxma == 0) {
        prevxma = sma(firstxma, firstxma.length);
      }
      newxma = (2 / (period + 1)) * (element - prevxma) + prevxma;
      prevxma = newxma;
    }
    console.log(newData, firstxma);
    return newxma;
  };

  switch (method) {
    case "SMA":
      hasil = sma(data, period);
      break;
    case "WMA":
      hasil = wma(data, period);
      break;
    case "XMA":
      hasil = xma(data, period);
      break;
  }
  document.getElementById("hasil").innerHTML =
    "Hasil dengan metode " + method + " adalah " + hasil.toFixed(2);
}
