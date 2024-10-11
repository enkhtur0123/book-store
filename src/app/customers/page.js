"use client";

import { Center, Flex, Button } from "@mantine/core";
import { Checkbox } from "@mantine/core";
import { useState } from "react";
import { Fieldset, TextInput } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import { Dialog, Group, Text } from "@mantine/core";
import { Accordion, Paper, Box } from "@mantine/core";

export default function Demo() {
  const [checked, setChecked] = useState(false);
  const [opened, { toggle, close }] = useDisclosure(false);
  return (
    <>
      <div className="container mx-auto px-4 py-10">
        <div className="mx-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Button className="bg-green-600">Toggle dialog</Button>
          <Paper
            shadow="sm"
            radius="xl"
            p="xl"
            className="flex items-stretch justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          >
            <Text size="xs">Extra small text</Text>
            <Text size="sm">Small text</Text>
            <Text size="md">Default text</Text>
            <Text size="lg">Large text</Text>
            <Text size="xl">Extra large text</Text>
            <Text fw={500}>Semibold</Text>
            <Text fw={700}>Bold</Text>
            <Text fs="italic">Italic</Text>
            <Text td="underline">Underlined</Text>
            <Text td="line-through">Strikethrough</Text>
            <Text c="dimmed">Dimmed text</Text>
            <Text c="blue">Blue text</Text>
            <Text c="teal.4">Teal 4 text</Text>
            <Text tt="uppercase">Uppercase</Text>
            <Text tt="capitalize">capitalized text</Text>
            <Text ta="center">Aligned to center</Text>
            <Text ta="right">Aligned to right</Text>
          </Paper>
        </div>
      </div>
    </>
  );
  //   const items = groceries.map((item) => (
  //     <Accordion.Item key={item.value} value={item.value}>
  //       <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
  //       <Accordion.Panel>{item.description}</Accordion.Panel>
  //     </Accordion.Item>
  //   ));

  //   return <Accordion defaultValue="Apples">{items}</Accordion>;
  // <>
  //   <Group justify="center">
  //     <Button onClick={toggle}>Toggle dialog</Button>
  //   </Group>

  //   <Dialog
  //     opened={opened}
  //     withCloseButton
  //     onClose={close}
  //     size="lg"
  //     radius="md"
  //   >
  //     <Text size="sm" mb="xs" fw={500}>
  //       Subscribe to email newsletter
  //     </Text>

  //     <Group align="flex-end">
  //       <TextInput placeholder="hello@gluesticker.com" style={{ flex: 1 }} />
  //       <Button onClick={close}>Subscribe</Button>
  //     </Group>
  //   </Dialog>
  // </>

  // <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
  //   <Flex
  //     mih={50}
  //     justify="flex-start"
  //     align="flex-start"
  //     direction="column"
  //     wrap="wrap"
  //     gap={{ base: "sm", sm: "lg" }}
  //   >
  //     <Button>Button 1</Button>
  //     <Checkbox
  //       checked={checked}
  //       onChange={(event) => setChecked(event.currentTarget.checked)}
  //     />
  //   </Flex>
  //   <Fieldset legend="Personal information">
  //     <TextInput label="Your name" placeholder="Your name" />
  //     <TextInput label="Email" placeholder="Email" mt="md" />
  //   </Fieldset>
  // </Center>
}

const groceries = [
  {
    emoji: "🍎",
    value: "Apples",
    description:
      "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
  },
  {
    emoji: "🍌",
    value: "Bananas",
    description:
      "Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
  },
  {
    emoji: "🥦",
    value: "Broccoli",
    description:
      "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
  },
];
