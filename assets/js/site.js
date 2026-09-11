/* ===========================================================================
   Woltix — site behaviour.
   No framework, no jQuery, no third-party script. ~3 KB.
   =========================================================================== */
(function () {
  'use strict';

  /* ── Mobile navigation ─────────────────────────────────────────────── */
  (function mobileNav() {
    var btn = document.querySelector('[data-navtoggle]');
    var nav = document.getElementById('wx-mobnav');
    if (!btn || !nav) return;

    function setOpen(open) {
      nav.setAttribute('data-open', String(open));
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    btn.addEventListener('click', function () {
      setOpen(nav.getAttribute('data-open') !== 'true');
    });

    // Close after picking a destination.
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });

    // Close on Esc, and return focus to the toggle.
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.getAttribute('data-open') === 'true') {
        setOpen(false);
        btn.focus();
      }
    });

    // Close when tapping outside the menu.
    document.addEventListener('click', function (e) {
      if (nav.getAttribute('data-open') !== 'true') return;
      if (nav.contains(e.target) || btn.contains(e.target)) return;
      setOpen(false);
    });

    // Reset when resizing up to desktop, so the menu can't be stuck open.
    var mq = window.matchMedia('(min-width: 981px)');
    (mq.addEventListener ? mq.addEventListener.bind(mq, 'change') : mq.addListener.bind(mq))(function (e) {
      if (e.matches) setOpen(false);
    });
  })();

  /* ── Demo request form ──────────────────────────────────────────────
     Submits to Pageclip over fetch so the visitor stays on the page.
     Falls back to a normal form POST if fetch is unavailable or fails.  */
  (function demoForm() {
    var form = document.getElementById('wx-form');
    if (!form) return;

    var email  = form.querySelector('[name="email"]');
    var hp     = form.querySelector('[name="_gotcha"]');
    var button = form.querySelector('button[type="submit"]');
    var errBox = form.querySelector('.wx-form__error');

    function fail(msg) {
      form.classList.remove('is-busy');
      form.classList.add('is-error');
      if (errBox) errBox.textContent = msg;
      if (button) button.disabled = false;
    }

    function succeed() {
      form.classList.remove('is-busy', 'is-error');
      form.classList.add('is-success');
      // Move focus to the confirmation so screen readers announce it.
      var ok = form.querySelector('.wx-form__success');
      if (ok) { ok.setAttribute('tabindex', '-1'); ok.focus(); }
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Honeypot — a real person never fills this in.
      if (hp && hp.value) { succeed(); return; }

      form.classList.remove('is-error');

      // The form is novalidate so we can style our own messages.
      if (!email || !email.value.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email.value.trim())) {
        if (email) {
          email.setAttribute('aria-invalid', 'true');
          email.focus();
        }
        fail('Please enter a valid work email address so we can reply.');
        return;
      }
      email.removeAttribute('aria-invalid');

      if (!window.fetch || !form.action) { form.submit(); return; }

      form.classList.add('is-busy');
      if (button) button.disabled = true;

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then(function (res) {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          succeed();
        })
        .catch(function () {
          fail('Something went wrong sending that. Please email contact@woltix.com and we’ll pick it up from there.');
        });
    });

    // Clear the invalid state as soon as the visitor starts fixing it.
    if (email) {
      email.addEventListener('input', function () {
        email.removeAttribute('aria-invalid');
        form.classList.remove('is-error');
      });
    }
  })();
})();
