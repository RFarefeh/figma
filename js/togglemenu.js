const ToggleMenu = async () => {
    try {
      let data = await fetch("http://localhost:3000/togglemenu")
      let res = await data.json()
      let result = res.togglemenu
      const togglemenu = result.map ( (elem) => {
        return `
        <div></div>
        <div></div>
        <div></div>`
       } )
        document.querySelector("div").innerHTML = togglemenu.join(" ")
    } 
    catch (error) {
      console.log(error.messege);
    }
}
export default ToggleMenu;