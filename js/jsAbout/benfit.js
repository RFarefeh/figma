const Benefit= async()=>{
    try {
       let data=await fetch("http://localhost:3000/benefit")
      let res =await data.json()
      document.querySelector(".benfit").innerHTML=`<h2>${res.title}</h2>`
    } catch (error) {
        console.log(error.message);
        
    }
}
export default Benefit; 










