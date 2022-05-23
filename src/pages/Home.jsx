import { Fragment, useEffect, useState } from "react";

import Api from "../api";

import About from "../components/About";
import Footer from "../components/Footer";
import Module from "../components/Module";
import Header from "../components/Header";
import Nav from "../components/Nav";
import TopSection from "../components/TopSection";

const API = new Api();

function Home() {
  const [loading, setLoading] = useState(false);
  const [modules, setModules] = useState([]);

  useEffect(() => {
    async function getModule() {
      setLoading(true);
      const modules = await API.getModules();
      setModules(modules);
      setLoading(false);
    }
    getModule();
  }, []);

  return (
    <Fragment>
      <TopSection />

      <Header />

      <Nav />

      <div className="container mx-auto flex flex-wrap py-6">
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          {loading ? "Yükleniyor" : <Module modules={modules} />}

          {/* <Paginator /> */}
        </section>

        <About />
      </div>
      <Footer />
    </Fragment>
  );
}

export default Home;
