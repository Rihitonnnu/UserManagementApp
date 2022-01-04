import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { VFC, memo, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { MenuIconButton } from "../../components/atoms/button/MenuIconButton";
import { LogoutModal } from "../../components/molecules/LogoutModal";
import { MenuDrawer } from "../../components/molecules/MenuDrawer";

export const Header: VFC = memo(() => {
    const { isOpen: isOpenDrawer, onOpen: onOpenDrawer, onClose: onCloseDrawer } = useDisclosure();
    const { isOpen: isOpenLogoutModal, onOpen: onOpenLogoutModal, onClose: onCloseLogoutModal } = useDisclosure();
    const history = useHistory();

    const onClickHome = useCallback(() => {
        history.push("/home");
    }, [])
    const onClickUserManagement = useCallback(() => {
        history.push("/home/user_management");
    }, [])
    const onClickSetting = useCallback(() => {
        history.push("/home/setting");
    }, [])

    return (
        <>
            <Flex as="nav" bg="teal.500" padding={{ base: 3, md: 5 }} color="gray.50" align="center" justify="space-between">
                <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome} >
                    <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>ユーザー管理アプリ</Heading>
                </Flex>
                <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
                    <Box pr={7}>
                        <Link onClick={onClickUserManagement} >ユーザー一覧</Link>
                    </Box>
                    <Box pr={7}>
                        <Link onClick={onClickSetting} >設定</Link>
                    </Box>
                    <Link onClick={onOpenLogoutModal} >ログアウト</Link>
                </Flex>
                <MenuIconButton onOpen={onOpenDrawer} />
            </Flex>
            <MenuDrawer onClose={onCloseDrawer} isOpen={isOpenDrawer} onClickHome={onClickHome} onClickUserManagement={onClickUserManagement} onClickSetting={onClickSetting} onClickLogoutModal={onOpenLogoutModal}/>
            <LogoutModal isOpenLogoutModal={isOpenLogoutModal} onCloseLogoutModal={onCloseLogoutModal}></LogoutModal>
        </>
    )
})