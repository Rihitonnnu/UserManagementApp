import { Box, Button, Center, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { VFC, memo, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { useMessage } from "../../hooks/useMessage";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { SubButton } from "../atoms/button/SubButton";

type Props = {
    isOpenLogoutModal: boolean;
    onCloseLogoutModal: () => void;
}


export const LogoutModal: VFC<Props> = memo((props) => {
    const { isOpenLogoutModal, onCloseLogoutModal } = props;
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { showMessage } = useMessage();

    const onClickLogout = useCallback(() => {
        setLoading(true);
        history.push("/");
        showMessage({ title: "ログアウトしました", status: "success" });
    }, [])
    return (
        <Modal autoFocus={false} isOpen={isOpenLogoutModal} onClose={onCloseLogoutModal} motionPreset="slideInBottom">
            <ModalOverlay>
                <ModalContent p="20px" mt="auto" mb="auto">
                    <Box textAlign="center">
                        <ModalHeader>ログアウトしますか？</ModalHeader>
                    </Box>
                    <ModalBody>
                        <Center>
                            <Box mr="5px">
                                <PrimaryButton loading={loading} onClick={onClickLogout}>はい</PrimaryButton>
                            </Box>
                            <Box ml="5px">
                                <SubButton onClick={onCloseLogoutModal}>いいえ</SubButton>
                            </Box>
                        </Center>
                    </ModalBody>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    )
})