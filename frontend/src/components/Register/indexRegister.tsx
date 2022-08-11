import React, { useEffect, useState } from "react";
import Header from "../Navbar/Navbar";
import { Container, ProductInfo, ProductForm } from "./stylesRegister";
import api from "../../services/api.js";
import Alert from "../../components/Alert/indexAlert";

interface ProductProps {
  nome: string;
  descricao: string;
}

export default function Menu() {
  const [nomeProduto, setNomeProduto] = useState<string>();
  const [descricaoProduto, setDescricaoProduto] = useState<string>();
  const [allProdutos, setAllProdutos] = useState<ProductProps[]>();
  const [alert] = useState([]);

  useEffect(() => {
    api
      .get("/produtos")
      .then((res) => {
        setAllProdutos(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const registerProduct: any = () => {
    // console.log(nomeProduto, descricaoProduto);
    const produto = {
      nome: nomeProduto,
      descricao: descricaoProduto,
    };
    console.log(produto);
    api
      .post("/registerProduct", {
        headers: produto,
      })
      .then(() => {})
      .catch(() => {});
  };

  function showAlert(msg: string, status: string): any {
    // alert.push(<Alert msg={msg} status={status} hide={closeAlert()} />);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
  function closeAlert() {
    alert.length = 0;
  }

  return (
    <div>
      <Header />
      <Container>
        {/* <Sidebar />
        <Menu></Menu> */}
        <ProductInfo>
          <h3> Cadastrar Produto:</h3>
          <>
            <ProductForm
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="controls">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="form-group">
                      <div
                        id="input-frmquest-course-group"
                        className={"input-group"}
                      ></div>
                      {<span className="invalid-feedback"></span>}
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div style={{ margin: "10px" }}>
                <label htmlFor="input-frmquest-title-group">
                  {" "}
                  Nome do Produto:{" "}
                  <strong className="campo-obrigatorio">*</strong>
                </label>
                <input
                  id="input-frmquest-title"
                  type="text"
                  className={"form-control"}
                  placeholder="Nome do Produto"
                  onChange={(e) => setNomeProduto(e.target.value)}
                />
              </div>
              <div style={{ margin: "10px" }}>
                <label htmlFor="input-frmquest-title-group">
                  {" "}
                  Descrição: <strong className="campo-obrigatorio">*</strong>
                </label>
                <textarea
                  id="input-frmquest-enun"
                  className={"form-control"}
                  placeholder="Descrição do produto"
                  onChange={(e) => setDescricaoProduto(e.target.value)}
                />
              </div>
            </ProductForm>
            <button
              type="button"
              className="btn btn-danger cosmo-color-1"
              onClick={registerProduct}
              style={{ margin: "10px" }}
            >
              Salvar
            </button>
          </>
        </ProductInfo>
      </Container>
    </div>
  );
}
