import React, {useEffect, useState} from 'react'


import '../CreateBlog/CreateBlog.css'


function CreateBlog(props) {
    const [content, setContent] = useState('');
    const [auther, setAuther] = useState('');
    const [pra, setPra] = useState('');
    useEffect(() => {
        if (props.selectedItem != null) {
            setContent(props.selectedItem.content)
            setAuther(props.selectedItem.auther)
            setPra(props.selectedItem.pra)
        }
    }, [props.selectedItem])


    const save = (e) => {
        e.preventDefault();


        const list = [
            ... props.CartItem, {
                content: content,
                auther: auther,
                pra: pra
            }
        ]
        props.setCartItem(list);


        setContent("");
        setAuther("");
        setPra("");
        props.setIsShow();


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
                        }/> {
                    props.selectedItem == null ? <button type="submit" id='btn'
                        onClick={save}>
                        SAVE</button> : <button type="submit" id='btn'
                        onClick={
                            () => {
                                props.OnEdit(content, auther, pra)
                            }
                    }>
                        Edit</button>
                } </form>


            </div>
        </div>
    )
}

export default CreateBlog
