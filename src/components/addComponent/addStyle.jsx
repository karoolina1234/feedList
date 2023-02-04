import styled from 'styled-components'

export const Content = styled.div``;

export const ContentForm =styled.div`
    width: 40%;
    margin: 3rem auto;
    border: solid 1px #3b3b3b;
    padding: 3rem 1rem;
    padding-bottom: 1rem;
    border-radius: 0.2rem;
    background: #313131;
    #addImage{
    display: none;
    }

    #removeImgP{
        top: 1rem;
        position: absolute;
        svg{
            color: rgb(160 76 39);

        }
    }

.imageUp{
    border: 1px solid #494949;
    padding: 1.4rem;
    border-radius: 1.5rem;
    img{
        width: 1.3rem;
        vertical-align: bottom;
        display: 'block';
  height: '100%'
    }
   
}

.image{
    margin: 0 auto;
    border-radius: 3.5rem;
    margin-bottom: -1rem;
    width: 4rem;
    margin-top: -1rem;

    }

    #imagePreview{
        width: 100%;
        border-radius: 1.6rem;

    }
.labelInput{
    margin-bottom: 2rem;
    position: relative;
}
#addName{
    width: 90%;
    border-radius: 8px;
    background-color: #494949;
    border: navajowhite;
    padding: 0.5rem 1rem;

    @media(max-width:900px)
    {
        width: 80%;
    }

    ::placeholder {
        color: #949494;
}
}

#addMessage{
    @media(max-width:900px)
    {
        width: 80%;
    }
    resize: none;
    width: 90%;
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;
    border-radius: 0.5rem;
    background: #494949;
    border: none;
    ::placeholder {
  font-size: 1rem;
  color: #949494;

}
}
`;

export const AreaSave = styled.div`
    text-align: end;
    margin-top: 1em;

    a{
        color: #949494;
        text-decoration: underline;
        cursor: pointer;
        font-size: 0.8rem;
        margin-right: 0.5rem;
    }
    button{
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        border: none;
        color: #3b3b3b;
        cursor: pointer;
        background: #5f5f5f;
    }

    #publi{
        background: #71bb00;
        color: #FFF;
    }
`