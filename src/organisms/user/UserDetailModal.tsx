import { Box, Stack, Image, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter } from "@chakra-ui/react";
import { VFC, memo, ReactNode, useState, useEffect, ChangeEvent } from "react";
import { setSourceMapRange } from "typescript";
import { PrimaryButton } from "../../components/atoms/button/PrimaryButton";
import { User } from "../../types/api/user";

type Props = {
    user: User | null;
    isOpen: boolean;
    onClose: () => void;
    isAdmin?:boolean;
}

export const UserDetailModal: VFC<Props> = memo((props) => {
    const { user, isOpen, onClose, isAdmin = false} = props;
    const onChangeUserName=(e:ChangeEvent<HTMLInputElement>)=>setUserName(e.target.value);
    const onChangeName=(e:ChangeEvent<HTMLInputElement>)=>setName(e.target.value);
    const onChangeEmail=(e:ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value);
    const onChangePhone=(e:ChangeEvent<HTMLInputElement>)=>setPhone(e.target.value);

    const onClickUpdate = () => {
        alert();
    }
    const [username,setUserName]=useState("");
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");

    useEffect(()=>{
        setUserName(user?.username ??'');
        setName(user?.name ?? '');
        setEmail(user?.email ?? '');
        setPhone(user?.phone ?? '');
    },[user])

    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
            <ModalOverlay>
                <ModalContent pb={6}>
                    <ModalHeader>ユーザー一覧</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mx={4}>
                        <Stack spacing={4}>
                            <FormControl>
                                <FormLabel>名前</FormLabel>
                                <Input value={name} isReadOnly={!isAdmin} onChange={onChangeUserName}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>フルネーム</FormLabel>
                                <Input value={username} isReadOnly={!isAdmin} onChange={onChangeName}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Mail</FormLabel>
                                <Input value={email} isReadOnly={!isAdmin} onChange={onChangeEmail}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>TEL</FormLabel>
                                <Input value={phone} isReadOnly={!isAdmin} onChange={onChangePhone}/>
                            </FormControl>
                        </Stack>
                    </ModalBody>
                    {isAdmin && (
                        <ModalFooter>
                            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
                        </ModalFooter>
                    )}
                </ModalContent>
            </ModalOverlay>
        </Modal>
    )
})


