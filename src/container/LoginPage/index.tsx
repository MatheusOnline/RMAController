import { Container, Form, Label, Input, Button, Error, ContainerForm } from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";






function LoginPage() {
    const [user, setUser] = useState("")
    const [password, setPassword]  = useState("")
    const [isActive, setIsActive] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate()

    async function Login(){
        try{
            setIsActive(true)
            
            const response = await fetch("https://rmabackend-zuvt.onrender.com/login/login",{
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify({user, password})
            })
            
            const datas = await response.json();

            if(datas.success){
                localStorage.setItem("user_token", datas.token)
                navigate("/")
            }else{
                setError("Senha ou usuario está incorreto")
            }


        }catch(error){
            setError("Erro no servidor " + error)
            setIsActive(true)
        }finally{
            setIsActive(false)
        }
    }

    return (
        <Container>
            <Header/>
            <ContainerForm>
                <Form action={Login}>
                    <h2>Entre com sua conta</h2>

                    <Label>
                        <p>Usuário</p>
                        <Input type="text" placeholder="Usuário" required value={user} onChange={(e)=> setUser(e.target.value)}/>
                    </Label>

                    <Label>
                        <p>Senha</p>
                        <Input type="password" placeholder="Senha" required value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    </Label>

                    {/* Mostra somente quando houver erro */}

                    {error ? <Error>{error}</Error> : <></>}
                    

                    <Button type="submit" disabled={isActive}>{isActive ? <>Carregando...</> : <>Entrar</>}</Button>
                </Form>
            </ContainerForm>
        </Container>
    );
}

export default LoginPage;
