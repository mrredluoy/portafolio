const d=document,
 letras=d.querySelectorAll('.letra'),
 comilla=d.getElementById('comilla'),
 modoBtn=d.getElementById('modoBtn'),
 body=d.querySelector('body'),
 letra=d.getElementById('letra'),
 redes=d.querySelectorAll('.redes'),
 idiomaBtn=d.getElementById('idiomaBtn'),
 links=d.querySelectorAll('.link'),
 texto=d.getElementById('texto'),
 allA=d.querySelectorAll('.a');
console.log(allA)

 let time=0
 let color='black'
 let numero1=1
 let numero2=2

 const arrayImg=['img/img1.png','img/img2.png','img/img3.png']
 const arrayContenido=['Game-dados','Recordatorio','game-PPT']
 const arrayEnlaces=['https://mrredluoy.github.io/game-dados/','https://mrredluoy.github.io/alarma/','https://mrredluoy.github.io/papel-tijera-piedra/']
 
setInterval(() => {
    if(time==1){letras[0].style.color=color;letras[0].textContent='|'}
    if(time==2){letras[0].style.color=color;letras[0].textContent='R'}
    if(time==3){letras[1].style.color=color;letras[1].textContent='_'}
    if(time==4){letras[1].style.color=color;letras[1].textContent='e'}
    if(time==5){letras[2].style.color=color;letras[2].textContent='_'}
    if(time==6){letras[2].style.color=color;letras[2].textContent='d'}
    if(time==7){letras[3].style.color=color;letras[3].textContent='_'}   
    if(time==8){letras[3].style.color=color;letras[3].textContent='l'}
    if(time==9){letras[4].style.color=color;letras[4].textContent='_'}
    if(time==10){letras[4].style.color=color;letras[4].textContent='u'}
    if(time==11){letras[5].style.color=color;letras[5].textContent='_'}
    if(time==12){letras[5].style.color=color;letras[5].textContent='o'}
    if(time==13){letras[6].style.color=color;letras[6].textContent='_'}
    if(time==14){letras[6].style.color=color;letras[6].textContent='y'}   
    if(time==15){letras[7].style.color=color, letras[7].textContent='_',
    comilla.classList.add('animation')}
    if(time==30){  comilla.classList.remove('animation')}
    if(time==31){letras[7].style.color=color;letras[7].textContent=''}
    if(time==32){letras[6].style.color=color;letras[6].textContent='_'}
    if(time==33){letras[6].style.color=color;letras[6].textContent=''}
    if(time==34){letras[5].style.color=color;letras[5].textContent='_'}
    if(time==35){letras[5].style.color=color;letras[5].textContent=''}
    if(time==36){letras[4].style.color=color;letras[4].textContent='_'}
    if(time==37){letras[4].style.color=color;letras[4].textContent=''}
    if(time==38){letras[3].style.color=color;letras[3].textContent='_'}   
    if(time==39){letras[3].style.color=color;letras[3].textContent=''}
    if(time==40){letras[2].style.color=color;letras[2].textContent='_'}
    if(time==41){letras[2].style.color=color;letras[2].textContent=''}
    if(time==42){letras[1].style.color=color;letras[1].textContent='_'}
    if(time==43){letras[1].style.color=color;letras[1].textContent=''}
    if(time==44){letras[0].style.color=color;letras[0].textContent='_'}
    if(time==45){letras[0].style.color=color;letras[0].textContent='_';letras[0].classList.add('animation') } 
    if(time==50){letras[0].style.color=color;letras[0].textContent='_';letras[0].classList.remove('animation')}
    if(time==51){letras[0].style.color=color;letras[0].textContent='Y'}
    if(time==52){letras[1].style.color=color;letras[1].textContent='_'}
    if(time==53){letras[1].style.color=color;letras[1].textContent='o'}
    if(time==54){letras[2].style.color=color;letras[2].textContent='_'}
    if(time==55){letras[2].style.color=color;letras[2].textContent='u'}
    if(time==56){letras[3].style.color=color;letras[3].textContent='_'}   
    if(time==57){letras[3].style.color=color;letras[3].textContent='l'}
    if(time==58){letras[4].style.color=color;letras[4].textContent='_'}
    if(time==59){letras[4].style.color=color;letras[4].textContent='b'}
    if(time==60){letras[5].style.color=color;letras[5].textContent='_'}
    if(time==61){letras[5].style.color=color;letras[5].textContent='e'}
    if(time==62){letras[6].style.color=color;letras[6].textContent='_'}
    if(time==63){letras[6].style.color=color;letras[6].textContent='r'}   
    if(time==64){letras[7].style.color=color, letras[7].textContent='_',
    comilla.classList.add('animation')}
    if(time==74){  comilla.classList.remove('animation')}
    if(time==75){letras[7].style.color=color;letras[7].textContent=''}
    if(time==76){letras[6].style.color=color;letras[6].textContent='_'}
    if(time==77){letras[6].style.color=color;letras[6].textContent=''}
    if(time==78){letras[5].style.color=color;letras[5].textContent='_'}
    if(time==79){letras[5].style.color=color;letras[5].textContent=''}
    if(time==80){letras[4].style.color=color;letras[4].textContent='_'}
    if(time==81){letras[4].style.color=color;letras[4].textContent=''}
    if(time==82){letras[3].style.color=color;letras[3].textContent='_'}   
    if(time==83){letras[3].style.color=color;letras[3].textContent=''}
    if(time==84){letras[2].style.color=color;letras[2].textContent='_'}
    if(time==85){letras[2].style.color=color;letras[2].textContent=''}
    if(time==86){letras[1].style.color=color;letras[1].textContent='_'}
    if(time==87){letras[1].style.color=color;letras[1].textContent=''}
    if(time==88){letras[0].style.color=color;letras[0].textContent='_'}
    if(time==89){letras[0].style.color=color;letras[0].textContent='_';letras[0].classList.add('animation') }     
   if(time==92){;time=0;letras[0].classList.remove('animation')}   
    time++
},200);

