import React, { useEffect, useRef, useState } from 'react'

 const Comment =({comment,addreply,comments})=> {
    const [showReplly, setShowReplly] = useState(false);
    // const inputEl = useRef(null);
    const [replly, setReplly] = useState("");
    // useEffect(()=>{

    // })
  return (
    <li key={comment.id}>
      {comment.content}{"   "}
      {!showReplly && (
        <button
          type="button"
          className="ml-3 mr-3"
          onClick={() => {
            setShowReplly(true);
            // setTimeout(() => inputEl.current.focus());
          }}
        >
          reply
        </button>
      )}
      {showReplly && (
        <>
          <br />
          <textarea
          value={replly}
            // ref={inputEl}
            onChange={(e) => {
              setReplly(e.target.value);
            }}
            type="text"
          />
          <br />
          <button
            type="button"
            onClick={() => {
              addreply(comment.id,replly)
              setShowReplly(false);
              setReplly("");
            }}
          >
            save
          </button>
          <button
            type="button"
            onClick={() => {
              setShowReplly(false);
              setReplly("");
            }}
          >
            cancel
          </button>
        </>
      )}
      {/* <div>
      {<ul>
      {
        comments.map((commentRL)=> (
            <div>
                <li>
                    {commentRL.content}
                </li>
            </div>
                
            
        ))
      }
      </ul>}
      </div> */}
    </li>
  )
}

export default Comment

