import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";

export default function Repositories() {
    const history = useHistory();
    const [repositories, setRepositories] = useState([]);
    const [users, setUsers] = useState();

    useEffect(() => {
         let repositoriesName = localStorage.getItem("repositoriesName");
         let repositoriesUser = localStorage.getItem("repositoriesUser");
         if (repositoriesName !== null) {
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            setUsers(repositoriesUser);
            localStorage.clear();
         } else {
            history.push("/");
         }

    }, []);

    return (

            <S.Container>
                <S.Title>Repositórios de {users}</S.Title>
                <div>
                    <S.List>
                        { repositories.map(repository => {
                            return (
                                <S.ListItem>{repository} <S.LineBreak><S.LinkRepo href={`https://github.com/${users}/${repository}`} target="_blank" rel="noreferrer noopener">Acesse o repositório</S.LinkRepo></S.LineBreak> </S.ListItem>
                            )
                        })}
                    </S.List>
                </div>
                
                <S.LinkHome to="/">Voltar</S.LinkHome>
            </S.Container>

    )
}