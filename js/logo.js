const logo= async()=>{
    try {
       let data=await fetch("http://localhost:3000/logo")
        let res =await data.json()
        document.querySelector(".logo").innerHTML=` 
        <a href="./index.html#">
        <img src="./imgs/1.png" alt="logo">
        </a>`
    } catch (error) {
        console.log(error.message);
        
    }
}
export default logo;