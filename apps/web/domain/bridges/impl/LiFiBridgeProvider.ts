import { ChainToken } from "../../tokens/ChainToken";
import { BridgeOperation, BridgeOperationInformation, BridgeOperationStatusError, BridgeProvider, BridgeProviderInformation } from "../BridgeProvider";

export class LiFiBridgeProvider implements BridgeProvider {
    async bridgeTokens(sourceWalletId: string, sourceChainId: number, sourceTokenId: string, destinationWalletId: string, destinationChainId: number, quantity: BigInt): Promise<BridgeOperation> {
        // TODO: implement for lifi
        return new BridgeOperation("0", new BridgeOperationStatusError("ERR_NOT_IMPL", "Bridge provider not implemented"));
    }
    async getBridgeProviderQuoteInformation(sourceWalletId: string, sourceChainId: number, sourceTokenId: string, destinationChainId: number, quantity: BigInt): Promise<BridgeOperationInformation> {
        // TODO: implement for lifi
        return new BridgeOperationInformation(BigInt(0), BigInt(0));
    }
    getBridgeProviderInformation(): BridgeProviderInformation {
        // TODO: implement for lifi
        return new BridgeProviderInformation("lifi", "lifi");
    }

    async getAllBridgeableTokensFromChain(chainId: number): Promise<ChainToken[]> {
        // TODO: implement for lifi
        return [];
    }
    
}