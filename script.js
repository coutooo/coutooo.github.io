document.addEventListener('DOMContentLoaded', function() {
  var scrollContent = document.querySelector('.scroll-content');
  var items = scrollContent.innerHTML;
  scrollContent.innerHTML += items; // Duplicate the items
});

document.getElementById('read-more-btn').addEventListener('click', function() {
  var description = document.getElementById('medtracking-description');
  if (description.classList.contains('expanded')) {
    description.classList.remove('expanded');
    this.textContent = 'Read More';
  } else {
    description.classList.add('expanded');
    this.textContent = 'Read Less';
  }
});

document.getElementById('read-more-btn-v2x').addEventListener('click', function() {
  var description = document.getElementById('v2x-description');
  if (description.classList.contains('expanded')) {
    description.classList.remove('expanded');
    this.textContent = 'Read More';
  } else {
    description.classList.add('expanded');
    this.textContent = 'Read Less';
  }
});