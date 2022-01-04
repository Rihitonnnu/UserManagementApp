import { Button } from "@chakra-ui/react";
import { VFC, memo, ReactNode } from "react";

type Props={
    children:ReactNode;
    disabled?:boolean;
    loading?:boolean;
    onClick:()=>void;
}

export const SubButton: VFC<Props> = memo((props) => {
    const {children,onClick ,disabled=false,loading=false}=props;
    return (
        <Button bg="tomato" color="white" _hover={{ opacity: 0.8 }} disabled={disabled||loading} isLoading={loading} onClick={onClick}>{children}</Button>
    )
})


