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

const RecipeDetailItem = () => {
    return (
        <MainGrid>
            <HeaderText variant='h4'>Thitiwut P.</HeaderText>
            <BodyGrid>
                <DetailGrid>
                    <Detail>
                        <Typography variant='h6'>Menu :&nbsp;&nbsp;</Typography>
                        <Typography variant='body1'>ต้มยำกุ้ง</Typography>
                    </Detail>
                    <Detail>
                        <Typography variant='h6'>Date And Time :&nbsp;&nbsp;</Typography>
                        <Typography variant='body1'>Sun 29 Aug   00:29</Typography>
                    </Detail>
                    <Detail>
                    <Description>
                        <Typography variant='h6'>Ingredients : </Typography>
                        <p>กุ้งกุลาดำตัวใหญ่ หรือกุ้งแม่น้ำ เห็ดฟางผ่าครึ่ง พริกขี้หนู ใบมะกรูดฉีกเอาก้านออก ข่าหั่นแว่น ตะไคร้ทุบแล้วหั่นท่อน ผักชี โรยหน้า น้ำพริกเผา 1 ช้อนชา มะนาว 1 ลูก กะทิหรือนมข้นจืด 1/2 ถ้วย น้ำตาล 1/2 ช้อนโต๊ะ น้ำปลา 1 ช้อนโต๊ะ เกลือ 1 หยิบมือ น้ำซุป (ถ้าไม่มีเป็นซุปสำเร็จรูปกับน้ำเปล่า</p>
                    </Description>
                    </Detail>
                    <Description>
                        <Typography variant='h6'>Directions : </Typography>
                        <p>ก่อนอื่นต้องแกะเปลือกกุ้งผ่าเอาเส้นดำออกล้างให้ สะอาด หั่นเครื่องต้มยำ พริก ขิง ข่า ตะไคร้ ใบมะกรูดและเห็ด ให้พร้อมนำน้ำซุปไปตั้งไฟให้เดือด ใส่เครื่องต้มยำลงไปให้หมด พอเดือดอีกครั้งก็ใสกุ้งที่เตรียมไว้ลงไปเลย หลังจากใส่กุ้งลงไปแล้ว ให้ใส่ น้ำตาลนำ้ปลา พริกขี้หนู พริกเผา ใครชอบ รสแบบไหนใส่ลงไปตามชอบ ตามด้วยเห็ด ฟางปิดเตาแล้วค่อยปรุงด้วยมะนาว(เคล็ดลับการบีบน้ำมะนาวไม่ควรใส่มะนาวในน้ำที่กำลังเดือด เพราะจะทำให้มะนาวและน้ำซุปมีรสชม) โรยเกลือนิดหน่อยเพื่อดึงรสเปรี้ยวหวานเค้มให้เข้มข้นมาก ยิ่งขึ้นจัดชามเสิร์ฟ หั่นผักโรยหน้า เพิ่มความหอม</p>
                    </Description>
                </DetailGrid>
                <ImageGrid>
                    <img
                        className='RecipeDetailItem'
                        src='https://picsum.photos/300'
                        alt='mockup'
                    />
                </ImageGrid>
            </BodyGrid>
        </MainGrid>
    )
}

export default RecipeDetailItem;