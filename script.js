'use strict';

(function () {
  const form = document.querySelector('.js-form');
  const radioList = document.querySelector('.js-radio-list');
  const select = document.querySelector('.js-select');
  const totalAmount = document.querySelector('.js-total-amount');
  const selectedPlan = document.querySelector('.js-selected-plan');

  function initTotal() {
    const radioInput = radioList.querySelector('input:checked');
    const selectValue = select.value;
    const total = +radioInput.value * +selectValue;

    totalAmount.textContent = '$' + total;

    const inputNumber = radioInput.getAttribute('data-number');
    selectedPlan.textContent = '#' + inputNumber;
  };

  initTotal();

  form.addEventListener('change', () => {
    initTotal();
  });
})();
