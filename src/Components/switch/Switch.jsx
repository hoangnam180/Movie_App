import styled from 'styled-components';
const color = {
   $black:"#1E1E1E",
   $grey:"#CCCCCC",
   $white:"#ffffff7d",
   $width:"8.5rem",
   $height:"2.8rem",
   $mobilewidth:"5.5rem",
   $mobileheight:"2.5rem",
};
const Container = styled.div`

   span.switcher {
      position: relative;
      width:${color.$width};
      height:${color.$height};
      border-radius:25px;
      margin:20px 0;
      input {
         appearance: none;
         
         position: relative;

         width:${color.$width};
         height:${color.$height};
         border-radius:25px;

         background-color:${color.$black};
         outline:none;

         font-family: 'Oswald', sans-serif;
         &:before, &:after {
            z-index:2;

            position: absolute;
            top:50%;
            transform:translateY(-50%);

            color:${color.$white};
         }
         &:before {
            content: 'OFF';
            font-size: 1.3rem;
            left:20px;
         }
         &:after {
            content: 'ON';
            right:20px;
            font-size: 1.3rem;
         }
      }
      label {
         z-index:1;
         position: absolute;
         top:10px;
         bottom:10px;
         
         border-radius:20px;
      }
      &.switcher-1 {
         input {
         cursor: pointer;
            transition:.25s -.1s;
            &:checked {
               background-color:${color.$white};
               &:before {
                  content: '';
                  color:${color.$white};
                  transition: color .5s .2s;
               }
               &:after {
                  color:${color.$grey};;
                  transition: color .5s;
               }
               &+label {
                  left:10px;
                  right:100px;

                  background:${color.$black};
                  
                  transition: left .5s, right .4s .2s;
               }
            }
            &:not(:checked) {
               background:${color.$black};
               transition: background .5s -.1s;
               &:before {
                  color:${color.$grey};
                  transition: color .5s;
               }
               &:after {
                  content: '';
                  color:${color.$black};
                  transition: color .5s .2s;
               }
               &+label {
                  left:100px;
                  right:10px;
                  
                  background:${color.$white};
                  
                  transition: left .4s .2s, right .5s, background .35s -.1s;
               }
            }
         }
      }
   }
   @media only screen and (max-width: 735px) {
   span.switcher {
         width:${color.$mobilewidth};
         height:${color.$mobileheight};
      input {
         width:${color.$mobilewidth};
         height:${color.$mobileheight};
      }
   }
  
  }
`

const Switch = ({onClick}) => {
    return ( 
        <Container>
            <span onClick={onClick} className="switcher switcher-1">
            <input type="checkbox" id="switcher-1"/>
            <label htmlFor="switcher-1"></label>
            </span>
        </Container>
     );
}
 
export default Switch;