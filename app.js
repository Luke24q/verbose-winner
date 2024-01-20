document.getElementById('btnExit').addEventListener('click', async function() {
  const userId = <здесь код для получения ID пользователя>; // Получить ID пользователя
  const response = await fetch('/check_user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId: userId })
  });
  const data = await response.json();
  if (data.result) {
    document.getElementById('success').style.display = 'block';
  } else {
    document.getElementById('failure').style.display = 'block';
  }
});