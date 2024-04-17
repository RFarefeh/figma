const HowWe= async () => {
    try {
      let data = await fetch("http://localhost:3000/how_we")
      let res = await data.json()
      let howwe=res.map((elem)=>{
        return `
        <div class="more">${elem.title}</div>
              <div class="txt1">
                ${elem.pOne}
              </div>
              <div class="us">
                <a href="#">${elem.pTow}
                  <img src="${elem.img}">
                </a>
                
              </div>
        `
      })
      document.querySelector(" .heading  ").innerHTML =
      howwe.join("")
  } catch {
    console.log(error.massege);
  }
}

export default HowWe;