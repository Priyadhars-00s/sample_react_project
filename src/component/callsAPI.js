//import axios from 'axios';

export const get = (path) => {
    return fetch(`${path}`, {
      method: 'get'
    })
      .then(response => response.json()).then(res => {
          console.log('inside the response', res)
        return res
      })
      .catch((error) => {
        console.error(error)
      })
  }

//   export const axiosGet = (path) => {
//     axios.get(`${path}`)
//     .then(res => {
//       const persons = res.data;
//       console.log('inside the person', persons)
//     })
//   }


  export const post = (path, data) => {

    return fetch(`${path}`, {
        method: 'post',
        data : data,
        headers: {
            'Content-type': 'application/json'
        }
    }).then((res)=>{
        console.log('inside the post calls', res)
        return res
    }).catch((err)=>{
        console.log('Error', err)
    })


  }