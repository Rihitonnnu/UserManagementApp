import { VFC, memo } from "react";
import { InstructionMessage } from "../atoms/Message/InstructionMessage";

export const Setting: VFC = memo(() => {
    return (
        <InstructionMessage>
            こちらは設定ページです。設定ページは今後実装予定です。
        </InstructionMessage>
    )
})