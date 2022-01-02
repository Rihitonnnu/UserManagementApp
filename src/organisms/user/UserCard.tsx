import { Box, Stack,Image, Text } from "@chakra-ui/react";
import { VFC, memo, ReactNode } from "react";

type Props = {
    id:number;
    imageUrl:string;
    userName:string;
    fullName:string;
    onClick:(id:number)=>void;
}

export const UserCard: VFC<Props> = memo((props) => {
    const {id,imageUrl,userName,fullName,onClick } = props;
    return (
        <Box p={4} _hover={{ opacity: 0.8, cursor: "pointer" }} w="260px" h="260px" bg="white" borderRadius="10px" shadow={"md"} onClick={()=>onClick(id)}>
            <Stack textAlign="center">
                <Image boxSize="160px" borderRadius="full" alt="プロフィール画像"
                    src={imageUrl} m="auto" />
                <Text fontSize="lg" fontWeight="bold">{userName}</Text>
                <Text fontSize="sm" color="gray.500">{fullName}</Text>
            </Stack>
        </Box>
    )
})


