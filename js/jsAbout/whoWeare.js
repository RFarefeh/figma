const WeR = async () => {
    try {
      let data=await fetch("http://localhost:3000/weare")
      let res=await data.json()
      let weare=res.map((elem)=>{
          return ` 
          <div class="ttop">
                        <div class="left">
                            <h6>${elem.hOne}</h6>
                            <h2>${elem.hTwo}</h2>
                            <p>${elem.p1}
                           </p>
                        </div>
                        <div class="right">
                            <h2>${elem.h2}</h2>
                            <p>
                            ${elem.p3}
                            </p>
                        </div>
                    </div>
          <div class="btop">
             <img src="./imgs/man-in-blue-jacket-looking-at-white-board-7413916.jpg" alt=""/>
          </div>
          `
        })
        document.querySelector(".weare").innerHTML = weare.join(" ")
      } catch (error) {
        console.log(error.messenge);
      }
    }
    
    export default WeR;
  