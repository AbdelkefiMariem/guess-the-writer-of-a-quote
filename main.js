var score=0,counter=0
//Object Array to hold quotes, writer and there image
var quotes = [{quote:"The unexamined life is not worth living",
              writer:"Socrates", photo:'socrates.jpg'},
              {quote:"I think therefore I am",
              writer:"Decartes", photo:'descartes.jpg'},
              {quote:"If God did not exist, it would be necessary to invent Him",
              writer:"Voltaire", photo:'voltaire.jpg'},
              {quote:"We are what we repeatedly do. Excellence, then, is not an act, but a habit",
              writer:"Aristole", photo:'aristole.jpg'},
              {quote:"You can discover more about a person in an hour of play than in a year of conversation"
              ,writer:"Plato", photo:'plato.jpg'}]

//Function to randomly select a quote randomly
function getRandomQuote () {
	return $('#h').append("<h3 class='a'>"+ quotes[Math.floor(Math.random() * (quotes.length))].quote+"</h3>")
}
//
   getRandomQuote()// the function start automaticly
//    style for what we just append to the #h
    $("#h").css('border','thick double #FF766C')
// function so we can know if we answerd corectly or not while we press on the radio
    $(document).ready(function(){
        // while on click on the radio we invoque the function
        $("input[type='radio']").click(function(){
            // the value of the checked radio
        	var radioValue = $("input[name='drone']:checked").val();
           for (var i=0;i<quotes.length;i++){
            // while the  .a ,=== to the element on my quotes  so we can keep the curent element on the same index to know the corecft answer
            if($('.a').html()===quotes[i].quote){
                
                if(radioValue===quotes[i].writer){
                // if the right answer is picked
           alert("as samouha say : Yeeeyyy !! you gessed it")
        //     we clear the #h
                $('#h').empty()
                // so we can append a new quote to it
                getRandomQuote()
                 }
                else{
                    // we remouve the img so we then don t append to #h on each click
                    $(".h1").remove()
                    // if we click on help we show the img of the writer in #h
                    $('.v2').on('click',function(){ $('#h').append(`<img class="h1" src=${quotes[1].src} style="width:200px;height:150px">`)})

                    //
                }
            }
           }
        })
       
    })
   

  


   