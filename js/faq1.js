const Faqq= async()=>{
       
    try {
        let data=await fetch("http://localhost:3000/faq1")
        let res=await data.json()
        let faq1=res.map((elem)=>{
            
            return  `
                <div class="faqheading">
                <h3>${elem.h1}</h3>
                <a href="#">${elem.p1}</a>
                 </div> `

    })
  
    document.querySelector(" .headingg").innerHTML =faq1.join("")
  } catch (error) {
    console.log(error.mesage);
  }
}
export default Faqq;



