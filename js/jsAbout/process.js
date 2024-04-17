const Process= async()=>{
       
  try {
      let data=await fetch("http://localhost:3000/process")
      let res=await data.json()
      let process=res.map((elem)=>{
        return `
   
          <h1>${elem.h1}</h1>
      
        <div class="cardspro">
          <div class="cardpro">
            <div class="s"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="12" fill="#2405F2"/>
              </svg>
              <hr class="dotted">
            </div>
            <h3>${elem.name}</h3>
            <p>${elem.p}</p>
          </div>
          <div class="cardpro">
            <div class="s"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="12" fill="#2405F2"/>
              </svg>
              <hr class="dotted">
            </div>
            <h3>${elem.name2}</h3>
            <p>${elem.p}</p>
          </div>
          <div class="cardpro">
            <div class="s"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="12" fill="#2405F2"/>
              </svg>
              <hr class="dotted">
            </div>
            <h3>${elem.name3}</h3>
            <p>${elem.p}</p>
          </div>
          <div class="cardpro">
            <div class="s"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="12" fill="#2405F2"/>
              </svg>
              <hr class="dotted">
            </div>
            <h3>${elem.name4}</h3>
            <p>${elem.p}</p>
          </div>
          

        </div>

        `
      })
      document.querySelector(".process").innerHTML = process.join(" ")
    } catch (error) {
      console.log(error.messenge);
    }
  }
  export default Process;
  