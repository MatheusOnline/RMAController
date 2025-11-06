import styled from "styled-components";
import { Link } from "react-router-dom";


export const CardContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  overflow: hidden;
`;

export const HeaderCard = styled.div`
  background-color: #fafafa;
  padding: 10px 15px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

export const ProductSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  width: 60%;
`;

export const ProductImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  text-align: right;
  width: 40%;
`;

export const Label = styled.span`
  font-size: 13px;
  color: #666;
`;

export const Value = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #333;
`;

export const ActionLink = styled(Link)`
  color: #ee4d2d;
  font-weight: bold;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;
