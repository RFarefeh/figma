const Team= async()=>{
       
    try {
        let data=await fetch("http://localhost:3000/team")
        let res=await data.json()
        let team=res.map((elem)=>{
            
            return  `
            <div class="meet">
            <h2>${elem.hh1}</h2>
            </div>
            <div class="team">
          
                <div class="teamcard">
                <img src="${elem.image11}">
                <h6>${elem.h1}</h6>
                <p>${elem.p1}</p>
                </div>
                <div class="teamcard">
                <img src="${elem.image12}">
                <h6>${elem.h2}</h6>
                <p>${elem.p2}</p>
                </div>
                <div class="teamcard">
                <img src="${elem.image13}">
                <h6>${elem.h3}</h6>
                <p>${elem.p3}</p>
                </div>
                <div class="teamcard">
                <img src="${elem.image14}">
                <h6>${elem.h4}</h6>
                <p>${elem.p4}</p>
                </div>
            
            </div>`
            
        })
       
       document.querySelector(".ourteam").innerHTML=team.join("")
       
    } catch (error) {
        console.log(error.message);
        
    }
}
export default Team;