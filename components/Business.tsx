import { Heading, List } from "@chakra-ui/react";
import BizItem from "~/components/business/BizItem";

export const Business = () => {
  return (
    <div className="mx-12 my-12" id="business">
      <Heading as='h3' size='md' marginBottom={2}>事業内容</Heading>
      <section>
        <Heading as='h4' size='sm' marginTop={3}>自社サービス</Heading>
        <List>
          <BizItem>クラウドソーシングサービス開発</BizItem>
        </List>
      </section>
      <section>
        <Heading as='h4' size='sm' marginTop={3}>技術支援</Heading>
        <List>
          <BizItem>銀行内システムの共通機能開発・標準化</BizItem>
          <BizItem>人材業界向けマッチングシステム開発</BizItem>
          <BizItem>事業承継サービスの機能拡張</BizItem>
          <BizItem>テスト管理システムの機能追加</BizItem>
          <BizItem>MAサービス開発のディレクション</BizItem>
        </List>
      </section>
      <section>
        <Heading as='h4' size='sm' marginTop={3}>開発実績のある技術</Heading>
        <section>
          <Heading as='h5' size='xs' marginTop={3}>&gt;&nbsp;開発言語・フレームワーク</Heading>
          <List>
            <BizItem>Java（Struts, Seasar2, Spring Boot）</BizItem>
            <BizItem>Scala（Play!2）</BizItem>
            <BizItem>Ruby（Ruby on Rails）</BizItem>
            <BizItem>PHP（CakePHP3, ZendFramework）</BizItem>
            <BizItem>JavaScript / TypeScript（jQuery, React Vue.js, Backbone.js, Angular）</BizItem>
          </List>
        </section>
        <section>
          <Heading as='h5' size='xs' marginTop={3}>&gt;&nbsp;データベース等</Heading>
          <List>
            <BizItem>Oracle</BizItem>
            <BizItem>MySQL</BizItem>
            <BizItem>PostgreSQL</BizItem>
            <BizItem>memcached</BizItem>
            <BizItem>Redis</BizItem>
            <BizItem>MongoDB</BizItem>
            <BizItem>Redis</BizItem>
          </List>
        </section>
      </section>
    </div>
  )
}
