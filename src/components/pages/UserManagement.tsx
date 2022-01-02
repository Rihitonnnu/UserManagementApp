import { Center, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, Stack, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { VFC, memo, useEffect, useCallback } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUsers } from "../../hooks/useSelectUsers";
import { UserCard } from "../../organisms/user/UserCard";
import { UserDetailModal } from "../../organisms/user/UserDetailModal";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: VFC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { getUsers, users, loading } = useAllUsers();
    const {onSelectUser,selectedUser}=useSelectUsers();
    const {loginUser}=useLoginUser();

    const onClickUser = useCallback((id:number) => {
        onSelectUser({id,users,onOpen});
    }, [users]);
    useEffect(() => getUsers(), []);
    return (
        <>
            {loading ? (
                <Center h="100vh">
                    <Spinner></Spinner>
                </Center>
            ) : (
                <Wrap p={{ base: 4, md: 10 }} >
                    {users.map((user) => (
                        <WrapItem key={user.id} mx="auto">
                            <UserCard imageUrl="https://source.unsplash.com/random" userName={user.username} fullName={user.name} onClick={onClickUser} id={user.id}/>
                        </WrapItem>
                    ))}
                </Wrap >
            )}
            <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} isAdmin={loginUser?.isAdmin}/>
        </>
    );
})