
import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  height: 526px
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #2D3436;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-weight: 800;
  font-size: 12px;
  line-height: 15px;
  color:  #ADADAD;
  font-weight: bold;
`;

export const Icon = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`;
