import { Layout, Menu, Button, Dropdown } from "antd";
import "./index.scss"; // file css kèm theo
import { EllipsisOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/constant";

const { Header } = Layout;

const AppHeader = () => {
  const navigate = useNavigate();

  const ITEMS_HEADER = [
    { key: "1", label: "Product", onClick: () => navigate(ROUTE.PRODUCT) },
    { key: "2", label: "Features", onClick: () => navigate(ROUTE.PRODUCT) },
    { key: "3", label: "Pricing" },
    { key: "4", label: "Resources" },
  ];

  return (
    <Header className="app-header">
      {/* Logo */}
      <div className="logo">
        Core<span>Shift</span>
      </div>

      {/* Menu */}
      <Menu
        mode="horizontal"
        defaultSelectedKeys={[]}
        items={ITEMS_HEADER}
        className="header-menu"
      />

      {/* Actions */}
      <div className="header-actions">
        <Button className="btn-signin" onClick={() => navigate(ROUTE.LOGIN)}>
          Sign in
        </Button>
      </div>
      <div className="header-menu-mobile">
        <Dropdown
          menu={{
            items: [
              ...ITEMS_HEADER,
              {
                key: "5",
                label: "Sign in",
                onClick: () => navigate(ROUTE.LOGIN),
              },
            ],
          }}
          trigger={["click"]}
        >
          <Button
            type="primary"
            className="btn-demo"
            icon={<EllipsisOutlined />}
          />
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader;
