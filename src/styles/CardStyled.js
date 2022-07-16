import styled from "styled-components";

function bgColor(rating) {
    let color = ''
    if (rating>=70) {
        color='rgba(117, 235, 127,0.45)'
    } else if (50<rating<70) {
        color= 'rgba(247, 247, 100,0.45)'
    } else {
        color= 'rgba(232, 123, 93,0.45)'
    }
    return color;
}

let CardStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
.img-container{
    position: relative;
}
.card-title{
    display:inline-block;
    padding: 6px;
    background-color:var(--primary-purple);
    border-radius: 6px 6px 0 0;
}
.card-bottom{
    display:flex;
    align-items: center;
    justify-content:center;
    background-color: var(--primary-light);
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    transform: translateY(-36px);
}
.card-info{
    background-color: rgba(0,0,0,0.75);
    height: 300px;
    width: 200px;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    padding:12px;
    display: none;
}
.card-info p {
    height: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box !important;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
}
.genres {
    display: flex;
    justify-content: space-between;
    padding-top: 24px;
    color:var(--primary-button);
}
.img-container:hover{
img {
        filter: blur(2px);
        box-shadow: none;
    }
.card-info{
    display:block
}
}

`


export {CardStyled};