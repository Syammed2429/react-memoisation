import React from 'react'

//Generating random numbers
let random = () => {
    return Math.floor(Math.random() * 100);
}

//Generatin random colors
let randomColors = () => {
    return 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
}

const DisplayPost = ({ posts, handleVerify }) => {

    let randomColor = React.useMemo(() => randomColors(), [])


    return (
        <div>
            <h3 className="text-info">Your Post's</h3>
            {posts.map((e) => (
                <div
                    className="border border-danger my-3 h3"
                    key={e.id}>
                    <div className="my-2">Title : {e.title}</div>
                    <div>Body : {e.body}</div>
                    <div className="my-3">{e.verify ? "Verified" : "Not Verified"}</div>
                    <div style={{ backgroundColor: randomColor, height: '50px', width: '50px', border: '1px solid red', margin: 'auto' }}></div>
                    <button
                        className="my-3 btn btn-primary"
                        onClick={() => {
                            handleVerify(e.id)
                        }}
                    >Verify</button>

                </div>
            ))}

        </div>
    )
}

export default DisplayPost
