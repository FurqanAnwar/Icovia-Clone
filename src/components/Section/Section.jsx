import React from "react";
import Button from "src/components/Button/Button";
import DropDownBox from "src/components/DropDownBox/DropDownBox";
import ContainerPreview from "src/components/ContainerPreview/ContainerPreview";
import ComplexBtn from "src/components/Button/ComplexButton";
import { useSelector } from "react-redux";
import ImgContainer from "src/components/ImgContainer/ImageContainer";
import SingleImgContainer from "src/components/ImgContainer/SingleImgContainer";

import { useHistory } from "react-router-dom";

const Section = (props) => {
  const Box = props.component;
  const Title = useSelector((state) => state.Title);
 
  const history = useHistory();

  function handleRouting() {
    let path = "plan";
    history.push(path);
  }

  return (
    <div className={props.class}>
      <div className="Main__Content">
        <div className="Content-Container">
          <div className="Content-Container__Head">
            <img className={props.step} src={props.src} alt="Step 1" />
            <h2 className="Heading-Secondary">{props.headingSecondary}</h2>
          </div>

          <div className="Content-Container__Body">
            {props.type === "Custom" ? (
              <Box />
            ) : (
              <div className="ComplexBtn-Container">
                <ComplexBtn
                  length="10"
                  titles={{
                    btn_1: "4x8",
                    btn_2: "9x9",
                    btn_3: "12x12",
                    btn_4: "15x25",
                    btn_5: "18x36",
                    btn_6: "30x45",
                    btn_7: "40x60",
                    btn_8: "40x80",
                    btn_9: "40x100",
                    btn_10: "50x100",
                  }}
                  class="Btn-Stretch"
                />
              </div>
            )}

            <Button
              handleClick={handleRouting}
              title={props.btnPrimary}
              type="simple"
              class="Btn-Primary Btn-Pad"
            />
          </div>
          <div className="Content-Container__Tail">
            <div className="Preview-Container">
              {props.type === "Custom" ? (
                <ImgContainer />
              ) : (
                  <SingleImgContainer Title={Title ? Title :"30x45"} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
