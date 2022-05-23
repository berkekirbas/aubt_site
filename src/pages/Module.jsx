import React, { Fragment, useState, useEffect } from "react";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopSection from "../components/TopSection";

import Api from "../api";
import { useParams } from "react-router-dom";
import ModulePageComponent from "../components/ModulePageComponent";
import About from "../components/About";
import Footer from "../components/Footer";

const API = new Api();

function Module() {
  const params = useParams();

  const [loading, setLoading] = useState(false);
  const [module, setModule] = useState([]);

  useEffect(() => {
    async function getModule() {
      setLoading(true);
      const module = await API.getModule(params.module_id);
      setModule(module);
      setLoading(false);
    }
    getModule();
  }, [params.module_id]);

  return (
    <Fragment>
      <TopSection />

      <Header />

      <Nav />

      <div class="container mx-auto flex flex-wrap py-6">
        <section class="w-full md:w-2/3 flex flex-col items-center px-3">
          {loading ? "Yükleniyor" : <ModulePageComponent module={module} />}
        </section>

        <About />
      </div>
      <Footer />
    </Fragment>
  );
}

export default Module;
