
$(document).ready(function(){

    // Efecto Submenu Quienes Somos 

    $("#btn-quienes-somos").click(function(e){
        e.preventDefault();
        $(".contenedor-submenu-quienes-somos").toggleClass("active");
        $(".btn-quienes-somos").toggleClass("active");
        $(".contenedor-submenu-productos").removeClass("active");
        $(".btn-productos").removeClass("active");
        
        if ($(".contenedor-submenu-quienes-somos").hasClass("active")) {
            $(".contenedor-modal").addClass("active");            
        } else {
            $(".contenedor-modal").removeClass("active");
        }

        $(".contenedor-modal").click(function(){
            $(".contenedor-submenu-quienes-somos").removeClass("active");
            $(".contenedor-modal").removeClass("active");
            $(".btn-quienes-somos").removeClass("active");    
        });
    });


    // Efecto Submenu Productos 

    $("#btn-productos").click(function(e){
        e.preventDefault();
        $(".contenedor-submenu-productos").toggleClass("active");
        $(".btn-productos").toggleClass("active");
        $(".contenedor-submenu-quienes-somos").removeClass("active");
        $(".btn-quienes-somos").removeClass("active");
        
        if ($(".contenedor-submenu-productos").hasClass("active")) {
            $(".contenedor-modal").addClass("active");            
        } else {
            $(".contenedor-modal").removeClass("active");
        }

        $(".contenedor-modal").click(function(){
            $(".contenedor-submenu-productos").removeClass("active");
            $(".contenedor-modal").removeClass("active");
            $(".btn-productos").removeClass("active");    
        });
    });
    
    // Btn Cerrar Modal


    $("#btn-cerrar-modal").click(function(e){
        e.preventDefault();
        $(".contenedor-modal").removeClass("active");
    });
    

//  Menu Responsive

    $("#btn-menu").click(function(e){
        e.preventDefault();
        //cerrar responsive
        var aa = $(this).attr("class")
        
        console.log("btn menu")
        if( $(".btn-menu i").attr("class") == "fa fa-bars" ){
            $(".btn-menu i").removeClass("fa fa-bars").addClass("fa fa-close");
            $(".btn-menu").addClass("close")
        } else{
            $(".btn-menu i").removeClass("fa fa-close").addClass("fa fa-bars");
            $(".btn-menu").removeClass("close")
        }
        if(aa.includes("close")) {
            // $(".contenedor-menu-responsive").removeClass("active")
            $(".contenedor-submenu-productos-responsive").removeClass("active")
            $(".contenedor-submenu-quienes-somos-responsive").removeClass("active")
            
            $(".menu-responsive").removeClass("active")
            $(".menu-responsive").removeClass("cerrar")
            // console.log("cerrar modal responsive")
        }

        $(".contenedor-menu-responsive").toggleClass("active");

        if ($(".contenedor-menu-responsive").hasClass("active")) {
            $(".contenedor-modal-responsive").addClass("active");            
        } else {
            $(".contenedor-modal-responsive").removeClass("active");
        }
        
        

    });
    $("#btn-menu.close").click(function (e) {
        e.preventDefault();
        console.log("cerrar responsive")
        
    })
    

    // Cerrar Modal
   

    $(".contenedor-modal-responsive").click(function(){
        // $(".contenedor-menu-responsive").removeClass("active");
        // $(".btn-menu").removeClass("active");
        // $(".contenedor-modal-responsive").removeClass("active");

        // if( $(".btn-menu i").attr("class") == "fa fa-bars" ){
        //     $(".btn-menu i").removeClass("fa fa-bars").addClass("fa fa-close");
        //     $(".btn-menu").addClass("close")
        // } else{
        //     $(".btn-menu i").removeClass("fa fa-close").addClass("fa fa-bars");
        //     $(".btn-menu").removeClass("close")
        // } 
    });

    $("#btn-cerrar-modal-responsive").click(function(e){
        e.preventDefault();
        $(".contenedor-modal-responsive").removeClass("active");
        $(".contenedor-menu-responsive").removeClass("active");
        $(".btn-menu").removeClass("active");
    });


    // Botones para abrir los submenus

    $("#btn-quienes-somos-responsive").click(function(e){
        e.preventDefault();
        $(".menu-responsive").addClass("cerrar");
        $(".contenedor-submenu-quienes-somos-responsive").addClass("active");
    });

    $("#btn-productos-responsive").click(function(e){
        e.preventDefault();
        $(".menu-responsive").addClass("cerrar");
        $(".contenedor-submenu-productos-responsive").addClass("active");
    });


    // Botones para cerrar los submenus

    $("#btn-cerrar-submenu-quienes-somos-responsive").click(function(e){
        e.preventDefault();
        $(".contenedor-submenu-quienes-somos-responsive").removeClass("active");
        $(".menu-responsive").removeClass("cerrar");
        $(".menu-responsive").addClass("active");
    });

    $("#btn-cerrar-submenu-productos-responsive").click(function(e){
        e.preventDefault();
        $(".contenedor-submenu-productos-responsive").removeClass("active");
        $(".menu-responsive").removeClass("cerrar");
        $(".menu-responsive").addClass("active");
    });

});