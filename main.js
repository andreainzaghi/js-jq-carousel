$(".next").click(
  function(){
    var immagine = $ (".images img.active");
    immagine.removeClass("active");
    if ( immagine.hasClass("last")==true){
      $(".images img.first").addClass("active")
    }else{
      immagine.next().addClass("active");
    }



    var cerchio = $(".nav  i.active");
    cerchio.removeClass("active");
    if (cerchio.hasClass("last")==true){
      $(".nav  i.first").addClass("active")
    }else{
      cerchio.next().addClass("active");
    }
  }

);
$(".prev").click(
  function(){
    var immagineb = $ (".images img.active");
    immagineb.removeClass("active");
    if ( immagineb.hasClass("last")==true){
      $(".images img.first").addClass("active")
    }else{
      immagineb.next().addClass("active");
    }
    var cerchiob = $ (".nav  i.active");
    cerchiob.removeClass("active");
    if ( cerchiob.hasClass("last")==true){
      $(".nav  i.first").addClass("active")
    }else{
      cerchiob.next().addClass("active");
    }

  }
);
