import React, { FormEvent, useState } from 'react';
import "./Login.css";
import toolzz from "../../assets/toolzz.png";
import toolzz2 from "../../assets/toolzz2.png";
import buttonlight from "../../assets/icon-button-light.png";
import buttonlight1 from "../../assets/icon-button-light-1.png";
import buttonlight2 from "../../assets/icon-button-light-2.png";
import buttonlight3 from "../../assets/icon-button-light-3.png";
import buttondark from "../../assets/icon-button-dark.png";
import buttondark1 from "../../assets/icon-button-dark-1.png";
import buttondark2 from "../../assets/icon-button-dark-2.png";
import buttondark3 from "../../assets/icon-button-dark-3.png";
import user from "../../assets/search.png";
import passwordIcon from "../../assets/password.png";
import catcha from "../../assets/catcha.png";
import privacy from "../../assets/Privacy - Terms.png";
import plus from "../../assets/plus.png";
import light from "../../assets/btnlight.png";
import dark from "../../assets/dark.png";


interface LoginProps {
    onLogin: (status: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [isDark, setIsDark] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();

        // Mock login
        if (username === 'user' && password === 'password') {
            onLogin(true);
        } else {
            alert('Invalid credentials');
        }
    };


    return (
        <>
            <div className="container" data-theme={isDark ? "dark" : "light"}>
                <div className="info">
                    <div className="info-container">
                        <div className="circle">
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        <img onClick={() => setIsDark(!isDark)} src={isDark ? dark : light} alt="" />
                    </div>

                    <div className="cursos">
                        <span>Cursos</span>
                        <h1>Plataforma de cursos completa</h1>
                        <p>Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum</p>
                    </div>

                    <div className="numberPages">
                        <div className='tabs'>
                            <div className='active'></div>
                            <div></div>
                            <div></div>
                        </div>

                        <div className='arrows'>
                            <i className='bx bx-chevron-left'></i>
                            <i className='bx bx-chevron-right active'></i>
                        </div>
                    </div>
                </div>
                <div className="login-container">
                    <div className="header-content">
                        <div className="circle">
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        <span>Criar conta</span>
                    </div>

                    <div className='tr'></div>

                    <div className="header">
                        <img src={isDark ? toolzz2 : toolzz} width={130} alt="" />
                        <span>Criar conta</span>
                    </div>
                    <h1>Boas-vindas!</h1>
                    <p>Entre utilizando uma das opções abaixo</p>
                    <div className='icons-auth'>
                        {
                            isDark ? (
                                <>


                                    <img src={buttondark} alt="" />
                                    <img src={buttondark1} alt="" />
                                    <img src={buttondark2} alt="" />
                                    <img src={buttondark3} alt="" />
                                </>
                            ) : (
                                <>
                                    <img src={buttonlight} alt="" />
                                    <img src={buttonlight1} alt="" />
                                    <img src={buttonlight2} alt="" />
                                    <img src={buttonlight3} alt="" />
                                </>
                            )
                        }

                    </div>

                    <div className='divOr'>
                        <div></div>
                        <span>ou</span>
                        <div></div>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className='formContainer'>
                            <label>Usuário</label>
                            <div className='input'>
                                <img src={user} alt="" />
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>

                            <label>Senha</label>
                            <div className='input'>
                                <img src={passwordIcon} alt="" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="conectado">
                            <input type="checkbox" />
                            <span>Manter conectado</span>
                        </div>

                        <div className='captcha-container'>
                            <div className="checkout">
                                <input type="checkbox" />
                                <span>I am human</span>
                            </div>
                            <div className="captcha">
                                <img src={catcha} alt="" />
                                <img src={privacy} alt="" />
                            </div>
                        </div>

                        <div className="formSubmit">
                            <img src={plus} alt="" />
                            <button type='submit'>Entrar</button>
                        </div>
                    </form>
                    <span className='esqueceuSenha'>Esqueceu sua senha? <span className='recuperarSenha'>Recuperar senha</span></span>
                </div>
            </div>
        </>
    );
}

export default Login;
