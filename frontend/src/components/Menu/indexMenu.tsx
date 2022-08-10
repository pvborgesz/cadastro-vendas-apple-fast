import React from "react";
import { Container, ProductInfo, ProductForm } from "./stylesMenu";

export default function Menu() {
  return (
    <div>
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

                <input
                  id="input-frmquest-title"
                  type="text"
                  className={"form-control"}
                  placeholder="Nome do Produto"
                  // onChange={(e) => setTitulo(e.target.value)}
                />
              </div>

              <label htmlFor="input-frmquest-title-group">
                {" "}
                Descrição <strong className="campo-obrigatorio">*</strong>
              </label>
              <textarea
                id="input-frmquest-enun"
                className={"form-control"}
                placeholder="Descrição do produto"
                // onChange={(e) => setDescricao(e.target.value)}
              />

              <button
                id="btn-question-register"
                type="submit"
                // onClick={configurePost}
                className="btn btn-cadastrar-color-1"
              >
                <i className="fas fa-save"></i> Salvar
              </button>
            </ProductForm>
            <button
              type="button"
              className="btn btn-danger cosmo-color-1"
              // onClick={history.goBack}
            >
              Salvar
            </button>
          </>
        </ProductInfo>
      </Container>
    </div>
  );
}
