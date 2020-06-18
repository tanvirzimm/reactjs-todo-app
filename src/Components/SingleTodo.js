import React from 'react';

const SingleTodo = (props) => {

    const {title,id,completed} = props.todo;

  
        const itemStyle = {
            textDecoration : completed ? 'line-through': 'none'
        }


    return (
        <div>
            <div className='item' style={itemStyle}><input type="checkbox" onChange={()=>props.completedTask(id)}/> {title} <span onClick={()=> props.del(id)}>x</span></div>
        </div>
    );
};

export default SingleTodo;