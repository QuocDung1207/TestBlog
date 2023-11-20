import React, { useEffect, useState } from "react";

import { CreateComment, getComment,  } from "./helper/FetchData";
import { Input } from "reactstrap";
export const AddComment =({blogId})=>{
    const [showComments, setShowComments] = useState(false);
    const [comments,setComments] = useState('')
    const [inputValue,setInputValue] = useState('')
    const handleButtonClick = async () => {
        try {
          setShowComments(!showComments);
        } catch (error) {
          console.error('Error fetching comments:', error.message);
        }
      };
      useEffect(()=>{
        getComment(blogId).then((res)=>{
                setComments(res.data)
            })
      },[blogId])
     const handleAddComment = () => {
        CreateComment({blogId:blogId,content:inputValue}).then(res=>{
            setComments(res.data,...comments)
        })
     }
    
    return(
        <div>
      <button onClick={handleButtonClick}>
        {showComments ? 'Hide Comments' : 'Add Comments'}
      </button>
      {showComments && (
        <Input 
            type="text"
            placeholder="Comment..."
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            />
      )}
      <button onClick={handleAddComment}>send</button>
    </div>
    )
}
export default AddComment;