const TopMenu= async()=>{
    try {
       let data=await fetch("http://localhost:3000/menutop")
       let res=await data.json()
       const topMenu=res.map((elem)=>{
          return `<li> <a href="${elem.link} ">${elem.name}</a></li>`
       }) 
       document.querySelector(".right nav ul").innerHTML=topMenu.join("")
        
    } catch (error) {
        console.log(error.message);
        
    }
}
export default TopMenu;