import styled from 'styled-components'

export const Content =styled.div`
    width: 44%;
    padding: 0.5em;
    margin: 0 auto;

    #feed{
        color: rgb(122 122 122);
        margin: 0.5rem 0rem;
        font-size: 0.8rem;
        text-align: left;
    }
`;
export const Item = styled.div`
       background: #313131;
    border-radius: 3px;
    text-align: left;
    border: solid 1px #3b3b3b;
    padding: 1rem;
    margin: 0.5rem 0rem;
    position: relative;
button{
    position: absolute;
    right: 1rem;
    background: transparent;
    border: 0;
    svg{
        color:rgb(160 76 39);
        width:1rem;
    }
}
img{
    min-width: 3rem;
    max-width: 3rem;
    display: inline-block;
    vertical-align: middle;
    border-radius: 1.2rem;

}
p{
    display: inline-block;
    margin-left: 0.5rem;
    color: #9f9f9f;
    font-size: 0.8rem;
}
    .send{   
         margin-left: 3.4rem;
        color:#9f9f9f;
        span{
            display: block;
            font-size: 0.7rem;
        }
        #env{
            font-size: 0.6rem;
        }
    }
`;