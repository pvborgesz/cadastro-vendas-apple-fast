import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Container } from "./stylesCard";
import EditImage from "../../assets/edit.svg";
import IphoneImage from "../../assets/iphone.svg";
import api from "../../services/api";

interface Props {
  idProduto: number;
  nomeProduto: string;
  descricaoProduto: string;
}

export default function CardItem(props: Props): JSX.Element {
  const [nomeProduto, setNomeProduto] = useState(props.nomeProduto);
  const [descricaoProduto, setDescricaoProduto] = useState(
    props.descricaoProduto
  );

  const deleteProduct: any = () => {
    console.log(props.idProduto);
    api
      .delete(`/produtos/${props.idProduto}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Card
        bg={"Secondary"}
        key={"Secondary"}
        text={"dark"}
        style={{ width: "20rem", margin: "10vh", border: "10px" }}
        className="mb-2"
        color={"background: #282534;"}
      >
        <Card.Header
          style={{
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <Card.Title>
            {nomeProduto}{" "}
            <img src={IphoneImage} style={{ width: "25px", height: "25px" }} />{" "}
          </Card.Title>
          <img
            src={EditImage}
            style={{ width: "25px", height: "25px", cursor: "pointer" }}
            onClick={deleteProduct}
          ></img>
        </Card.Header>
        <Card.Body>
          <Card.Text>{descricaoProduto} </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
