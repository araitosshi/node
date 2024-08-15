window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.send-button').addEventListener('click', async (event) => {
    const inputValue = document.querySelector('.input-text').value;
    const number = parseFloat(inputValue);
    let resultText = '';

    if (number <= 130) {
      resultText = "年収が" + number + "万円では税金はかかりません";
    } else if (number > 130 && number <= 195) {
      resultText = "所得税が" + number * 0.05 + "万円、住民税が" + number * 0.1 + "万円かかります";
    } else if (number > 195 && number <= 330) {
      resultText = "所得税が" + number * 0.1 + "万円、住民税が" + number * 0.1 + "万円かかります";
    } else if (number > 330 && number <= 695) {
      resultText = "所得税が" + number * 0.2 + "万円、住民税が" + number * 0.1 + "万円かかります";
    } else if (number > 695 && number <= 900) {
      resultText = "所得税が" + number * 0.23 + "万円、住民税が" + number * 0.1 + "万円かかります";
    } else if (number > 900 && number <= 1800) {
      resultText = "所得税が" + number * 0.33 + "万円、住民税が" + number * 0.1 + "万円かかります";
    } else if (number > 1800 && number <= 4000) {
      resultText = "所得税が" + number * 0.40 + "万円、住民税が" + number * 0.1 + "万円かかります";
    } else if (number > 4000) {
      resultText = "所得税が" + number * 0.45 + "万円、住民税が" + number * 0.1 + "万円かかります";
    }

    document.getElementById("result").innerText = resultText;

    const response = await fetch('/api/user', {method: 'POST' , headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ name: inputValue })
    });

    if (response.ok) {
      console.log('データが正常にサーバーに送信されました');
    } else {
      console.error('データの送信に失敗しました');
    }
  });
});