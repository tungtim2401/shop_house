import { Row, Col, Card, Typography } from "antd";
import {
  BarChartOutlined,
  FundOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import useLenis from "../../hooks/useLenis";
import "./index.scss";
import ListProduct from "./ListProduct";

function Landing() {
  useLenis();
  const { Title, Paragraph } = Typography;

  return (
    <div className="layout-container">
      <Title level={1} className="main-title">
        Built for everyone
      </Title>
      <Paragraph className="main-subtitle">
        Thousands of businesses, from startups to enterprises, use CoreShift to
        handle payments.
      </Paragraph>

      {/* Cards Section */}
      <Row gutter={[24, 24]} justify="center" style={{ marginTop: "40px" }}>
        <Col xs={24} sm={12} md={8}>
          <Card className="feature-card" bordered>
            <BarChartOutlined style={{ fontSize: 32, color: "#ff4d4f" }} />
            <Title level={4}>For HR professionals</Title>
            <Paragraph>
              Use a single cloud system for your employees, candidates and HR
              processes info.
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card className="feature-card" bordered>
            <FundOutlined style={{ fontSize: 32, color: "#fa8c16" }} />
            <Title level={4}>For managers & leaders</Title>
            <Paragraph>
              Get always up-to-date data and monitor performance of the company.
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card className="feature-card" bordered>
            <FileTextOutlined style={{ fontSize: 32, color: "#722ed1" }} />
            <Title level={4}>For legal teams</Title>
            <Paragraph>
              CoreShift helps legal teams by streamlining compliance, managing
              contracts and policies.
            </Paragraph>
          </Card>
        </Col>
      </Row>
123
      <ListProduct />
    </div>
  );
}
export default Landing;
