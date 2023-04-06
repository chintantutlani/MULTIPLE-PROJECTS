import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from '../actions/index'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



function Todo() {

    const [input, setInput] = useState('')

    const list = useSelector((state) => state.todoReducers.list);

    const dispatch = useDispatch();


    const handlechange = (event) => {
        setInput(event.target.value)
    }

    const handelclick = () => {
        dispatch(addTodo(input), setInput(''));
    }






    return (
        <>
            <div className="main-div">
                <div className="chlid-div">
                    <figure>
                        <figcaption>
                            add your list
                        </figcaption>
                    </figure>

            



                    <form  noValidate autoComplete="off">
     
     <TextField
           id="standard-full-width"
           label="Please Enter  Title"
           style={{ margin: 8 }}
           placeholder="Title"
           value={input}
 
           onChange={handlechange}
           name="title"
           fullWidth
           margin="normal"
           InputLabelProps={{
             shrink: true,
           }}
         />
              <Button variant="contained" color="primary"   onClick={handelclick}>
       Add Item
      </Button>
    </form>          


                        




                    

                    {
                        list.map((elem) => {
                            return (

                                <div key={elem.id}>
                                    <h3>{elem.data}</h3>
                                    <div>


                                        <Button onClick={() => dispatch(deleteTodo(elem.id))}>delete todo</Button>
                                    </div>
                                </div>
                            )






                        })
                    }
                </div>
                <Button onClick={() => dispatch(removeTodo())} > remove all </Button>
            </div>

        </>
    )
}

export default Todo
