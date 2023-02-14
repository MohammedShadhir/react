import React, {useState} from 'react'
import Cart from '../Cart/Cart'
import CreateBlog from '../CreateBlog/CreateBlog'
import Header from '../Header/Header'
import '../Wrapper/Wrapper.css'
import '../Header/mode.css'

function Wrapper() {
    const [isShow, setIsShow] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedItem, setSelectedItem] = useState();
    const [search, setSerach] = useState("");


    const [CartItem, setCartItem] = useState([
        {
            content: "Travel",
            auther: "Charlotte",
            pra: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, maiores consequatur commodi eius non fugit blanditiis ex, tempore laborum voluptates ad. Fugiat, perferendis mollitia exercitationem a recusandae in at eius? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, maiores consequatur commodi eius non fugit blanditiis ex, tempore laborum voluptates ad. Fugiat, perferendis mollitia exercitationem a recusandae in at eius?"
        }, {
            content: "Food",
            auther: "Grace",
            pra: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, maiores consequatur commodi eius non fugit blanditiis ex, tempore laborum voluptates ad. Fugiat, perferendis mollitia exercitationem a recusandae in at eius? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, maiores consequatur commodi eius non fugit blanditiis ex, tempore laborum voluptates ad. Fugiat, perferendis mollitia exercitationem a recusandae in at eius? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, maiores consequatur commodi eius non fugit blanditiis ex, tempore laborum voluptates ad. Fugiat, perferendis mollitia exercitationem a recusandae in at eius?"
        }, {
            content: "Beauty",
            auther: "jhon",
            pra: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, maiores consequatur commodi eius non fugit blanditiis ex, tempore laborum vol Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, maiores consequatur commodi eius non fugit blanditiis ex, tempore laborum voluptates ad. Fugiat, perferendis mollitia exercitationem a recusandae in at eius? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, maiores consequatur commodi eius non fugit blanditiis ex, tempore laborum voluptates ad. Fugiat, perferendis mollitia exercitationem a recusandae in at eius?uptates ad. Fugiat, perferendis mollitia exercitationem a recusandae in at eius?"
        }, {
            content: "lifestyle",
            auther: "smith",
            pra: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, maiores consequatur commodi eius non fugit blanditiis ex, tempore laborum vol Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, maiores consequatur commodi eius non fugit blanditiis ex, tempore laborum voluptates ad. Fugiat, perferendis mollitia exercitationem a recusandae in at eius? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, maiores consequatur commodi eius non fugit blanditiis ex, tempore laborum voluptates ad. Fugiat, perferendis mollitia exercitationem a recusandae in at eius?uptates ad. Fugiat, perferendis mollitia exercitationem a recusandae in at eius?"
        }


    ]);


    const Onclick = (e) => {
        setIsShow(current => !current);


    }
    const OnEdit = (content, auther, pra) => {

        const EditedItem = {
            content: content,
            auther: auther,
            pra: pra
        }
        const temp = CartItem
        temp[selectedItem] = EditedItem
        setCartItem(temp);
        setIsEdit(!isEdit)
    }


    const Ondelete = (Index) => {
        const item = CartItem.filter((x, i, m) => {

            return i !== Index

        })
        setCartItem(item)
        console.log(Index)


    }
    const OnSearch = (e) => {
        setSerach(e.target.value);

    }

    return (<div className='Wrapper'>
        <div className='Wrapper_Header'>
            <Header data={Onclick}
                OnSearch={OnSearch}/>
        </div>
        <div className='CreateBlog'> {
            isShow ? <CreateBlog setCartItem={setCartItem}
                setIsShow={
                    () => {
                        setIsShow(!isShow)
                    }
                }
                CartItem={CartItem}/> : isEdit ? <CreateBlog OnEdit={OnEdit}
                CartItem={CartItem}
                selectedItem={
                    CartItem[selectedItem]
                }/> : <></>
        }</div>

        <div className='Wrapper_Cart'> {

            CartItem.filter(x => {
                return x.content.includes(search)
            }).map((item, i) => <Cart key={i}
                {...item}
                Index={i}
                OnDelete={Ondelete}
                OnEdit={
                    () => {
                        setIsEdit(true);
                        setSelectedItem(i);
                    }
                }/>)
        } </div>
        <div className={`Footer `}></div>


    </div>)

}

export default Wrapper
