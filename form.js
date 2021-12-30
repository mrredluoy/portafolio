document.addEventListener('submit',e=>{
    e.preventDefault()
    console.log('holas')
     fetch("https://formsubmit.co/ajax/96926a989bcb931ba4f2ceec763c40ab ",{
         method:'POST',
         body:new FormData(e.target)
     })
     .then(res=>res.ok?res.json():Promise.reject(res))
     .then(json=>{
         console.log(json)
         if(json.success=="true"){
            ( function(){
                    document.getElementById('CV').click();
             })();
             ( function(){
                 setTimeout(()=>{
                      document.getElementById('inicio').click();
                 },3000)
               
         })();
             
         }
     })
     .catch(err=>{
         console.log(err)
     })
})


