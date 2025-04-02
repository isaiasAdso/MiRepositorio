import styled from "styled-components"

export const EducationContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.CardData || "#1a2035"};
  border-radius: 20px;
  color: ${({ theme }) => theme.color || "#fff"};
  height: 100%;


  @media screen and (max-width: 480px) {
    height: 400px;
  }
`

export const EducationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20%;
`

export const EducationTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  margin-left: 10px;
`

export const HeaderIcon = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.color || "#fff"};
  margin-right: 10px;
`

export const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`

export const EducationItem = styled.div`
  background-color: ${({ theme }) => theme.CardBackground || "#252d47"};
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 90%;
  height: 125px;
  .arrow-icon {
    margin-top: 10px;
    margin-left: 10px;
    font-size: 16px;
    flex-shrink: 0;
    color: #ffffff;
  }
  
  .education-content {
    flex: 1;
  }
`

export const EducationSchool = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #ffffff;
  margin-top: 10px;
`

export const EducationPeriod = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.secondaryText || "#a0aec0"};
  margin-bottom: 5px;
`

export const EducationDegree = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`

export const EducationGrade = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`

