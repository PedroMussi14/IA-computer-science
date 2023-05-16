const form = document.getElementById('checkout-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form submission
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  localStorage.setItem('checkout-data', JSON.stringify(data));
  alert('Data saved!');
  document.querySelector("form").reset();
});
