import React, { useState } from 'react';



const AddTodo = (props) => {
    const [newtodo, setnewtodo] = useState('');

    
   

    const addNew = (e) => {
        
        setnewtodo(e.target.value);
        
    }

    const onSubmit = (e) => {

       e.preventDefault();
       if(newtodo !== ''){
        props.addItem(newtodo);
        setnewtodo('');
        }

       else{
      
         inputStyle = {
            border:'1px solid red'
        }

       }
      

    }


    let inputStyle = {
        border:'none'
    } 
    
    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <input type="text" placeholder='Add new Todo' onChange={addNew} style={inputStyle} value={newtodo}/>
                <input type="submit" value='Add'/>
            </form>
        </div>
    );
};

export default AddTodo;