import React, { useCallback, useState } from "react";
import {
  Form,
  Button,
  Col,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";

export const AddBlog = ({
  onAddBlog,
  setTitle,
  setDesc,
  setDate,
}) => {
  const [modal, setModal] = useState(false);
  const hanldeClickAddPost = () => {
    setModal(true);
  };
  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }, [modal]);
  const handldAddBlog = () => {
    onAddBlog();
    setModal(false);
  };
  return (
    <React.Fragment>
      <button className="submitButton" onClick={hanldeClickAddPost}>
        AddBlog
      </button>
      <Modal isOpen={modal} centered={true}>
        <ModalHeader toggle={toggle} tag={"h2"}>
          {modal ? "Thêm bài post" : ""}
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col className="col-12">
                <div className="mb-3">
                  <Label className="form-label">Tiltle</Label>
                  <Input
                    name="name"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <Label className="form-label">Desc</Label>
                  <Input
                    name="name"
                    type="text"
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <Label className="form-label">Date</Label>
                  <Input
                    name="name"
                    type="text"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <Button onClick={handldAddBlog}>Post</Button>
                  <button setup={() => setModal(false)}>Đóng</button>
                </div>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};
