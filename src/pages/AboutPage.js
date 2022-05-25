import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about"></PageHero>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="About Image" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
            <article>
              ti recusandae accusamus eum assumenda illo alias maxime non
              consequuntur quisquam, nam vero ullam. Facilis consequuntur
              molestias inventore porro quis eius officiis quam veniam
              consectetur! Ducimus, omnis! In nisi nobis sequi praesentium dolor
              odit, ut quisquam commodi corporis voluptate deserunt aut animi
              placeat. Corporis, ipsam.
            </article>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
