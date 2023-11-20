import React, {  useEffect, useState } from "react";

import { CreateComment, DeleteComment, RepllyComment, getAllCmts, getBlog, getComment } from "./helper/FetchData";
import Comment from "./Comment";


export const CommentList = ({ blogId }) => {
  // const [showReplly, setShowReplly] = useState(false);
  const [comments, setComments] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [replyCmt,setReplyCmt] = useState([])
console.log(blogId);
  useEffect(() => {
    getComment(blogId).then((res) => {
      // setComments(res.data.comments);
      console.log(res.data);
    });
  }, [blogId]);
  const handleAddComment = () => {
    CreateComment({ blogId: blogId, content: inputValue, img: null }).then(
      (res) => {
        setComments([res.data, ...comments]);
        setInputValue("");
      }
    );
  };
  useEffect(()=>{
    getAllCmts().then(res=>{
      console.log(res.data);
      setReplyCmt(res.data);
    })
  },[])
  
  const addreply = (commentId,text) =>{
    console.log("abc",commentId,text);
    console.log(text);
    RepllyComment({ content: text,commentId:commentId}).then(
      (res) => {
        console.log("ew",res);
        setReplyCmt([res.data, ...replyCmt]);
        setInputValue("");
      }
    );
  }
  console.log(replyCmt);
  const handledelete = (e) => {
    const id = e.target.value;
    DeleteComment(id).then((res) => {
      if (res.data === 1) {
        const updatecomment = comments.filter((comment) => comment.id !== +id);
        setComments(updatecomment);
      }
    });
  };

  return (
    <div>
      <div>
        <input
        type="text"
        placeholder="Comment..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddComment}>send</button></div>
      
      <ul>
        {comments.map((comment) => (
        <div key={comment.id}>
            <Comment key={comment.id} comment={comment} addreply ={addreply} comments={replyCmt} />
          <button value={comment.id} onClick={handledelete}>
            delete
          </button>
        </div>
      ))}
      </ul>
      
      
    </div>
  );
};
export default CommentList;
