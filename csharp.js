const form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const payload = {
    firstname: formData.get('firstname'),
    lastname: formData.get('lastname'),
    email_id: formData.get('email'),
    phone_no: formData.get('phone')
  };

  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();

  if (response.ok) {
    alert(data.message);
    // Reset the form
    form.reset();
  } else {
    alert(data.message);
  }
});
