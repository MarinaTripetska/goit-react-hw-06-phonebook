import styled from 'styled-components'

const Label = styled.label`
  margin-bottom: 50px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  font-weight: 600;
  & input {
    margin-left: 15px;
  }
`

const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <input type="text" onChange={onChange} value={value} />
  </Label>
)

export default Filter
