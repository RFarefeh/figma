const Benlogo= async()=>{
       
    try {
        let data=await fetch("http://localhost:3000/benlogo")
        let res=await data.json()
        let benlogo=res.map((elem)=>{
            
            return  `
            <div class="logonumber">
            <div class="number">
              ${elem.number}
            </div>
            <p>${elem.p1}</p>
          </div>
          <div class="logoabout">
                
                <img src="${elem.image1}" alt="1">
                <img src="${elem.image2}" alt="2">
                <img src="${elem.image3}" alt="3">
                <img src="${elem.image4}" alt="4">
                <img src="${elem.image5}" alt="5">
            </div>
           `
            
        })
       
       document.querySelector(".benlogo").innerHTML=benlogo.join("")
       
    } catch (error) {
        console.log(error.message);
        
    }
}
export default Benlogo;
