import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import MenuTab from "../Menu/MenuTab";
import useMenu from "../../hooks/useMenu";
import { useEffect, useState } from "react";
import recipesApi from "../../api/recipesApi";
import { useHistory } from "react-router";

const MainGrid = styled(Grid)`
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: #f7f7f7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 44px;
  display: flex;
  flex-direction: column;
  margin-bottom: 4em;
`;

const HeaderText = styled(Typography)`
  cursor: default;
  border-bottom: 2px solid #000000;
  padding-bottom: 20px;
`;

const BodyGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 0;
`;

const DetailGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;

const Detail = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

const Description = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const ImageGrid = styled(Grid)``;

const RecommendGrid = styled(Grid)``;

const VegetableDetailItem = (props) => {
  const { vegetable } = props;
  const [recommendMenu, setRecommendMenu] = useState([]);

  useEffect(() => {
    recipesApi()
      .getRecommendMenuByVegetableName(vegetable.vegetableName)
      .then((res) => {
        setRecommendMenu(res.data);
      })
      .catch((err) => {
        console.error(err);
        setRecommendMenu([]);
      });
  }, [vegetable]);

  const renderImage = (url) => {
    return (
      <ImageGrid>
        <img
          className="VegetableDetailImage"
          src={url}
          alt={url}
          loading="lazy"
        />
      </ImageGrid>
    );
  };
  return (
    <MainGrid>
      <HeaderText variant="h4">{vegetable.vegetableName}</HeaderText>
      <BodyGrid>
        <DetailGrid>
          <Detail>
            <Typography variant="h6">
              Botanical Name (พฤกษศาสตร์) :&nbsp;&nbsp;
            </Typography>
            <Typography variant="body1">{vegetable.botanicalName}</Typography>
          </Detail>
          <Detail>
            <Typography variant="h6">
              Common Name (ชื่อทั่วไป) :&nbsp;&nbsp;
            </Typography>
            <Typography variant="body1">{vegetable.commonName}</Typography>
          </Detail>
          <Description>
            <Typography variant="h6">Description : </Typography>
            <p>{vegetable.description}</p>
          </Description>
        </DetailGrid>
        <ImageGrid>{renderImage(vegetable.picture)}</ImageGrid>
      </BodyGrid>
      {recommendMenu.length !== 0 && (
        <RecommendGrid>
          <Typography variant="h5">Recommend Menu</Typography>
          <MenuTab canReject={false} menus={recommendMenu} />
        </RecommendGrid>
      )}
    </MainGrid>
  );
};

export default VegetableDetailItem;
