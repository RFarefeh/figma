const FooterLight= async()=>{
    try {
       let data=await fetch("http://localhost:3000/light")
      let res =await data.json()
      let light=res.map((elem )=>{
        return `
        <div>
          <h3>${elem.h3}</h3>
          <p>
          ${elem.p1}
          </p>
        </div>
        <div>
          <a href="#">
          <img src="${elem.img1}" alt="Facbook">
          </a>
          <a href="#">
          <img src="${elem.img2}" alt="Twiter">
          </a>
          <a href="#">
          <img src="${elem.img3}" alt="Instagram">
          </a>
          <a href="#">
          <img src="${elem.img4}" alt="Linkedin">
          </a>
        </div>`
        })
       
                document.querySelector(".light").innerHTML=light.join("")
                
             } catch (error) {
                 console.log(error.message);
                 
             }
         }
         export default FooterLight;
         
         