const Cardben= async()=>{
       
    try {
        let data=await fetch("http://localhost:3000/cardben")
        let res=await data.json()
        let cardben=res.map((elem)=>{
            
            return  `<div class="customize">
            <img src="${elem.image1}" alt="">
            <h3>${elem.h2}</h3>
            <p>${elem.p2}</p>
          </div>
             `
            
        })
       
       document.querySelector(".cardben").innerHTML=cardben.join("")
       
    } catch (error) {
        console.log(error.message);
        
    }
}
export default Cardben;
