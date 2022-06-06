import styled from "styled-components";

export const Theme = {
    colors: {
      bg: `#F9F9FA`,
      primary: `#0066FF`,
      secondary: `#FFD500`,
      dark: `#4DBFB4`,
      light: `#FFFFFF`,
      red: `#ff5851`,
      gray6: `#98A0AE`,
      gray9: `#3A4049`,
      border: `#e9e9e9`,

    },
    fonts: {
      body: `Inter`,
      heading: `Inter`,
    },
    grids: {
        small: `360px`,
        medium: `744px`,
        large: `992px`,
        xlarge: `1240px`,
    }
  }
  
  export const Navbar = styled.nav`
    background: ${Theme.colors.dark};
    font-family: ${Theme.fonts.heading};
    color: ${Theme.colors.light};
    width: ${Theme.grids.xlarge};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
        a { color: white; text-decoration: none;}

        @media (max-width: 1024px){
            width: ${Theme.grids.large};
        }
        @media (max-width: 768px){
          width: ${Theme.grids.medium};
        }
        @media (max-width: 375px){
          width: ${Theme.grids.small};
     
        }
    }`;
  
  export const Brand = styled.a`
    font-weight: bold;
    font-style: italic;
    margin-left: 1rem;
    padding-right: 1rem;`;
  
  export const Ul = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    @media (max-width: 375px){
      display: none;
    }
    `;
  
  export const Li = styled.li`
    flex: 0 0 auto;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    color: #999;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    color: #999;
    display: flex;
    font-size: 14px;
    height: 50px;
    justify-content: center;
    line-height: 16px;
    margin: 0 10px ;
    text-decoration: none;
    white-space: nowrap;`;

    export const BtnPrimary = styled.button`
    background: ${Theme.colors.primary};
    font-size: 16px;
    border-radius: 28px;
    align-items: center;
    padding: 16px 64px;
    color: ${Theme.colors.light};
    border-style:none;
    cursor:pointer;
    &:hover{
        background: ${Theme.colors.gray9};
    }
    
    `;

    export const Txtfield = styled.input`
    background: ${Theme.colors.light};
    font-size: 16px;
    border-radius: 28px;
    align-items: center;
    padding: 16px 24px;
    border: 1px solid ${Theme.colors.border};
    width:100%;
    margin-right:1rem;
    ::placeholder{
        color: ${Theme.colors.gray6};
    }
    `;
    export const TxtArea = styled.textarea`
    background: ${Theme.colors.light};
    font-size: 16px;
    border-radius: 28px;
    align-items: center;
    padding: 16px 24px;
    border: 1px solid ${Theme.colors.border};
    width:100%;
    margin-right:1rem;
    font-family: ${Theme.fonts.body};
    ::placeholder{
        color: ${Theme.colors.gray6};
    }
    `;


    export const DropdownMenu = styled.select`
    background: ${Theme.colors.light};
    font-size: 16px;
    border-radius: 28px;
    align-items: center;
    padding: 16px 24px;
    border: none;
    margin-right: 8px;
    border-right: 24px solid transparent;
    outline: ${Theme.colors.border} auto 1px;
    :focus-visible{
        border: 1px solid ${Theme.colors.primary};
        border-right: 24px solid transparent;
        outline: ${Theme.colors.primary} auto 1px;

    `;
    export const DropdownItem = styled.option`
    background: ${Theme.colors.light};
    font-size: 16px;
    border-radius: 28px;
    align-items: center;
    padding: 16px 24px;
    border: 0px;
    ::placeholder{
        color: ${Theme.colors.gray6};
    }
    `;