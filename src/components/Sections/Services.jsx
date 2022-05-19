import React from "react";
import styled from "styled-components";
import ServiceBox from "../Elements/ServiceBox";


export default function Services() {
  return (
    <Wrapper id="services">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Services</h1>
            <p className="font16 ">
              We improve companies' go-to-market, empowering teams and organizations in their value creation process with software automation and AI.
              <br />
              We provide services to implement software solutions and modular cloud components to be integrated with already
              existing solutions
              <br />
              we can offer our consultancy for company communication and large marketing programs
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Software Automation"
                subtitle="With automation: we help you to increase the net value of your company, reducing cost and risk."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="machineLearning"
                title="Machine Learning"
                subtitle="Our AI automatizes value chain processes in a data-driven, efficient, and reliable way."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Development"
                subtitle="Our vision is to develop self-sustaining business units, each with an innovative and disruptive tech core component, which can support the ingenuity of our collaborators."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
