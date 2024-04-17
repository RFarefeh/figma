const OurProject = async () => {
    try {
      let data = await fetch("http://localhost:3000/ourwork02")
      let res = await data.json()
      let ourwork=res.map((elem)=>{
        return `
        <div class="container">
        <img src="${elem.image}" />
        <div class="overlay">
          <div class="text2">
            <h2>${elem.title}</h2>
            <p>
             ${elem.name}
            </p>
            <a href="#"
              >${elem.button}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="12"
                viewBox="0 0 25 12"
                fill="none"
              >
                <path
                  d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                  fill="#FCD980"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="card1">
      <div class="container2">
      <img src="${elem.image}" />
      <div class="overlay">
        <div class="text3">
          <h2>${elem.name}</h2>
    
          <a href="#"
            >${elem.button}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="12"
              viewBox="0 0 25 12"
              fill="none"
            >
              <path
                d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                fill="#FCD980"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <img src="${elem.image}" />
    </div>
    </div>

 
              
        `
      })
      document.querySelector(".card ").innerHTML = ourwork.join(" ")
    } catch {
      console.log(error.massege);
    }
  }
  
  export default OurProject;
  