const doc = $(document);

const navbar = $('.navbar')
const abrirNav = $('#btn-abrir-menu');
const cerrarNav = $('#btn-cerrar-menu');

$(() => {
  abrirNav.on('click',() =>{
    navbar.addClass('show--item')
  })
  cerrarNav.on('click', () => {
    navbar.removeClass('show--item')
  })
})