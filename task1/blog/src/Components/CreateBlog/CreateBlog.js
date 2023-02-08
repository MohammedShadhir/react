import React, {useState} from 'react'
import '../CreateBlog/CreateBlog.css'

function CreateBlog() {
    const [content, setContent] = useState([]);
    const [auther, setAuther] = useState([]);
    const [pra, setPra] = useState([])


    const save = e => {
        e.preventDefault();
        // const blog = [content, auther, pra];


        setContent("");
        setAuther("")
        setPra("")


    }


    return (
        <div className='main'>
            <div className='CreateBlog_Main'>
                <h1>
                    CREATE BLOG LIST
                </h1>

                <form action="">
                    <input type="text" id='Content' placeholder='Content Name'
                        value={content}
                        onChange={
                            (e) => {
                                setContent(e.target.value)
                            }
                        }/>
                    <input type="text" id='Auther' placeholder='Auther Name'
                        value={auther}
                        onChange={
                            (e) => {
                                setAuther(e.target.value)
                            }
                        }/>
                    <textarea rows={10}
                        placeholder='Type enything'
                        value={pra}
                        onChange={
                            (e) => {
                                setPra(e.target.value)
                            }
                        }/>

                    <button type="submit" id='btn'
                        onClick={save}>
                        SAVE</button>

                </form>
            </div>
        </div>
    )
}

export default CreateBlog
