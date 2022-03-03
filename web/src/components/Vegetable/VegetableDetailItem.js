import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import MenuTab from "../Menu/MenuTab";

const MainGrid = styled(Grid)`
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: #F7F7F7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 44px;
  display: flex;
  flex-direction: column;
  margin-bottom:4em;
`

const HeaderText = styled(Typography)`
  cursor: default;
  border-bottom: 2px solid #000000;
  padding-bottom: 20px;
`

const BodyGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 0;
`

const DetailGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`

const Detail = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`

const Description = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`

const ImageGrid = styled(Grid)``

const RecommendGrid = styled(Grid)``

const VegetableDetailItem = () => {
    return (
        <MainGrid>
            <HeaderText variant='h4'>Tomato (มะเขือเทศ)</HeaderText>
            <BodyGrid>
                <DetailGrid>
                    <Detail>
                        <Typography variant='h6'>Botanical Name (พฤกษศาสตร์) :&nbsp;&nbsp;</Typography>
                        <Typography variant='body1'>Solanum lycopersicum</Typography>
                    </Detail>
                    <Detail>
                        <Typography variant='h6'>Common Name (ชื่อทั่วไป) :&nbsp;&nbsp;</Typography>
                        <Typography variant='body1'>Garden toamto, Tomato plant</Typography>
                    </Detail>
                    <Detail>
                        <Typography variant='h6'>Genus (ประเภท) :&nbsp;&nbsp;</Typography>
                        <Typography variant='body1'>Nightshades</Typography>
                    </Detail>
                    <Description>
                        <Typography variant='h6'>Description</Typography>
                        <p>มะเขือเทศ (ชื่อวิทยาศาสตร์: Lycopersicon esculentum Mill.) เป็นพืชชนิดหนึ่งในตระกูลผล มีเนื้อหลายเมล็ดอุดมไปด้วยคุณค่าทางอาหารมะเขือเทศขนาดปานกลางจะมีปริมาณวิตามินซีครึ่งหนึงของส้มโอทั้งผลมะเขือเทศผลหนึ่งจะมีวิตามินเอราว 1 ใน 3ของวิตามินเอที่ร่างกายต้องการในหนึ่งวัน นอกจากนี้มะเขือเทศยังมีโปแตสเซียม ฟอสฟอรัส แมกนีเซียม และแร่ธาตุอื่นๆ อีกหลายชนิด</p>
                    </Description>
                </DetailGrid>
                <ImageGrid>
                    <img
                        className='VegetableDetailImage'
                        src='https://picsum.photos/300'
                        alt='mockup'
                    />
                </ImageGrid>
            </BodyGrid>
            <RecommendGrid>
                <Typography variant='h5'>Recommend Menu</Typography>
                <MenuTab />
            </RecommendGrid>
        </MainGrid>
    )
}

export default VegetableDetailItem;