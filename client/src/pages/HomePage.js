import React, { useEffect, useState } from "react";
import Layout from "../component/layout/Layout";
import { Form, Input, Modal, Select, Table, message } from "antd";
import axios from "axios";
import Spiner from "../component/layout/Spiner";

const HomePage = () => {
  const [showModel, setshowModel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [getall, setall] = useState([]);
  //table

  const colums = [
    { title: "Date", dataIndex: "date" },
    { title: "Amount", dataIndex: "amount" },
    { title: "category", dataIndex: "category" },
    { title: "Type", dataIndex: "type" },
    { title: "Description", dataIndex: "description" },
  ];

  // get all data

  const getAllTransition = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      setLoading(true);
      const res = await axios.post("/transitions/get-transition", {
        userid: user._id,
      });
      setLoading(false);
      setall(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      message.error("fetch data problem");
    }
  };
  // useeffect data

  useEffect(() => {
    getAllTransition();
  }, []);

  const handleSubmit = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      setLoading(true);
      await axios.post("/transitions/add-transition", {
        ...values,
        userid: user._id,
      });
      setLoading(false);
      message.success("add amount sucessfully");
      setshowModel(false);
    } catch (error) {
      setLoading(false);
      message.error("failed add to money");
    }
  };

  return (
    <Layout>
      {loading && <Spiner />}
      <div className="filters">
        <div>
          <h3>Add Amount Here</h3>
        </div>
        <div>
          <button
            className="btn-primary"
            style={{ border: "2px solid aqua" }}
            onClick={() => setshowModel(true)}
          >
            Add
          </button>
        </div>
      </div>
      <div className="content">
        <Table columns={colums} dataSource={getall} />
      </div>

      <Modal
        title="add-tansiton"
        open={showModel}
        onCancel={() => setshowModel(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={handleSubmit}>
          <h1>Register Form</h1>
          <Form.Item label="Amount" name="amount">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="type" name="type">
            <Select>
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="Expense">Expense</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Category" name="category">
            <Select>
              <Select.Option value="sallary">Sallary</Select.Option>
              <Select.Option value="tradding">tradding income</Select.Option>
              <Select.Option value="fees">fees</Select.Option>
              <Select.Option value="bils">Bils</Select.Option>
              <Select.Option value="movie">Movie</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Month" name="date">
            <Input type="date" />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input type="text" />
          </Form.Item>
          <div className="d-flex">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </Form>
      </Modal>
    </Layout>
  );
};

export default HomePage;
