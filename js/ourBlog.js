const OurBlog= async()=>{
       
  try {
      let data=await fetch("http://localhost:3000/blog")
      let res=await data.json()
      let ourblog=res.map((elem)=>{
          
          return  `
        <div class="txt">
        <p>Our blog</p>
      </div>
      <div class="blogcard">
        <div class="blogcard1">
          <img
            src="./imgs/arabic-businessman-standing-on-street-and-using-laptop-9623794.jpg"
            alt=""
          />
          <p>19 Jan 2022</p>
          <h4>
            ${elem.HOne}
          </h4>
          <h6>
            ${elem.HTwo}
          </h6>
          <a href="#"
            >${elem.readMore}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="12"
              viewBox="0 0 25 12"
              fill="none"
            >
              <path
                d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                fill="#282938"
              />
            </svg>
          </a>
        </div>
        <div class="blogcard1">
          <img
            src="./imgs/woman-in-white-sleeveless-shirt-using-macbook-air-on-brown-wooden-table-3766189.jpg"
            alt=""
          />
          <p>19 Jan 2022</p>
          <h4>
            How one Webflow user grew his single person consultancy from
            $0-100K in 14 months
          </h4>
          <h6>
            See how pivoting to Webflow changed one person’s sales strategy
            and allowed him to attract
          </h6>
          <a href="#"
            >Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="12"
              viewBox="0 0 25 12"
              fill="none"
            >
              <path
                d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                fill="#282938"
              />
            </svg>
          </a>
        </div>
        <div class="blogcard1">
          <img src="./imgs/apple-monitors-326518.jpg" alt="" />
          <p>19 Jan 2022</p>
          <h4>
            How one Webflow user grew his single person consultancy from
            $0-100K in 14 months
          </h4>
          <h6>
            See how pivoting to Webflow changed one person’s sales strategy
            and allowed him to attract
          </h6>
          <a href="#"
            >Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="12"
              viewBox="0 0 25 12"
              fill="none"
            >
              <path
                d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                fill="#282938"
              />
            </svg>
          </a>
        </div>
      </div>`
      })
      document.querySelector(".blog").innerHTML =
        ourblog.join(" ")
    } catch (error) {
      console.log(error.messenge);
    }
}
  
  export default OurBlog;
  