import { Flex, Heading, Text } from "@chakra-ui/react";

export const Contact = () => {
  return (
    <Flex flexDirection="column" flexWrap="nowrap" margin="40px auto 300px" maxWidth="800px" id="contact">
      <Heading as='h3' size='md'>お問い合わせ</Heading>
      <Text paddingTop={2}>お問い合わせはこちらへお願いします。</Text>
      <Text><a href="mailto:asari&#64;arthurs.co.jp?subject=問い合わせ" target="_blank" rel="noopener noreferrer">asari@arthurs.co.jp</a></Text>
    </Flex>
  )
}
