document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        option.addEventListener('click', () => {
            options.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
        });
    });
});

const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            const iconElement = icon.querySelector('i');
            iconElement.classList.remove(icon.dataset.originalIcon);
            iconElement.classList.add('fa-external-link-alt');
        });

        icon.addEventListener('mouseout', function() {
            const iconElement = icon.querySelector('i');
            iconElement.classList.remove('fa-external-link-alt');
            iconElement.classList.add(icon.dataset.originalIcon);
        });

        icon.addEventListener('click', function() {
            const url = icon.getAttribute('data-url');
            window.open(url, '_blank');
        });
    });