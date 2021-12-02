import React from 'react'
import { nanoid } from 'nanoid'
import DisplayPost from './DisplayPost'
const Post = () => {
    const [title, setTitle] = React.useState('')
    const [body, setBody] = React.useState('')
    const [post, setPost] = React.useState([])


    const handleAddPost = () => {
        const payload = {
            id: nanoid(4),
            title,
            body,
            verify: false
        }

        setPost([...post, payload])



    }

    const handleVerify = (id) => {
        console.log('id:', id)
        const updateStatus = post.map(e => {
            if (e.id === id) {
                e.verify = !e.verify
            }
            return e;
        })
        setPost(updateStatus)
    }


    return (
        <div className="container col-2">
            <div className="text-muted">Add Post</div>
            <input
                className="mt-5 form-control col-5"
                onChange={e => setTitle(e.target.value)}
                type="text"
                placeholder="Post Title" />

            <input
                className="my-4 form-control col-5"
                onChange={e => setBody(e.target.value)}
                type="text"
                placeholder="Post Body" />

            <button
                className="btn btn-success col-5 mb-5"
                onClick={() => {
                    handleAddPost();
                }}
            >ADD</button>
            <hr />
            <DisplayPost posts={post} handleVerify={handleVerify} />
        </div>
    )
}

export const MemoPost = React.memo(Post)
