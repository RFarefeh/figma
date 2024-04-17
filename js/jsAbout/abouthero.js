const AboutHero = async () => {
  try {
    let data=await fetch("http://localhost:3000/abouthero")
    let res=await data.json()
    let abouthero=res.map((elem)=>{
        return ` 
        <div class="ttxt1">
            <h6>${elem.hOne}</h6>
            <h2>${elem.hTwo}</h2>
            <p>
            ${elem.p}
            </p>
          </div>
          <div>
            <img
                src="${elem.image}"
                alt=""
            />
        </div>`
      })
      document.querySelector(".about").innerHTML = abouthero.join(" ")
    } catch (error) {
      console.log(error.messenge);
    }
  }
  
  export default AboutHero;