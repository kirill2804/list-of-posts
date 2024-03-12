import {Link, useParams} from 'react-router-dom'
import React, { useEffect, useState } from 'react';

import styles from './PostSingle.module.css'

const url = 'https://jsonplaceholder.typicode.com/posts';

function PostSingle(){

    const [items, setDate] = useState({title:null, body:null});

    let { id } = useParams();
    useEffect(() => {
        fetch(`${url}/${id}`, {cache:'force-cache'})
        .then((response) => {
            if (!response.ok) {
                throw new Error('error get data!');
            }
            return response.json();
        })
        .then((data) => {
          let copy = Object.assign({}, items);
          copy.title = data.title;
          copy.body = data.body;
          setDate(copy);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    return <>
        <h1 className={styles.postTitle}>{items.title}</h1>
        <div className={styles.postContent}>
            <span>ID: {id}</span>
            <p>{items.body}</p>
            <Link to="/"  className={styles.link}>
                Назад
            </Link>
        </div>
        </>   
}



export default PostSingle