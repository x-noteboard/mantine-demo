import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Text, TextInput } from "@mantine/core";
import { useState } from "react";

export function CardsModalDemo() {
    const [noTransitionOpened, setNoTransitionOpened] = useState(false);
    return (
        <>
            <Modal
                opened={noTransitionOpened}
                onClose={() => setNoTransitionOpened(false)}
                title="Modal Title"
                centered
                size="auto"
                transitionProps={{
                    transition: "fade",
                    duration: 400,
                    timingFunction: "linear",
                }}
                overlayProps={{
                    backgroundOpacity: 0.55,
                    blur: 3,
                }}
                closeOnClickOutside={false}
            >
                <Text mb="lg">
                    You can add any content here, even nested modals! The modal
                    overlay
                </Text>

                <TextInput label="First input" placeholder="First input" />
                <TextInput
                    data-autofocus
                    label="Input with initial focus"
                    placeholder="It has data-autofocus attribute"
                    mt="md"
                />
            </Modal>

            <Button onClick={() => setNoTransitionOpened(true)}>
                Open modal
            </Button>
        </>
    );
}
