import type { NextPage } from 'next'
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { Contact } from "~/components/Contact";
import { Landing } from "~/components/Landing";
import { Company } from "~/components/Company";
import { Business } from "~/components/Business";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Landing/>
      <Business/>
      <Company/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
