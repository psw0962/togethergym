import styled from 'styled-components';

const CommonFont = styled.p`
  color: ${props => (props.color ? props.color : '')};
  font-size: ${props => (props.fontSize ? props.fontSize : '1.6rem')};
  letter-spacing: ${props => (props.letterSpacing ? props.letterSpacing : 0)};
  line-height: ${props => (props.lineHeight ? props.lineHeight : '')};
  white-space: ${props => (props.whiteSpace ? props.whiteSpace : '')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 600)};
  text-align: ${props => (props.textAlign ? props.textAlign : '')};
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : ''};
  margin: ${({ margin }) => margin};
  cursor: ${props => (props.pointer ? 'pointer' : '')};
  transform: translateY(
    ${props => {
      return props.translateY ? `${props.translateY}px` : '0px';
    }}
  );
`;

const Font = props => {
  return <CommonFont {...props}>{props.children}</CommonFont>;
};

export default Font;
