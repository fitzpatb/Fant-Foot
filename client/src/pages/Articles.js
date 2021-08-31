import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import DesPoints from "../components/DesPoints";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

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
            <Col size="md-8 sm-12">
              <article>
                <h1>{articleTitle}</h1>
                <p>{articleIntro}</p>
                <DesPoints
                  points={descriptionsPoints}
                />
              </article>
            </Col>
            <Col size="md-4">
              <Card>
                <Card.Body>Recent Articles</Card.Body>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }

export default Books;
