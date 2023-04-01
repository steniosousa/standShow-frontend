import './style.css';

export function Ftp() {
  return (
    <div className='ftpButton'>
      <button type="submit" className='btn'>
        +
      </button>

      <div className="ftpAccount">
        <div className='account'>
          <div className="iconUser">
            <img src="https://cdn-icons-png.flaticon.com/512/74/74577.png" alt="User" />
          </div>
          <div className="inputs">
            <input type="text" name='userName' id='userName' placeholder='Usúario' />
            <input type="password" name="password" id="password" placeholder='Senha'/>
          </div>
          <button type="submit" id='buttonLogin'>Login</button>
        </div>
      </div>
    </div>
  )
}