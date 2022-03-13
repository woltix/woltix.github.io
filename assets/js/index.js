// The keys (e.g. valueMissing) map onto
// a key in the `input.validity` object
const customMessages = {
  valueMissing: 'This field is required',       // `required` attr
  emailMismatch: 'Fill valid email address',  // Invalid email
};
const inputs = Array.prototype.slice.call(document.querySelectorAll('input, select, textarea'));
const validationErrorClass = 'validation-error';
const parentErrorClass = 'has-validation-error';
const form = document.querySelector('.pageclip-form');
const formSuccessTemplate = document.querySelector('.pageclip-form__success');

function getCustomMessage(type, validity) {
  if (validity.typeMismatch) {
    return customMessages[type + "Mismatch"]
  } else {
    for (let invalidKey in customMessages) {
      if (validity[invalidKey]) {
        return customMessages[invalidKey]
      }
    }
  }
}

inputs.forEach(function (input) {
  // Each time the user types or submits, this will
  // check validity, and set a custom message if invalid.
  function checkValidity() {
    const message = input.validity.valid
      ? null
      : getCustomMessage(input.type, input.validity, customMessages);
    input.setCustomValidity(message || '')
  }

  input.addEventListener('input', checkValidity);
  input.addEventListener('invalid', checkValidity);
});

inputs.forEach(function (input) {
  function checkValidity(options) {
    const insertError = options.insertError;
    const parent = input.parentNode;
    const error = parent.querySelector("." + validationErrorClass)
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

if(form) {
  Pageclip.form(form, {
    onSubmit: function (event) { },
    onResponse: function (error, response) { },
    successTemplate: `
      <div class="success-template-inner">
        <span>Thank you for your message!</span>
        <button class="btn" type="button">
          <span>Send new Message</span>
        </button>
      </div>`
  })
}

$("body").bind("DOMSubtreeModified", function () {
  if (formSuccessTemplate) {
    $("body").addClass("success-template-view");
  } else {
    $("body").removeClass("success-template-view");
  }
});

////Jquery////

//Sidebar
$('ul li a').click(function (e) {
  var goto = $(this).attr('href');
  $('html,body').stop().animate({scrollTop: $(goto).offset().top - 100}, 1000);
  e.preventDefault();
});

$('nav a').click(function () {
  $('a').removeClass("active");
  $(this).addClass("active");
});

$('nav a.main-menu__item').click(function (e) {
  var goto = $(this).attr('href');
  $('html,body').stop().animate({scrollTop: $(goto).offset().top - 30}, 1000);
  e.preventDefault();
});

$('ul li a').click(function () {
  $('a').removeClass("active");
  $(this).addClass("active");
});

$("nav.sidebar").scroll(function () {
  var scroll = $("nav.sidebar").scrollTop();

  if (scroll > 0) {
    $(".logo-documentation").addClass("blur");
  } else {
    $(".logo-documentation").removeClass("blur");
  }
});

// Mobile menu
$(".mobile-menu-btn").click(function () {

  $(".mobile-menu-btn").toggleClass("menu-open");

  $(".mobile-menu").toggleClass("menu-open");

  $("body").toggleClass("menu-open");

});

$(".main-menu-mobile__item").click(function () {

  $(".mobile-menu-btn").removeClass("menu-open");

  $(".mobile-menu").removeClass("menu-open");

  $("body").removeClass("menu-open");

});

// Mobile sidebar

if (localStorage.getItem('sidebarState') == 'sidebar-close') {
  $(".sidebar-mobile-btn").removeClass("sidebar-open");

  $(".sidebar-mobile").removeClass("sidebar-open");

}

if (localStorage.getItem('sidebarState') == 'sidebar-open') {
  $(".sidebar-mobile-btn").toggleClass("sidebar-open");

  $(".sidebar-mobile").toggleClass("sidebar-open");

}


$(".sidebar-mobile-btn").click(function () {

  $(".sidebar-mobile-btn").toggleClass("sidebar-open");

  $(".sidebar-mobile").toggleClass("sidebar-open");

  localStorage.setItem('sidebarState', 'sidebar-open');

});

$(".sidebar-mobile ul li a").click(function () {

  $(".sidebar-mobile-btn").removeClass("sidebar-open");

  $(".sidebar-mobile").removeClass("sidebar-open");

  localStorage.setItem('sidebarState', 'sidebar-close');

});

//Table
$("table").wrap("<div class='table-wrapper'></div>");
