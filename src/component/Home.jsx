import '../style/style.css'
function Home({blog}) {
    
    return ( 
        <div className="home">
            {
                blog.map((singleBlog)=>(
                    <div key={singleBlog.id} className="blogs-hanlder">
                        <h3 className="blog-auther">{singleBlog.auther}</h3>
                        <span className="blog-content">{singleBlog.blog}</span>
                    </div>
                ))
            }
        </div>
     );
}

export default Home;