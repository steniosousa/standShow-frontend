import './style.css';

export function Login() {
  return (
    <div class="box">
      <form>
        <h2>Login</h2>
        <div class="inputBox">
          <input type="text" required="required"/>
          <span>Nome do Usuário</span>
          <i></i>
        </div>
        <div class="inputBox">
          <input type="password" required="required"/>
          <span>Senha</span>
          <i></i>
        </div>
        <div class="links">
          <a href="#">Esqueci minha senha</a>
          <a href="#">Criar Conta</a>
        </div>
        <input type="submit" value="Login"/>
      </form>
    </div>
  )
}