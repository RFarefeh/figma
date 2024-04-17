const Footer= async()=>{
    try {
       let data=await fetch("http://localhost:3000/footer")
      let res =await data.json()
      let footer=res.map((elem )=>{
        return `<div class="copy">
                <p>${elem.p1}</p>
                </div>
                <div class="b">
                  <a href="#">
                  ${elem.p2}
                  </a>
                </div>`
        })
       
                document.querySelector(".footer").innerHTML=footer.join("")
                
             } catch (error) {
                 console.log(error.message);
                 
             }
         }
         export default Footer;