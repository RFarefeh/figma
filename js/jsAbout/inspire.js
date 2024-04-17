const Inspire= async()=>{
       
    try {
        let data=await fetch("http://localhost:3000/inspire")
        let res=await data.json()
        let inspire=res.map((elem)=>{
            
            return  `
            <div class="vision">
                 <div class="p">
                <h6>${elem.hOne}</h6>
                <h2>${elem.hTwo}</h2>
                <p>${elem.p1}</p>
                </div>
                <img src="${elem.image}">
        

            </div>
            <div class="mission">
                <img src="${elem.image1}">
                <div class="p">
                <h6>${elem.h2} </h6>
                <h2>${elem.h3}</h2>
                <p>${elem.p2}</p>
                </div>
            </div>
            `
            
        })
       
       document.querySelector(".aboutbackground").innerHTML=inspire.join("")
       
    } catch (error) {
        console.log(error.message);
        
    }
}
export default Inspire;
