import stayled from "styled-components"

export const SliderItemWrapper = stayled.div`
width:634px;
background:#fdfdfd;
padding: 20px;
margin-top: 20px;
border: 1px solid #f2f5f9;
border-radius: 12px; 


`
export const SliderItemTop = stayled.div`
    display:flex;
justify-content:space-between;

p{
    color: #7E8794;  
}
h4{
    font-weight:500;
    font-size:16px;
    line-height:20px;

}
button{

    width:44px;
    height:44px;
    padding:13px;
    border:none;
    background-color:#fff;
    border:1px solid #f2f5f9;
    border-radius:50%;
margin-left: 12px;

}
`
export const SliderItemMain = stayled.div`
display:flex;
justify-content:space-between;
align-items: center;

`
export const SliderProgressWrapper = stayled.div`

`
export const SliderProgress = stayled.div`
p{
    color: #7e8794;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
}
span{
    width: 88.4px;
    height: 4px;
    background: #ECEEEF; 
    border-radius: 2px;
display: block;
margin: 0 2px;

}
div{
    display:flex; 
}
.active{
    background: #FF4D4D; 
}
`