import { Heading, Table, TableContainer, Tbody } from "@chakra-ui/react";
import KvRow from "~/components/company/KvRow";

export const Company = () => {
  return (
    <div
      id="company"
      className="relative w-full h-[600px] bg-top bg-no-repeat bg-cover bg-[url('/ballpen-black-and-white-communication.jpg')]">
      <div className="absolute top-1/2 left-3/4 translate-x-[-50%] translate-y-[-50%]">
        <Heading as='h3' size='md'>会社概要</Heading>
        <TableContainer>
          <Table>
            <Tbody>
              <KvRow th="名称" td="合同会社アーサーズ" />
              <KvRow th="所在地" td="神奈川県横浜市都筑区川和町２３８３番地７" />
              <KvRow th="TEL" td="080-2395-2924" />
              <KvRow th="創業" td="2008年(平成18年)8月1日" />
              <KvRow th="設立" td="2015年(平成27年)8月10日" />
              <KvRow th="資本金" td="100万円" />
              <KvRow th="決算期" td="3月末" />
              <KvRow th="役員" td="浅利 和範 （代表社員）" />
              <KvRow th="事業内容" td="WEBシステムの開発" />
              <KvRow th="主要取引銀行" td="三菱UFJ銀行 宮崎台支店" />
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}
