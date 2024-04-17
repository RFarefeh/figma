const FooterDark= async()=>{
    try {
       let data=await fetch("http://localhost:3000/dark")
      let res =await data.json()
      let dark=res.map((elem )=>{
        return `
                <img src="${elem.img1}">
                <p>
                    ${elem.pp1}
                </p> `
                })
       
                document.querySelector(".f").innerHTML=dark.join("")
                
             } catch (error) {
                 console.log(error.message);
                 
             }
         }
         export default FooterDark;
         
         