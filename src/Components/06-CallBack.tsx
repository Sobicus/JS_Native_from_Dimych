import React, {ChangeEvent, MouseEventHandler} from 'react';

export const User = () => {
const deleteUser: MouseEventHandler<HTMLButtonElement> = (e) =>{
    console.log(e.currentTarget.name)
}
const deleteUser1 = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.currentTarget.name)
}

const onAgeChanged = (e:ChangeEvent<HTMLInputElement>) =>{
    console.log('age changed ' + e.currentTarget.value)
}
const saveUser = () =>{
    alert('user have been saved')
    }
const onNameChanged = () =>{
    console.log("name changed")
}
const focusLostHandler = () => {
    console.log("focus lost")
}
    return (
        <div>
            <textarea
                onChange={onNameChanged}
            onBlur={focusLostHandler}>
                 Dimych
            </textarea>
            <input onChange={onAgeChanged} type={'number'}/>

            <button name="delete" onClick={deleteUser}>delete</button>
            <button name="delete" onClick={deleteUser1}>delete</button>
            <button name="secondDelete" onClick={deleteUser}>secondDelete</button>
            <button onClick={saveUser}>save</button>
        </div>
    );
};

