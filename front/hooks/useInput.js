import {useState,useCallback} from 'react'


export default(initialValue = null)=>{ //커스텀 훅
    const[value,setValue]   = useState(initialValue);
    const handler = useCallback((e)=>{
        setValue(e.target.value);
    },[]);
    return [value, handler];
}
