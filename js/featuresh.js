const Features= async()=>{
       
   try {
       let data=await fetch("http://localhost:3000/featuresh")
       let res=await data.json()
       let feature=res.map((elem)=>{
           
           return  `
           <p>${elem.ptop}</p>
              <h2>${elem.pdown}</h2>
           `
           
       })
      
      document.querySelector(".headerfeatur").innerHTML=feature.join("")
      
   } catch (error) {
       console.log(error.message);
       
   }
}
export default Features;

