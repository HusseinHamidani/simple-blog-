import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../style/style.css'
function Create() {
    const [auther , setAuther ] = useState("")
    const [blog , setBlog ] = useState("")
    const history = useNavigate()
    const handleSubmit =(e)=>
    {
        e.preventDefault();
        setAuther('')
        setBlog("")
        const createBlog ={
            auther,
            blog
        }
        fetch("http://localhost:8000/blog" ,{
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(createBlog)
        }).then(()=>{
            console.log('newblog add');
        })

        history('/')
    }
    return ( 
        <div className="create-blog">
            <form className="form" action="" method="post">
                <h2>create blog</h2>
                <div className="input-div-form">
                <input value={auther} onChange={(e)=> setAuther(e.target.value)} 
                required type="text" placeholder="auther"/>

                <textarea
                    value={blog}
                    onChange={(e)=> setBlog(e.target.value)}
                    required 
                    placeholder="content"
                    cols="10" rows="10">

                   </textarea>

                </div>
                <div className="submit-form">
                    <input onClick={(e)=>{
                        handleSubmit(e)
                    }} type="button" value="create" />
                </div>
            </form>
        </div>
     );
}

export default Create;