import { Box, ImageList, ImageListItem, Typography } from "@mui/material";

function Rightbar() {
  return (
    <Box
      padding={2}
      flex={2}
      sx={{ display: { xs: "none", sm: "block" } }}
      backgroundColor="#d4df9e"
    >
      <Box
        backgroundColor="#12100e"
        width="100%"
        height="100%"
        borderRadius={3}
      >
        <Typography
          variant="h6"
          textAlign="center"
          paddingTop="10px"
          color="#d4df9e"
        >
          Hot Shit!
        </Typography>
        <ImageList cols={1} rowHeight={180} gap={5}>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2009/11/8/1257676031933/A-man-snorting-cocaine-001.jpg?width=465&quality=85&dpr=1&s=none"
              alt=""
            />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
}

export default Rightbar;
