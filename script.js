document.querySelector('#parent-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('list-title')) {
      var subList = event.target.nextElementSibling;
      subList.classList.toggle('hidden');
    }
  });
  