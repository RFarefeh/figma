const Faq = async () => {
    try {
      let data = await fetch("http://localhost:3000/faq")
      let res = await data.json()
      let faq=res.map((elem)=>{
        return `
       
              <div class="qustions">
                <div>
                  <label for="show${elem.tag}" class="o">
                    <div class="ask">
                      <p class="number">${elem.number}</p>
                      <p>${elem.title}</p>
                    </div>
                  </label>
                  <input type="radio" id="show${elem.taq}" name="modal1" />
                  <input type="radio" id="close${elem.taq}" name="modal1" />
                  <label for="show${elem.taq}" class="s">
                    <i class="fa-regular fa-plus"></i>
                  </label>
                  <label for="close${elem.taq}" class="c">
                    <i class="fa-light fa-xmark"></i>
                  </label>
                  <div class="i">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
                <hr />`
      })
  
      document.querySelector(".faqheader").innerHTML =
        faq.join("")
    } catch (error) {
      console.log(error.mesage);
    }
  }
  export default Faq;
