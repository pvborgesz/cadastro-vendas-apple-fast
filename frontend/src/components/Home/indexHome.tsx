import React, { useEffect, useState } from "react";
import api from "../../services/api";
import CardItem from "../Card/indexCard";
import { ProductUl } from "../Home/stylesHome";
import Header from "../Navbar/Navbar";

import { Container } from "./stylesHome";
import { ProductInfo } from "./stylesHome";

interface ProductProps {
  idProduto: number;
  nome: string;
  descricao: string;
}

const Home: React.FC = () => {
  const [produtos, setProdutos] = useState<ProductProps[]>();

  useEffect(() => {
    api
      .get("/produtos")
      .then((res) => {
        setProdutos(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [produtos]);

  return (
    <>
      <div>
        <Header />
        <Container>
          <ProductInfo>
            <h3> Produtos Disponíveis no Estoque:</h3>
            <ProductUl>
              {produtos?.map((product, index) => (
                <li key={index.toString()}>
                  {
                    <CardItem
                      idProduto={produtos[index].idProduto}
                      nomeProduto={product.nome}
                      descricaoProduto={product.descricao}
                    />
                  }
                </li>
              ))}
            </ProductUl>
          </ProductInfo>
        </Container>
      </div>
    </>
  );
};

export default Home;
