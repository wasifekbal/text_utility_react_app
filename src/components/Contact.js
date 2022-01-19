import React from 'react'

export default function Contact(props) {
    return (
        <div className={`container d-flex justify-content-center mt-5 ${props.mode==="dark"?"text-white border":"border border-dark"}`}>
           <h1>This is contact us page!!</h1>
        </div>
    )
}
