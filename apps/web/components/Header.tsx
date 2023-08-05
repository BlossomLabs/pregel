'use client'

import { Flex, Box, Text } from "@chakra-ui/react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useRouter } from "next/router"

export default function Header() {

    const router = useRouter()

    return(
        <Box bg="purple.400" w="100%" p={4} color="white" position="sticky" top="0" zIndex="1000">
            <Flex justify="space-between">
                <Flex align="center">
                    <Text fontSize="xl" as="b" mr={4} cursor="pointer" onClick={() => router.push("/")}>
                        PREGEL
                    </Text>
                </Flex>
                <Flex align="center">
                    <ConnectButton showBalance={false} chainStatus="none"/>
                </Flex>
            </Flex>
        </Box>
    )
}