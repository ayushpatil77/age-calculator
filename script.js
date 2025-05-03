function calculateAge() {
  const dobInput = document.getElementById('dob').value;
  const targetInput = document.getElementById('targetDate').value;

  if (!dobInput || !targetInput) {
    document.getElementById('result').textContent = 'Please enter both dates.';
    return;
  }

  const birthDate = new Date(dobInput);
  const targetDate = new Date(targetInput);

  if (birthDate > targetDate) {
    document.getElementById('result').textContent = 'Birth date cannot be after the target date.';
    return;
  }

  let years = targetDate.getFullYear() - birthDate.getFullYear();
  let months = targetDate.getMonth() - birthDate.getMonth();
  let days = targetDate.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById('result').textContent =
    `You will be ${years} year(s), ${months} month(s), and ${days} day(s) old on that date.`;
}

// Set default "Age at the date of" to today
window.onload = function () {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('targetDate').value = today;
};
