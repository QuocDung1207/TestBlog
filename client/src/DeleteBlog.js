export const DeleteBlogCp = ({post , onDelete})=>{
    const handleDelete = () =>{
        onDelete(post.id)
    }
    return(
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}