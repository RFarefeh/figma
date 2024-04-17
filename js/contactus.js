const contact= async()=>{
    try {
       let data=await fetch("http://localhost:3000/contact")
      let res =await data.json()
      document.querySelector(".contact").innerHTML=`<a href="./contactus.html">
      <button>contact us</button>
    </a>`
    } catch (error) {
        console.log(error.message);
        
    }
}
export default contact;