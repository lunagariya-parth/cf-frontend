import { Button, Flex } from "antd";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  function logout(){
     localStorage.setItem('isValid','false')
     navigate('/login'); 
  }
  return (
    <Flex vertical align='flex-start' gap={20} style={{marginTop: 100}}>
      <h1>About Page</h1>
      <Button type="primary" onClick={logout} >
        Logout
      </Button>
    </Flex>
  )
}

export default About
