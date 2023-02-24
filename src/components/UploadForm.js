import './UploadForm.css'
import { useState } from 'react'
import Header from './Header'

function UploadForm() {

    let [username, setUserName] = useState('')
    let [location, setLocation] = useState('')
    let [image, setImage] = useState('')
    let [description, setDescription] = useState('')

    function postImage(event) {
        event.preventDefault()

        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        let date = new Date()
        let postObject = {
            "username": username,
            "location": location,
            "date": `${date.getDate()} ${monthNames[date.getMonth()]}`,
            "description": description,
            "fileData": image,
            "likes": 0
        }

        fetch('https://insta-clone-sayo-back-end.onrender.com/upload', {
            method: 'POST',
            body: JSON.stringify(postObject),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })

    }

    function convertImage(event) {
        let file = event.target.files[0]
        let reader = new FileReader()
        reader.onloadend = function () {
            setImage(reader.result)
        }
        reader.readAsDataURL(file)
    }


    return <>
        <Header />
        <form className="upload-form">
            <div className="upload-form-row">
                <input type='file' onChange={(e) => convertImage(e)} />
            </div>
            <div className="upload-form-row">
                <div className="upload-form-col">
                    <input type='text' placeholder="Author" onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="upload-form-col">
                    <input type='text' placeholder="location" onChange={(e) => setLocation(e.target.value)} />
                </div>
            </div>
            <div className="upload-form-row">
                <input type='text' placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <button type='submit' onClick={postImage}>Post</button>
            </div>
        </form >
    </>


}

export default UploadForm