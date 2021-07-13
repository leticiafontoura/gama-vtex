import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: 'Inconsolata', monospace;
    color: #efeeb4;
    margin-bottom: 2rem;
`;
export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-family: sans-serif;
`;

export const ListItem = styled.li`
    height: auto;
    margin: .5rem 0;
    border: 1px solid #efeeb4;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    background-color: transparent;
    color: #efeeb4;
    padding: .5rem;
    transition: 0.2s;
    border-radius: 10px 10px 0px 0;

    &:hover {
        background-color: rgba(239,238,180, 0.4);
        color: #fff;
        border-radius: 10px 10px 0px 0;
    }
`

export const LineBreak = styled.p`
    margin: 10px 0px 10px 0;
`

export const LinkRepo = styled.a`
height: auto;
width: auto;
border-radius: 15px;
margin: .5rem 0;
border: none;
padding: 0.2rem 1rem;
background-color: #309975;
font-family: 'Inconsolata', monospace;
color: #fff;
text-decoration: none;
&:focus,
&:active {
    outline: none;
    box-shadow: none;
}
`

export const LinkHome = styled(Link)`
display: block;
width: 3rem;
border-radius: 15px;
margin: 1rem auto;
border: none;
padding: 0.5rem 1rem;
background-color: #309975;
font-family: 'Inconsolata', monospace;
color: #fff;
text-decoration: none;
&:focus,
&:active {
    outline: none;
    box-shadow: none;
}
`

export const Cont = styled.div`
display: flex;
`


export const RepoCol = styled.div`

`

export const LinkCol = styled.div`
display: flex;
    flex-direction: column;
`
