import { Td, Th, Tr } from "@chakra-ui/react";

interface KvRowProps {
  th: string;
  td: string;
}

export default function KvRow(props: KvRowProps) {
  return (
    <Tr>
      <Th textAlign="right" borderBottom="none" paddingY={2}>{props.th}</Th>
      <Td borderBottom="none" paddingY={2}>{props.td}</Td>
    </Tr>
  )
}
