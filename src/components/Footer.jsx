import {
    Facebook,
    GitHub,
    Instagram,
    LinkedIn,
    MailOutline,
    Phone,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "../responsive";

  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" ,position:'relative' , bottom : '120px', left:'30px' })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    
  `;
  
  const Logo = styled.h1`
    ${mobile({ position:'relative' , left : '25px' , top :'50px' })}
  `;

  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display:'none' })}
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>Urvish Prajapati</Logo>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <LinkedIn/>
            </SocialIcon>
            <SocialIcon color="000000">
              <GitHub/>
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="3B5999">
              <Facebook/>
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> Ahmedabad, India
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +91 9601567036
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> urvishmeghani111@gmail.com
          </ContactItem>
        </Right>
      </Container>
    );
  };
  
  export default Footer;