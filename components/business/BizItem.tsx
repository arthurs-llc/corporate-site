import { ListIcon, ListItem } from "@chakra-ui/react";
import { MdArrowRight } from "react-icons/md";

interface BizItemProps {
  children: string;
}

export default function BizItem(props: BizItemProps) {
  return (
    <ListItem>
      <ListIcon as={MdArrowRight}/>
      {props.children}
    </ListItem>
  )
}
