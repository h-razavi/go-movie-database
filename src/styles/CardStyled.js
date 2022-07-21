import styled from "styled-components";


let CardStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
align-content:center;
justify-content: flex-end;
margin:0 16px;
width: 250px;
.cards{
    display: flex;
    justify-content: space-around;
}
.img-container{
    position: relative;
}
.card-title{
    display:inline-block;
    max-width:200px;
    padding: 6px;
    text-align: center;
    background-color:var(--primary-purple);
    border-radius: 6px 6px 0 0;
}
.card-bottom{
    display:flex;
    align-items: center;
    justify-content:center;
    background-color: var(--primary-dark);
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

.CircularProgressbar-trail {
    stroke: #fff;
  }
  .CircularProgressbar-path {
    stroke: var(--primary-light);
  }
  .CircularProgressbar-text {
    fill: var(--primary-light);
    font-size: 1.5rem;
  }
`


export {CardStyled};