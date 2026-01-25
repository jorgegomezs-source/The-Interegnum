// ============================================
// MAIN JAVASCRIPT FILE - TheInterregnum
// ============================================
// This file contains all custom JavaScript for the website

/**
 * Initialization on DOM Ready
 */
document.addEventListener('DOMContentLoaded', function () {
  initializeNavigation();
  initializeNewsletterForm();
  initializeSmoothScroll();
  initializeLoadMoreButton();
});

/**
 * Initialize Navigation Active State
 * Sets the active class on navigation links based on current section
 */
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.header__menu-link');
  const sections = document.querySelectorAll('main section');

  // Smooth scroll behavior for internal links
  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          updateActiveNavLink(href);
        }
      }
    });
  });

  // Update active link on scroll
  window.addEventListener('scroll', function () {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 200) {
        current = '#' + section.getAttribute('id');
      }
    });

    updateActiveNavLink(current);
  });
}

/**
 * Update Active Navigation Link
 * @param {string} href - The href of the link to activate
 */
function updateActiveNavLink(href) {
  document.querySelectorAll('.header__menu-link').forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === href) {
      link.classList.add('active');
    }
  });
}

/**
 * Initialize Newsletter Form
 * Handles newsletter subscription form submission
 */
function initializeNewsletterForm() {
  const forms = document.querySelectorAll('.newsletter__form, .modal-form');

  forms.forEach((form) => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form values
      const email = this.querySelector('input[type="email"]').value;
      const name = this.querySelector('input[type="text"]')?.value || 'Subscriber';

      // Basic validation
      if (!email) {
        showNotification('Please enter a valid email address', 'error');
        return;
      }

      // Simulate form submission (replace with actual API call)
      console.log('Newsletter Subscription:', { name, email });

      // Show success message
      showNotification(
        `Thank you! ${name} has been added to our newsletter.`,
        'success'
      );

      // Reset form
      this.reset();

      // Close modal if it's in a modal
      const modal = this.closest('.modal');
      if (modal) {
        bootstrap.Modal.getInstance(modal)?.hide();
      }
    });
  });
}

/**
 * Initialize Smooth Scroll
 * Adds smooth scrolling behavior
 */
function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });
}

/**
 * Initialize Load More Button
 * Handles load more articles functionality
 */
function initializeLoadMoreButton() {
  const loadMoreBtn = document.querySelector('.articles__footer .btn');

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function () {
      // Simulate loading more articles
      showNotification(
        'Loading more articles... (Demo mode)',
        'info'
      );

      // Add animation
      this.disabled = true;
      this.textContent = 'Loading...';

      // Simulate API delay
      setTimeout(() => {
        this.disabled = false;
        this.textContent = 'Load More Articles';
        showNotification(
          'More articles loaded successfully!',
          'success'
        );
      }, 1500);
    });
  }
}

/**
 * Show Notification
 * Displays a temporary notification to the user
 * @param {string} message - The message to display
 * @param {string} type - The type of notification (success, error, info, warning)
 */
function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `alert alert-${type} alert-dismissible fade show`;
  notification.setAttribute('role', 'alert');
  notification.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;

  // Add to page
  const container = document.body;
  container.insertAdjacentElement('afterbegin', notification);

  // Add styling for positioning
  notification.style.position = 'fixed';
  notification.style.top = '80px';
  notification.style.right = '20px';
  notification.style.zIndex = '9999';
  notification.style.maxWidth = '400px';
  notification.style.minWidth = '300px';

  // Auto-dismiss after 5 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 150);
  }, 5000);
}

/**
 * Throttle Function
 * Limits the execution of a function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Debounce Function
 * Delays the execution of a function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

/**
 * Check if element is in viewport
 * @param {Element} element - Element to check
 * @returns {boolean} True if element is in viewport
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Export functions for use in other files (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    showNotification,
    throttle,
    debounce,
    isInViewport,
  };
}
