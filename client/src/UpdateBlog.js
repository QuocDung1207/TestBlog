import React, { useCallback, useState } from "react";
import {
  Button,
  Col,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";

export const UpdateBlog = ({
  post,
  onUpdate,
  setTitle,
  setDesc,
  setDate,
}) => {
  const [updateModal, setUpdateModal] = useState(false);
  const handleClick = () => {
    setUpdateModal(true);
  };
  const handleClickUpdate = () => {
    onUpdate(post?.id);
    setUpdateModal(false);
  };
  const toggle = useCallback(() => {
    if (updateModal) {
      setUpdateModal(false);
    } else {
      setUpdateModal(true);
    }
  }, [updateModal]);

  return (
    <React.Fragment>
      <div>
        <button onClick={handleClick}>Update</button>
      </div>
      <Modal isOpen={updateModal} centered={true}>
        <ModalHeader toggle={toggle} tag={"h2"}>
          {updateModal ? "Cập nhật bài post" : ""}
        </ModalHeader>
        <ModalBody >
          <Form>
            <Row>
              <Col className="col-12">
                <div className="mb-3">
                  <Label className="form-label">Title</Label>
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
                  <Button onClick={handleClickUpdate}>Update</Button>
                  <button setup={()=> setUpdateModal(false)}>Đóng</button>
                </div>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};
