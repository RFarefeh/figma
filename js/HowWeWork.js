const HowWeWork = async () => {
    try {
      let data = await fetch("http://localhost:3000/how_we_work")
      let res = await data.json()
      let howwework=res.map((elem)=>{
        return `
            <div class="card">
                <div class="content">
                  <img src="${elem.img01}"/>
                  <div class="txt3">
                    <h2>${elem.name01}</h2>
                    <p>${elem.txt}</p>
                  </div>
                </div>
                <div class="content">
                  <img src="${elem.img02}" />
                  <div class="txt3">
                    <h2>${elem.name02}</h2>
                    <p>${elem.txt}</p>
                  </div>
                </div>
            </div>
            <div class="card">
                <div class="content">
                  <img src="${elem.img03}"/>
                  <div class="txt3">
                    <h2>${elem.name03}</h2>
                    <p>${elem.txt}</p>
                    </div>
                </div>
                <div class="content">
                  <img src="${elem.img04}" />
                  <div class="txt3">
                    <h2>${elem.name04}</h2>
                    <p>${elem.txt}</p>
                  </div>
                </div>

              </div>  `
      })
      document.querySelector(" .cards  ").innerHTML =
      howwework.join("")
  } catch {
    console.log(error.massege);
  }
}

export default HowWeWork;