// The keys (e.g. valueMissing) map onto
// a key in the `input.validity` object
const customMessages = {
  valueMissing:    'This field is required',       // `required` attr
  emailMismatch:   'Fill valid email address',  // Invalid email
};
const inputs = document.querySelectorAll('input, select, textarea');
const validationErrorClass = 'validation-error';
const parentErrorClass = 'has-validation-error';

function getCustomMessage (type, validity) {
  if (validity.typeMismatch) {
    return customMessages[`${type}Mismatch`]
  } else {
    for (const invalidKey in customMessages) {
      if (validity[invalidKey]) {
        return customMessages[invalidKey]
      }
    }
  }
}

inputs.forEach(function (input) {
  // Each time the user types or submits, this will
  // check validity, and set a custom message if invalid.
  function checkValidity () {
    const message = input.validity.valid
      ? null
      : getCustomMessage(input.type, input.validity, customMessages);
    input.setCustomValidity(message || '')
  }
  input.addEventListener('input', checkValidity);
  input.addEventListener('invalid', checkValidity);
});

inputs.forEach(function (input) {
  function checkValidity (options) {
    const insertError = options.insertError;
    const parent = input.parentNode;
    const error = parent.querySelector(`.${validationErrorClass}`)
      || document.createElement('div');

    if (!input.validity.valid && input.validationMessage) {
      error.className = validationErrorClass;
      error.textContent = input.validationMessage;

      if (insertError) {
        parent.insertBefore(error, input);
        parent.classList.add(parentErrorClass);
      }
    } else {
      parent.classList.remove(parentErrorClass);
      error.remove();
    }
  }
  input.addEventListener('input', function () {
    // We can only update the error or hide it on input.
    // Otherwise it will show when typing.
    checkValidity({insertError: false})
  });
  input.addEventListener('invalid', function (e) {
    // prevent showing the default display
    e.preventDefault();

    // We can also create the error in invalid.
    checkValidity({insertError: true})
  })
});
