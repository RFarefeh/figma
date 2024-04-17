const bHero= async()=>{
       
    try {
        let data=await fetch("http://localhost:3000/bhero")
        let res=await data.json()
        let bHero=res.map((elem)=>{
            
            return  `
            <div class="text">
                <div class="textBold">
                ${elem.textBold}
                </div>
                <div class="textHeading">
                ${elem.textHeading}
                </div>
                <div class="btn">
                <button >${elem.btn}</button>
                <a href="#"> ${elem.pArrow}</a>
                <a href="#">
                <img src="${elem.img_view}"alt=${elem.img_view_alt}">
                </a>
                </div>
          
            </div>
            <div class="illustration">
                <img src="${elem.img_ill}",alt="${elem.img_ill_alt}">
            </div> `
            
        })
       
       document.querySelector(".bHero").innerHTML=bHero.join("")
       
    } catch (error) {
        console.log(error.message);
        
    }
}
export default bHero;
