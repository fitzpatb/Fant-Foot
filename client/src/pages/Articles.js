import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import DesPoints from "../components/DesPoints";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Books() {
  // Initialize books as an empty array
    const [articleTitle, setArticleTitle] = useState("");
    const [articleIntro, setArticleIntro] = useState("");
    const [descriptionsPoints, setDescriptionsPoints] = useState([]);


    useEffect(() => {
      loadBooks();
    }, []);

    function loadBooks() {
      let articleArray = [];
      API.getArticles()
      .then(res => {
        console.log(res.data.articles)
        setArticleTitle(res.data.articles[0].headline)
        setArticleIntro(res.data.articles[0].intro);
        for (let i = 0; i < res.data.articles[0].descriptions.length; i++) {
          articleArray.push(res.data.articles[0].points[i]);
          articleArray.push(res.data.articles[0].descriptions[i]);
        }
        setDescriptionsPoints(articleArray);
      })
      .catch(err => console.log(err));
      // Add code here to get all books from the database and store them using setBooks
    }

    return (
      <main>
        <Container fluid>
          <Row>
            <Col size="md-6 sm-12">
              <article>
                <h1>{articleTitle}</h1>
                <p>{articleIntro}</p>
                <DesPoints
                  points={descriptionsPoints}
                />
              </article>
            </Col>
            <Col size="md-6">
              <Jumbotron>
                <h1>Other Articles</h1>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }

export default Books;
