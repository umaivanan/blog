import React from "react";
import picture from "/home/ukijaffna/Documents/blog/src/download.jpeg"
const Posts1=()=>{
    return(
        <div>
            <main>
            <h2>Datestructure</h2>
            <img src={picture} alt="ph" style={{height:"350px",width:"1200px"}}/>
            <p>This setup provides a basic structure for your blog application using React, with each component handling specific responsibilities such as navigation, posts list, and individual post content. Styling is also integrated using CSS to enhance the visual presentation of the components. Adjust and expand upon these components based on your specific requirements and design preferences.
            </p>
            <button>readmore</button>
            </main>
        </div>
    )
}
export default Posts1;