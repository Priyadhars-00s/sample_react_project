import React from 'react';
import { useState, useEffect } from "react";
import { post } from "react";

export const post = (path, data) => {

    return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        console.log('inside the post calls', res)
        return res
    }).catch((error)=>{
        console.log('Error', error)
    })
}