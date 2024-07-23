import react from 'react'
import '/home/ukijaffna/Documents/blog/src/App.css'
import logo1 from "/home/ukijaffna/Documents/blog/src/js logo.jpg"

const Posts=()=>{
    return(
        <div>
            <main>
            <h2>javascript</h2>
            <img src={logo1} alt="myphoto" style={{height:"150px",width:"500px"}}/>
            <p>This setup provides a basic structure for your blog application using React, with each component handling specific responsibilities such as navigation, posts list, and individual post content. Styling is also integrated using CSS to enhance the visual presentation of the components. Adjust and expand upon these components based on your specific requirements and design preferences.
            </p>
            <button>readmore</button>
            </main>
        </div>
    )
}

export default Posts;