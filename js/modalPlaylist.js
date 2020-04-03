let playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
    ];
    let test = "";
for ( let i = 0; i < playList.length; i++ ){
    
    test += document.write( `<li>${playList[i].song} - ${playList[i].author}</li>` );

}


function PressShowModal(){
    let modal = document.querySelector( ".modal" );
    modal.classList.remove( "modal--hide" );
}

function PressHideModal(){
    let modal = document.querySelector( ".modal" );
    modal.classList.add( "modal--hide");
}