import React, { useState, useEffect } from 'react'
import "./style.css"

const getLocalData = () => {
    const lists = localStorage.getItem("myTodoList");
    if (lists) {
        return JSON.parse(lists);
    } else {
        return [];
    }
}
let double = ["kal"]

const Todo = () => {
    const [inputdata, setInputData] = useState("")
    const [items, setItems] = useState(getLocalData())
    // const [double,setDouble] = useState([])
    
    const addItem = () => {
        if (!inputdata) {
            alert("Please input Something")
        }
        else {
            let a = inputdata.toLowerCase()
            console.log(a)
            let user = double.includes(a)
            // let user = a.includes('${double}')
            console.log(user)
            if(!user)
            {
                console.log(items[0])
                const myNewInputData = {
                    id: new Date().getTime().toString(),
                    name: inputdata
                }
                setItems([...items, myNewInputData])
                setInputData("")
                let x = inputdata.toLowerCase()
                double.push(x)
                console.log(double)
            }
            else{
                alert("Task is Already Added")
                setInputData("")
            }
        }
    }
    //kngkjnkj
    // console.log(double)
   
    // console.log(items.name)
    // items.map((curElem)=>{
    //     return curElem.name.t
    // const user = 
                // items.map((curElem)=>{
                //         let a = Object.fromEntries(curElem)
                //         console.log(a)
                // })
            // }
            // if (user) {
    // })
    // Delete Items
    const deleteItem = (id) => {
        const updatedItems = items.filter((curElem) => {
            return curElem.id !== id
        })
        setItems(updatedItems)
    }

    // Adding localStorage
    useEffect(() => {
        localStorage.setItem("myTodoList", JSON.stringify(items))
    }, [items])
    return (
        <>
            <div className='main-container'>
                <div className='container'>
                    <h3 className='d-flex justify-content-center mt-5 mb-2'>Anand's Todo Application</h3>
                    <div className='main-class d-flex jflex-start  my-5 border-dark'>
                        <input placeholder='Enter Task' className='px-2 w-50' value={inputdata} onChange={(event) => { setInputData(event.target.value) }} />
                        {/* <div> */}
                        <i className="fa-solid fa-plus mx-2 my-2 cp" onClick={addItem}></i>
                        {/* </div> */}
                    </div>
                    <h5 className='d-flex flex-start  mt-5 mb-2'>My Task</h5>
                    <h3 className='border border-dark my-3'></h3>
                    <div className='showItem'>
                        {items.map((curElem) => {
                            return (
                                <div className='main-class d-flex flex-start my-2 border-dark w-100' key={curElem.id}>
                                    <div className='h-25 w-50 border border-dark p-1'>{curElem.name}</div>
                                    <div>
                                        <i className="fa-solid fa-trash mx-2 my-2 cp" onClick={() => {
                                            deleteItem(curElem.id)
                                        }}></i>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className=' d-flex  '>
                        <button className='btn btn-success d-flex my-2 rounded' onClick={() => { return setItems([]) }}> ClearList</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo 