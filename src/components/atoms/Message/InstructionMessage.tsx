import { Box,Center } from "@chakra-ui/react";
import { VFC, memo, ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export const InstructionMessage: VFC<Props> = memo((props) => {
    const {children} = props;
    return (
        <Center>
            <Box p={6} m={5} bgColor={"gray.300"} borderColor="blackAlpha.200" borderRadius="10px" boxShadow="lg" >
                {children}                
            </Box>
        </Center>
    )
})