modoBtn.addEventListener('click',e=>{
    if(e.target.classList.contains('black')){
        body.style.backgroundColor='rgba(194, 194, 194, 0.5) '
        modoBtn.classList.remove('black')
        modoBtn.style.justifyContent='flex-start'
        modoBtn.style.backgroundColor='#34495e'
        modoBtn.querySelector('span').style.backgroundColor='white'
        letras.forEach(ele=>ele.style.color='black ')
        redes.forEach(ele=>{
            ele.classList.remove('redesW')
            ele.classList.add('redes')
        })
        links.forEach(ele=>ele.style.color='black')
        color='black'
        texto.style.color='black '
       
    }else{
        modoBtn.classList.add('black')
         body.style.backgroundColor='#322f2f'
         modoBtn.style.justifyContent='flex-end'
         modoBtn.style.backgroundColor=' #ecf0f1 '
         modoBtn.querySelector('span').style.backgroundColor='#34495e'
         letras.forEach(ele=>ele.style.color='#d7dbdd ')
         redes.forEach(ele=>{
             ele.classList.remove('redes')
             ele.classList.add('redesW')
         })
         color='#d7dbdd '
         texto.style.color='white '
         links.forEach(ele=>ele.style.color='white')
    }
   
})
idiomaBtn.addEventListener('click',e=>{
if(e.target.classList.contains('english')){
    idiomaBtn.setAttribute('src','img/Flag_of_the_United_Kingdom_(3-5).svg')
     letra.textContent='Desarrollador web'
    idiomaBtn.classList.remove('english')
    links[0].textContent='rojectos'
    links[1].textContent='escargar CV'
    allA[0].textContent='Acerca de mi'
    allA[1].textContent='Desarrollador autodidacta, acostumbro solucionar problemas e imprevistos ,puedo adaptarme facilmente a cualquiera situacion,estoy en proceso de realizar mi sueño y eso me hace muy feliz. Mi deseo es formar parte de un equivo visionario, por lo cual trabajo con responsabilidad, eficacia y dedicación'
    allA[2].textContent='Habilidades'
    allA[3].textContent='Otras Habilidades'
    allA[4].textContent='Proyectos'
    
    
   
    
}else{
    idiomaBtn.setAttribute('src','img/spain-svgrepo-com.svg')
    letra.textContent='Web developer'
    idiomaBtn.classList.add('english')
    links[0].textContent='rojects'
    links[1].textContent='ownload CV'
    allA[0].textContent='About me'
    allA[1].textContent='Self-taught developer, I am used to solving problems and unforeseen events, I can easily adapt to any situation, I am in the process of realizing my dream and that makes me very happy. My desire is to be part of a visionary mistake, for which I work with responsibility, efficiency and dedication'
    allA[2].textContent='Skills'
    allA[3].textContent='Other skills'
    allA[4].textContent='Projects'
   
}

   
})



d.addEventListener('click',e=>{
    if(e.target.classList.contains('antes')){
        d.querySelector('.uno').setAttribute('src',arrayImg[numero1])
        d.querySelector('.dos').setAttribute('src',arrayImg[numero2])
        d.querySelector('.figUno').textContent=arrayContenido[numero1]
        d.querySelector('.figDos').textContent=arrayContenido[numero2]
        d.querySelector('.enla1').setAttribute('href',arrayEnlaces[numero1])
        d.querySelector('.enla2').setAttribute('href',arrayEnlaces[numero2])
        numero1++
        numero2++
        if(numero2==arrayContenido.length){
            numero2=0
        }          
        if(numero1==arrayContenido.length){
            numero1=0
         }          
    }

    if(e.target.classList.contains('despues')){
        console.log(arrayContenido.length)
        if(numero1==0){
            numero1=arrayContenido.length
        }
        if(numero2==0){
            numero2=arrayContenido.length
        }
        numero1--
         numero2--
        d.querySelector('.uno').setAttribute('src',arrayImg[numero1])
        d.querySelector('.dos').setAttribute('src',arrayImg[numero2])
        d.querySelector('.figUno').textContent=arrayContenido[numero1]
        d.querySelector('.figDos').textContent=arrayContenido[numero2]
        d.querySelector('.enla1').setAttribute('href',arrayEnlaces[numero1])
        d.querySelector('.enla2').setAttribute('href',arrayEnlaces[numero2])
       
        
    }
})
    


   
function inicio(tiempo){
   return new Promise((resol)=>{
   
       setTimeout(() => {
        for(let i=0;i<letras.length;i++){
            setTimeout(()=>{
                    letras[i].style.color='black'
            
                },time)
            time+=250 
            setTimeout(()=>{
                comilla.classList.add('animation')
            },1500)
            setTimeout(()=>{
                letras[i].style.color='transparent'
        
            },5000)
        }
        console.log('pepe')
       resol() 
       },tiempo);
   
   })
}    
    





   
   
 

