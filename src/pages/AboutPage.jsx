import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <p>
        Created by Gabriel Stanev following
        <a href="https://softserve.udemy.com/course/react-front-to-back-2022">
          <span> Brad Traversy</span>
        </a>
        's tutorial
      </p>
      <Link to="/">Back to main page</Link>
    </Card>
  );
}

export default AboutPage;
