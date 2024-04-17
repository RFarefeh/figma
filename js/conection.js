const Conction= async()=>{
    try {
       let data=await fetch("http://localhost:3000/conction")
      let res =await data.json()
      document.querySelector(".box").innerHTML=`
        <div class="left">
        <h3>Email me at</h3>
        <p>${res.email}</p>
        </div>
        <div class="right">
        <h3>Call us</h3>
        <p>${res.call}</p>
        </div>`
    } catch (error) {
        console.log(error.message);
        
    }
}
export default Conction; 