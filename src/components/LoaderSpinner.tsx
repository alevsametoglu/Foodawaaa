import { Spinner } from "../icon";
import styled from "styled-components";
import { useEffect } from "react";
const Loader = styled.div`
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #e5e5e5c8;
  position: absolute;
`;

const SpinnerContainer = styled.div`
  margin-top: 96px;
  width: 100%;
  height: calc(100vh - 96px);
  background-color: #e5e5e5;
  text-align: center;
  font-size: 62px;
  z-index: 99;
  color: #01ba88;
  padding-top: calc(50vh - 96px - 40px);
`;

type Props = {
  show: boolean;
};

const LoaderSpinner = (props: Props) => {
  useEffect(() => {
    const body = document.querySelector("body") as any;
    if (props.show) body?.classList.add("stop-scrolling");
    else body?.classList.remove("stop-scrolling");
  }, [props.show]);

  return props.show ? (
    <Loader>
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    </Loader>
  ) : (
    <></>
  );
};

export default LoaderSpinner;
