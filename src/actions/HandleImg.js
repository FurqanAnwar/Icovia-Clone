

const HandleImg = (img) =>{
    console.log(img);
    return {
        type: 'ClickedImg',
        payload: img
    }
}

export default HandleImg;