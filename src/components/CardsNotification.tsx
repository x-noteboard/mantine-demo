import { Notification } from "@mantine/core";
import { Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { XIcon } from '@phosphor-icons/react';

export function CardsNotificationDemo() {
    return (
        <Notification radius="sm" title="We notify you that" withBorder>
            You are now obligated to give a star to Mantine project on GitHub
        </Notification>
    );
}

export function CardsNotification() {
    return (
        <Button
            onClick={() =>
                notifications.show({
                    title: "Default notification",
                    message: "Do not forget to star Mantine on GitHub! 🌟",
                    id: "hello-there",
                    position: "top-right",
                    withCloseButton: true,
                    onClose: () => console.log("unmounted"),
                    onOpen: () => console.log("mounted"),
                    autoClose: 5000,
                    color: "black",
                    icon: <XIcon />,
                    className: "my-notification-class",
                    style: { backgroundColor: "lightyellow" },
                    loading: false,
                })
            }
        >
            Show notification
        </Button>
    );
}
