const Client= async()=>{
       
    try {
        let data=await fetch("http://localhost:3000/clients")
        let res=await data.json()
        let client=res.map((elem )=>{
            
            return  `
            <div class="text1">
            <h2>${elem.title}</h2>
            <p>${elem.p1}</p>
          </div>`
             
            
        })
       
       document.querySelector(".content").innerHTML=client.join("")
       
    } catch (error) {
        console.log(error.message);
        
    }
}
export default Client;

