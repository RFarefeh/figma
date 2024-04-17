const Contactf= async()=>{
       
    try {
        let data=await fetch("http://localhost:3000/contactform")
        let res=await data.json()
        let contactf=res.map((elem)=>{
            
            return  `
            <img src="${elem.img}" />
            <div class="heading">
              <h1>${elem.h1}</h1>
              <p>
                ${elem.p1}
              </p>
            </div>
             `
            
        })
       
       document.querySelector(".startconvert").innerHTML=contactf.join("")
       
    } catch (error) {
        console.log(error.message);
        
    }
}
export default Contactf;