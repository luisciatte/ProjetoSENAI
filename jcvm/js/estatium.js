const sidebar = document.getElementById('default-sidebar');
const contentWrapper = document.getElementById('content-wrapper');
const sidebarToggleButton = document.querySelector('[data-drawer-toggle="default-sidebar"]');
sidebarToggleButton.addEventListener('click', function () {
    sidebar.classList.toggle('-translate-x-full');
    contentWrapper.classList.toggle('ml-0');
    contentWrapper.classList.toggle('ml-64');
});

document.addEventListener('click', function (event) {
    if (!sidebar.contains(event.target) && !sidebarToggleButton.contains(event.target)) {
        sidebar.classList.add('-translate-x-full');
        contentWrapper.classList.remove('ml-64');
        contentWrapper.classList.add('ml-0');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.getElementById('example-dropdown-button');
    const dropdownMenu = document.getElementById('example-dropdown');

    dropdownButton.addEventListener('click', function () {
        dropdownMenu.classList.toggle('hidden');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('dropdown');
    const modalToggle = document.querySelector('[data-dropdown-toggle="dropdown"]');
    const modalClose = modal.querySelector('button');
    modalToggle.addEventListener('click', function () {
        modal.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
    });
    modalClose.addEventListener('click', function () {
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('createProductModal');
    const modalToggle = document.querySelector('[data-modal-toggle="createProductModal"]');
    const modalClose = modal.querySelector('button');
    modalToggle.addEventListener('click', function () {
        modal.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
    });
    modalClose.addEventListener('click', function () {
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    });
    const productForm = document.getElementById('productForm');
    productForm.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('Form submitted');
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('updateProductModal');
    const modalToggle = document.querySelector('[data-modal-toggle="updateProductModal"]');
    const modalClose = modal.querySelector('button');
    modalToggle.addEventListener('click', function () {
        modal.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
    });
    modalClose.addEventListener('click', function () {
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    });
    const productForm = document.getElementById('productForm');
    productForm.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('Form submitted');
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('readProductModal');
    const modalToggle = document.querySelector('[data-modal-toggle="readProductModal"]');
    const modalClose = modal.querySelector('button');
    modalToggle.addEventListener('click', function () {
        modal.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
    });
    modalClose.addEventListener('click', function () {
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('deleteModal');
    const modalToggle = document.querySelector('[data-modal-toggle="deleteModal"]');
    const modalClose = modal.querySelector('button');
    modalToggle.addEventListener('click', function () {
        modal.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
    });
    modalClose.addEventListener('click', function () {
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    });
});