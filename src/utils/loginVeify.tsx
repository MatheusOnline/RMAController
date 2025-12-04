import { useNavigate, Outlet } from "react-router-dom"
import { useEffect } from "react"

function LoginVerify() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("user_token")

    if (!token) {
        alert("sem token")
        navigate("/login")
      return

    }

    checkToken(token)
  }, [])

  async function checkToken(token: string) {
    try {
      const response = await fetch(
        "http://localhost:5000/login/checktoken",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      const data = await response.json()

      console.log(data)

      if(data.valid){
        return
      }

      if (!response.ok || !data.success) {
        localStorage.removeItem("user_token")
        navigate("/login")
      }

    } catch (error) {
      localStorage.removeItem("user_token" )
      navigate("/login")
    }
  }

  return <Outlet />
}

export default LoginVerify
