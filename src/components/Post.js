import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios'

function Post() {
    const [inputem, setInputem] = useState('');
    const [inputmsg, setInputmsg] = useState('');
    const [inputName, setInputName] = useState('');
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);


    const submit = () => {
        setInputem(inputRef1.current.value);
        setInputmsg(inputRef2.current.value);
        setInputName(inputRef3.current.value);
    }

    const clear = () => {
        setInputem('');
        setInputmsg('');
        setInputName('');
    }
    const data = {
        email: { inputem },
        message: { inputmsg },
        name: { inputName }
    }


    useEffect(() => {
        async function PostData() {
            /* const result = await axios.post('https://admin.srkprojects.com/web/api/client/v1/contact-us/', { data } */
            axios({
                method: 'post',
                url: 'https://admin.srkprojects.com/web/api/client/v1/contact-us/',
                data: { data }
            }
            ).then(Response => {
                console.log(Response);
            }).catch(error => {
                console.log(error);
            })
        }
        PostData();

    }, []);
    return (
        <div>
            <div style={{ marginTop: "100px", display: 'block', padding: '10px' }} >
                <div>

                    Email: <input type="eamil"
                        ref={inputRef1}
                    />
                </div>
                <div>
                    Message: <input type="text"
                        ref={inputRef2}
                    />
                </div>
                <div>
                    Name: <input type="text"
                        ref={inputRef3}
                    />
                </div>
            </div>
            <button
                onClick={submit}>Post</button>
            <button onClick={clear}>
                clear
            </button>
        </div>
    )
}

export default Post;
