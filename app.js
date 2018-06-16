// kintamieji (namespacing)
const html={
    name:document.querySelector('input[type=text]'),
    speed:document.querySelector('input[type=number]'),
    add:document.querySelector('.add'),
    race:document.querySelector('.race'),
    list:document.querySelector('ul'),
    track:document.querySelector('.race-track'),
    
};

// vairuotoju sarasas
var drivers=[];

function Car(name, speed){
    this.name=name || 'anonimas';
    this.speed=parseFloat(speed) || Math.round(Math.random()*200+10);
    this.addDriver=function(){
        var li= `<li>${this.name}</li>`
        html.list.insertAdjacentHTML('beforeend', li );
    }
    this.addCar=function(){
        var rand=Math.ceil(Math.random()*4)
        var img= `<img style='transition: ${1/this.speed*100}s' src='img/car${rand}.png'>`
        html.track.insertAdjacentHTML('beforeend', img)
    }
}
html.add.addEventListener('click', function(){
    var newRacer= new Car(html.name.value, html.speed.value);
    drivers.push(newRacer);
    newRacer.addDriver();
    newRacer.addCar()
    // neleisti ideti tokio pacio vairuotojo, prafiltruojant masyvus
});

html.race.addEventListener('click',function(){
    var images=document.querySelectorAll('img');
    images.forEach(image=>image.style.marginLeft='80%')
    var max=0
    var name;
    drivers.forEach(driver=>{
        if(driver.speed>max) {max=driver.speed; nn=driver.name}
    })
    console.log(max)
    //atvaziavus paskuiniam arba pirmam auto, padaryti banneri su vairuotojo vardu
    //setTimeout(() => {
            //var win=`<h1>varžybas laimėjo ${nn}</h1>`
            //html.track.insertAdjacentHTML('afterend', win)
        //})
    }, 3000);
    


//padaryti du inputus i kuriuos suvesti krastines a ir b ir tipas, paspaudus prideti, sukuriama forma trik arba stac i psl, o formos centre atvaizduojamas plotas



var check=document.querySelector('.done1')


console.log(check)


//check.addEventListener('click', function () {
    //console.log(546454564)
    //check.style.display='none';
    //var checkmark = <i class="fa fa-check" aria-hidden="true"></i>;
    //html.check.insertAdjacentHTML("afterend", checkmark)
//})