import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import { handleWalletConnect } from "../redux/authentication";
export function useWallet() {
      const [isConnected, setIsConnected] = useState(false);
      const [provider, setProvider] = useState(null);
      const [chainId, setChainId] = useState(null);
      const [address, setAddress] = useState(null);

    const dispatch = useDispatch()

    useEffect(() => {
        async function connectWallet() {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                try {
                    await provider.send("eth_requestAccounts", []);
                    setProvider(provider);
                    const signer = provider.getSigner();
                    const address = await signer.getAddress();
                    setAddress(address);

                    const network = await provider.getNetwork();
                    setChainId(network.chainId);

                    dispatch(handleWalletConnect({ isConnected: true, connection: provider.connection, chainId: network.chainId, address }))
                    setIsConnected(true);
                } catch (err) {
                    dispatch(handleWalletConnect({ isConnected: false, connection: null, chainId: null, address: null }))
                    setIsConnected(false);
                }
            } else {
                dispatch(handleWalletConnect({ isConnected: false, connection: null, chainId: null, address: null }))
                setIsConnected(false);
            }
        }

        connectWallet();
    }, []);

    return { isConnected, connection: provider ? provider.connection : null, chainId, address };
}