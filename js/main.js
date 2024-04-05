let timeout;
let counter = 0;

queryField.addEventListener('input', function () {
  debounce(debounceTest, event.target.value, 500);
});

function debounce(func, param, debounceTimeout) {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    func(param);
  }, debounceTimeout);
}

function debounceTest(str) {
  console.log(str);
}

function incrementCounter() {
  return counter++;
}