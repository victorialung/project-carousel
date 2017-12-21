$(document).ready(function () {
    //    $('div p:first-child').css('text-decoration','underline');
    //    $('div p:last-child').css('color', 'green');
    //    $('div p:nth-child(3)').css('color', 'red');

    // Agregando paginación --
    var imgItems = $('.slide-img').length;
    for (i = 1; i <= imgItems; i++) {
        $('.pagination').append('<li><span><i class="fa fa-circle" aria-hidden="true"></i></span></li>');
    }

    var imgPos = 1;

    // -------------------------


    $('.slide-img').hide(); //Ocultando todos los slides
    $('.slide-img:first-child').show() //Mostramos el primer slide
    $('.pagination li:first-child').css({ 'color': '#cd6e2e' }); //Damos estilos al primer item de la paginación
    //  Estas tres cosas van a suceder al mismo tiempo

    // Establecemos nuestras funciones

    /* $('.pagination li').click(function({

    })); ---> UNA Forma de desarrollar una función */

    $('.pagination li').click(pagination); //OTRA forma de desarrollar una función
    $('.iconarrow-right span').click(nextSlider);
    $('.iconarrow-left span').click(prevSlider);

    //Funciones-------------------
    //Recordar que el método Index() devuelve la posición del elemento en valor de número
    function pagination() {
        var paginationPos = $(this).index() + 1;
        console.log(paginationPos);

        $('.slide-img').hide();
        $('.slide-img:nth-child(' + paginationPos + ')').fadeIn();

        $('.pagination li').css({ 'color': '#858585' });
        $(this).css({ 'color': '#cd6e2e' });

        imgPos = paginationPos;

    }

    function nextSlider() {
        if (imgPos >= imgItems) {
            imgPos = 1;
        } else{
            imgPos++;
        }

        $('.pagination li').css({ 'color': '#858585' });
        $('.pagination li:nth-child('+ imgPos +')').css({ 'color': '#cd6e2e' });

        console.log(imgPos);

        $('.slide-img').hide();
        $('.slide-img:nth-child(' + imgPos + ')').fadeIn();

    }

    function prevSlider() {
        if (imgPos <= 1) {
            imgPos = imgItems;
        } else{
            imgPos--;
        }

        $('.pagination li').css({ 'color': '#858585' });
        $('.pagination li:nth-child('+ imgPos +')').css({ 'color': '#cd6e2e' });

        console.log(imgPos);

        $('.slide-img').hide();
        $('.slide-img:nth-child(' + imgPos + ')').fadeIn();

    }









});

