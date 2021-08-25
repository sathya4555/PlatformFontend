import React, { useState, useEffect } from 'react'
import { Typography, Button, Form, message, Input } from 'antd';
import Dropzone from 'react-dropzone';
import ReactPlayer from 'react-player';
import { useSelector } from "react-redux";
import axios from 'axios';
import "./UploadPage.css"

// import akshu from'../img/';


const api = axios.create({
    baseURL: `http://localhost:3000`
})
function UploadPage() {


    //const user = useSelector(state => state.user);

    const [title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [privacy, setPrivacy] = useState(0)
    const [Categories, setCategories] = useState("Film & Animation")
    const [FilePath, setFilePath] = useState("")
    const [Duration, setDuration] = useState("")
    const [Thumbnail, setThumbnail] = useState("")

    const Private = [
        { value: 0, label: 'Private' },
        { value: 1, label: 'Public' }
    ]

    const Catogory = [
        { value: 0, label: "Film & Animation" },
        { value: 0, label: "Autos & Vehicles" },
        { value: 0, label: "Music" },
        { value: 0, label: "Pets & Animals" },
        { value: 0, label: "Sports" },
    ]

    const handleChangeTitle = (event: any) => {
        setTitle(event.currentTarget.value)
    }

    const handleChangeDecsription = (event: any) => {
        console.log(event.currentTarget.value)

        setDescription(event.currentTarget.value)
    }

    const handleChangeOne = (event: any) => {
        setPrivacy(event.currentTarget.value)
    }

    const handleChangeTwo = (event: any) => {
        setCategories(event.currentTarget.value)
    }
    const [setimage, setsetimage] = useState("")


    const onSubmit = () => {

        // event.preventDefault();

        // if (user.userData && !user.userData.isAuth) {
        //     return alert('Please Log in First')
        // }

        // if (title === "" || Description === "" ||
        //     Categories === "" || FilePath === "" ||
        //     Duration === "" || Thumbnail === "") {
        //     return alert('Please first fill all the fields')
        // }
        // const variables = {
        //     writer: user.userData._id,
        //     title: title,
        //     description: Description,
        //     privacy: privacy,
        //     filePath: FilePath,
        //     category: Categories,
        //     duration: Duration,
        //     thumbnail: Thumbnail
        // }

        // axios.post('/api/video/uploadVideo', variables)
        //     .then(response => {
        //         if (response.data.success) {
        //             alert('video Uploaded Successfully')
        //             props.history.push('/')
        //         } else {
        //             alert('Failed to upload video')
        //         }
        //     })

    }

    const onDrop = (files: any) => {

        let formData = new FormData();
        formData.append("myfile", files[0])
        const config: any = {
            header: { 'content-type': 'multipart/form-data', }
        }
        console.log(files)


        api.post('component/upload', formData, config)
            .then(response => {
                if (response.data.success) {

                    let variable = {
                        filePath: response.data.filePath,
                        fileName: response.data.fileName
                    }
                    setFilePath(response.data.filePath)

                    //gerenate thumbnail with this filepath ! 

                    // axios.post('/api/video/thumbnail', variable)
                    //     .then(response => {
                    //         if (response.data.success) {
                    //             setDuration(response.data.fileDuration)
                    //             setThumbnail(response.data.thumbsFilePath)
                    //         } else {
                    //             alert('Failed to make the thumbnails');
                    //         }
                    //     })


                } else {
                    alert('Video saved')
                }
            })
        http://localhost:3000/component/read-image?filename=20180622_114315.jpg
        api.get('component/read-image?filename=FB_IMG_1476807937078.jpg')
            .then(response => {
                console.log("success");
                console.log(response.headers);
                // console.log(response.data);
                console.log(response.status);
                const url = 'http://localhost:3000/component/read-image?filename=20170128_220459.mp4'
                setsetimage(url)

            })
            

    }
const [watchEnd, setwatchEnd] = useState(false)

    const [watchcomplete, setwatchcomplete] = useState(false)
    const handleWatchComplete = (state: any) =>{
        if(!watchcomplete){
            setwatchcomplete(true)

        }
        api.get(`http://localhost:3000/component/played?time=${state.played}&name=1`)
        console.log(state.played);
        
    }


    const { Title } = Typography;
    const { TextArea } = Input;
   

    const deleteData = () =>{
        const filename="IMG_2768"
        api.get(`http://localhost:3000/component/delete-image?filename=${filename}.jpg`)
    }
  
    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>

                <Title level={2} > Upload Video</Title>
            </div>
            <img src={setimage} />
            <ReactPlayer light={true} controls playing url="http://localhost:3000/component/read-image?filename=1234.mp4"
onSeek={e => console.log('onSeek', e)}
                onProgress={handleWatchComplete}
                onEnded={()=>setwatchEnd(true)
                 
                }
               
            />
 
            <div>
                <input type="button" onClick={deleteData} value='delete'/>
            </div>
            <div className={watchcomplete? "complete": " notcomplete"}>
            {watchcomplete? (watchEnd? "Completed": "some left"): "Not Comeplete"}
            </div>
            {/* <img src="/img/akshu~01.png"/>  */}


            <Form >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Dropzone
                        onDrop={onDrop}
                        multiple={false}
                        maxSize={800000000}>
                        {({ getRootProps, getInputProps }) => (
                            <div style={{ width: '700px', height: '240px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                {...getRootProps()}
                            >
                                <input {...getInputProps()} />
                                {/* <Icon type="plus" style={{ fontSize: '3rem' }} /> */}

                            </div>
                        )}
                    </Dropzone>

                    {/* {Thumbnail !== "" &&
                    <div>
                        <img src={`http://localhost:5000/${Thumbnail}`} alt="haha" />
                    </div>
                } */}
                </div>

                <br /><br />
                <label>Title</label>
                <Input
                    onChange={handleChangeTitle}
                    value={title}
                />
                <br /><br />
                <label>Description</label>
                <TextArea
                    onChange={handleChangeDecsription}
                    value={Description}
                />
                <br /><br />

                <select onChange={handleChangeOne}>
                    {Private.map((item, index) => (
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </select>
                <br /><br />

                <select onChange={handleChangeTwo}>
                    {Catogory.map((item, index) => (
                        <option key={index} value={item.label}>{item.label}</option>
                    ))}
                </select>
                <br /><br />

                <Button type="primary" size="large" onClick={onSubmit}>
                    Submit
                </Button>

            </Form>
        </div>
    )
}

export default UploadPage
