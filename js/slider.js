const Slider = async () => {
    try {
      let data = await fetch("http://localhost:3000/slider")
      let res = await data.json()
      let slider=res.map((elem)=>{
        
        return `
              <div class="swiper-slide">
                <p>${elem.comments}</p>
                    <div class="id">
                      <img
                        src="${elem.image}"
                        alt=""
                      />
                      <div class="text">
                        <p class="one">${elem.p01}</p>
                        <p class="two">${elem.p02}</p>
                      </div>
                    </div>
              </div>`
      })
      document.querySelector(" .swiper-wrapper").innerHTML = slider.join("")
    } catch (error) {
      console.log(error.message);
    }
  }
  export default Slider;
