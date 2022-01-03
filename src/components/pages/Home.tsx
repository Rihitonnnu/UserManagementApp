import styled from "@emotion/styled";
import { VFC, memo } from "react";
import { InstructionMessage } from "../atoms/Message/InstructionMessage";

export const Home: VFC = memo(() => {
    return (
        <>
            <InstructionMessage>                    
                この度はユーザー管理アプリにログインしていただきありがとうございます。<br></br>当アプリでは
                ユーザー一覧を閲覧したり、管理者権限を用いてデータの変更を行うことができます。<br></br>
                このアプリのユーザー情報は<Sa href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</Sa>
                を利用して取得しております。
            </InstructionMessage>
        </>
    )
})

const Sa=styled.a`
text-decoration:underline;
&:hover{
    color:red
}
`